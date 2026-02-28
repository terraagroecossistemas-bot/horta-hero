import express from 'express';
import pool from '../database/config.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Calcular créditos de carbono
router.post('/calculate', authMiddleware, async (req, res) => {
  try {
    const { plantId } = req.body;
    const userId = req.userId;

    // Buscar planta
    const plantResult = await pool.query(
      'SELECT * FROM user_plants WHERE id = $1 AND user_id = $2',
      [plantId, userId]
    );

    if (plantResult.rows.length === 0) {
      return res.status(404).json({ error: 'Planta não encontrada' });
    }

    const plant = plantResult.rows[0];

    // Dados de sequestro por tipo de planta (kg CO2/ano)
    const sequestrationRates = {
      'arvore-nativa': 5.5,
      'arvore-frutifera': 3.5,
      'hortaliça': 1.0,
      'leguminosa': 2.0,
      'flor': 0.5
    };

    const baseSequestration = sequestrationRates[plant.plant_type] || 2.0;
    
    // Multiplicadores
    const methodMultiplier = {
      'semente': 1.0,
      'muda': 1.2,
      'transplante': 1.1
    }[plant.planting_method] || 1.0;

    // Práticas regenerativas
    let practiceMultiplier = 1.0;
    if (plant.regenerative_practices) {
      if (plant.regenerative_practices.includes('compostagem')) practiceMultiplier += 0.1;
      if (plant.regenerative_practices.includes('solo-coberto')) practiceMultiplier += 0.2;
      if (plant.regenerative_practices.includes('consorcio')) practiceMultiplier += 0.15;
    }

    // Cálculo final
    const carbonSequestrated = baseSequestration * plant.area_m2 * methodMultiplier * practiceMultiplier;

    // Atualizar planta
    await pool.query(
      'UPDATE user_plants SET carbon_sequestrated = $1 WHERE id = $2',
      [carbonSequestrated, plantId]
    );

    // Criar crédito de carbono
    const creditResult = await pool.query(
      'INSERT INTO carbon_credits (user_id, plant_id, carbon_amount, credit_type) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, plantId, carbonSequestrated, 'estimated']
    );

    res.json({
      message: 'Crédito de carbono calculado',
      credit: creditResult.rows[0],
      calculation: {
        baseSequestration,
        area: plant.area_m2,
        methodMultiplier,
        practiceMultiplier,
        total: carbonSequestrated
      }
    });
  } catch (error) {
    console.error('Erro ao calcular carbono:', error);
    res.status(500).json({ error: 'Erro ao calcular crédito de carbono' });
  }
});

// Obter créditos do usuário
router.get('/my-credits', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const result = await pool.query(
      'SELECT * FROM carbon_credits WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );

    const totalCarbon = result.rows.reduce((sum, credit) => sum + parseFloat(credit.carbon_amount), 0);

    res.json({
      credits: result.rows,
      total: totalCarbon,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Erro ao buscar créditos:', error);
    res.status(500).json({ error: 'Erro ao buscar créditos' });
  }
});

// Verificar crédito para certificação
router.post('/verify/:creditId', authMiddleware, async (req, res) => {
  try {
    const { creditId } = req.params;
    const { vcsVerified, goldStandardVerified } = req.body;
    const userId = req.userId;

    // Verificar propriedade
    const creditResult = await pool.query(
      'SELECT * FROM carbon_credits WHERE id = $1 AND user_id = $2',
      [creditId, userId]
    );

    if (creditResult.rows.length === 0) {
      return res.status(404).json({ error: 'Crédito não encontrado' });
    }

    // Atualizar verificação
    const updateResult = await pool.query(
      'UPDATE carbon_credits SET vcs_verified = $1, gold_standard_verified = $2, certification_status = $3, verified_at = NOW() WHERE id = $4 RETURNING *',
      [vcsVerified || false, goldStandardVerified || false, 'verified', creditId]
    );

    res.json({
      message: 'Crédito verificado',
      credit: updateResult.rows[0]
    });
  } catch (error) {
    console.error('Erro ao verificar crédito:', error);
    res.status(500).json({ error: 'Erro ao verificar crédito' });
  }
});

// Estatísticas de carbono
router.get('/stats', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const result = await pool.query(`
      SELECT 
        COUNT(*) as total_credits,
        SUM(CAST(carbon_amount AS DECIMAL)) as total_carbon,
        AVG(CAST(carbon_amount AS DECIMAL)) as avg_carbon,
        COUNT(CASE WHEN certification_status = 'verified' THEN 1 END) as verified_credits
      FROM carbon_credits
      WHERE user_id = $1
    `, [userId]);

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    res.status(500).json({ error: 'Erro ao buscar estatísticas' });
  }
});

export default router;
