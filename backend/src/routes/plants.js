import express from 'express';
import pool from '../database/config.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Adicionar planta
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { plantName, plantType, quantity, areaMm2, plantingDate, plantingMethod, regenerativePractices } = req.body;
    const userId = req.userId;

    const result = await pool.query(
      'INSERT INTO user_plants (user_id, plant_name, plant_type, quantity, area_m2, planting_date, planting_method, regenerative_practices) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [userId, plantName, plantType, quantity, areaMm2, plantingDate, plantingMethod, regenerativePractices]
    );

    res.status(201).json({
      message: 'Planta adicionada com sucesso',
      plant: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao adicionar planta:', error);
    res.status(500).json({ error: 'Erro ao adicionar planta' });
  }
});

// Obter minhas plantas
router.get('/my-plants', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const result = await pool.query(
      'SELECT * FROM user_plants WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );

    res.json({
      plants: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Erro ao buscar plantas:', error);
    res.status(500).json({ error: 'Erro ao buscar plantas' });
  }
});

export default router;
