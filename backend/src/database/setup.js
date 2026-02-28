import pool from './config.js';

const setupDatabase = async () => {
  try {
    console.log('🌱 Criando tabelas do banco de dados...');

    // Tabela de usuários
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela users criada');

    // Tabela de plantas do usuário
    await pool.query(`
      CREATE TABLE IF NOT EXISTS user_plants (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plant_name VARCHAR(255) NOT NULL,
        plant_type VARCHAR(100) NOT NULL,
        quantity DECIMAL(10, 2) NOT NULL,
        area_m2 DECIMAL(10, 2) NOT NULL,
        planting_date DATE NOT NULL,
        planting_method VARCHAR(100) NOT NULL,
        regenerative_practices TEXT,
        carbon_sequestrated DECIMAL(10, 2) DEFAULT 0,
        status VARCHAR(50) DEFAULT 'growing',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela user_plants criada');

    // Tabela de créditos de carbono
    await pool.query(`
      CREATE TABLE IF NOT EXISTS carbon_credits (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plant_id UUID NOT NULL REFERENCES user_plants(id) ON DELETE CASCADE,
        carbon_amount DECIMAL(10, 2) NOT NULL,
        credit_type VARCHAR(50) DEFAULT 'estimated',
        certification_status VARCHAR(50) DEFAULT 'pending',
        vcs_verified BOOLEAN DEFAULT FALSE,
        gold_standard_verified BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        verified_at TIMESTAMP
      );
    `);
    console.log('✅ Tabela carbon_credits criada');

    // Tabela de auditoria
    await pool.query(`
      CREATE TABLE IF NOT EXISTS audit_log (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id) ON DELETE CASCADE,
        action VARCHAR(255) NOT NULL,
        details JSONB,
        ip_address VARCHAR(45),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Tabela audit_log criada');

    // Tabela de transações
    await pool.query(`
      CREATE TABLE IF NOT EXISTS transactions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        type VARCHAR(50) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        currency VARCHAR(10) DEFAULT 'BRL',
        status VARCHAR(50) DEFAULT 'pending',
        details JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        completed_at TIMESTAMP
      );
    `);
    console.log('✅ Tabela transactions criada');

    // Criar índices
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_user_plants_user_id ON user_plants(user_id);
      CREATE INDEX IF NOT EXISTS idx_carbon_credits_user_id ON carbon_credits(user_id);
      CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
      CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON transactions(user_id);
    `);
    console.log('✅ Índices criados');

    console.log('✅ Banco de dados configurado com sucesso!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao configurar banco de dados:', error);
    process.exit(1);
  }
};

setupDatabase();
