import express from 'express';
import pool from '../database/config.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

// Obter perfil
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const result = await pool.query(
      'SELECT id, email, name, created_at FROM users WHERE id = $1',
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    res.status(500).json({ error: 'Erro ao buscar perfil' });
  }
});

// Obter ranking
router.get('/ranking', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.id, u.name, COUNT(up.id) as total_plants, COALESCE(SUM(CAST(up.carbon_sequestrated AS DECIMAL)), 0) as total_carbon
      FROM users u
      LEFT JOIN user_plants up ON u.id = up.user_id
      GROUP BY u.id, u.name
      ORDER BY total_carbon DESC
      LIMIT 100
    `);

    res.json({
      ranking: result.rows,
      count: result.rows.length
    });
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    res.status(500).json({ error: 'Erro ao buscar ranking' });
  }
});

export default router;
