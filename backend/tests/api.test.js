/**
 * Testes da API Horta Hero
 * Executar com: npm test
 */

const BASE_URL = 'http://localhost:5000/api';

// Dados de teste
let testUser = {
  email: 'teste@horta-hero.com',
  password: 'senha123456',
  name: 'Usuário Teste'
};

let testToken = null;
let testUserId = null;
let testPlantId = null;

// Cores para output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

// Função de teste
async function test(name, fn) {
  try {
    await fn();
    console.log(`${colors.green}✅ ${name}${colors.reset}`);
  } catch (error) {
    console.log(`${colors.red}❌ ${name}${colors.reset}`);
    console.log(`   ${error.message}`);
  }
}

// Função para fazer requisições
async function request(method, path, body = null, headers = {}) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${path}`, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`${response.status}: ${data.error || 'Erro desconhecido'}`);
  }

  return data;
}

// Suite de testes
async function runTests() {
  console.log(`\n${colors.blue}🌱 Testando Horta Hero Backend${colors.reset}\n`);

  // 1. Teste de Saúde
  await test('Health Check', async () => {
    const data = await request('GET', '/health');
    if (data.status !== 'OK') throw new Error('Health check falhou');
  });

  // 2. Registro
  await test('Registrar novo usuário', async () => {
    const data = await request('POST', '/auth/register', testUser);
    if (!data.token) throw new Error('Token não retornado');
    testToken = data.token;
    testUserId = data.user.id;
  });

  // 3. Login
  await test('Fazer login', async () => {
    const data = await request('POST', '/auth/login', {
      email: testUser.email,
      password: testUser.password
    });
    if (!data.token) throw new Error('Token não retornado');
  });

  // 4. Verificar token
  await test('Verificar token', async () => {
    const data = await request('POST', '/auth/verify', null, {
      'Authorization': `Bearer ${testToken}`
    });
    if (!data.valid) throw new Error('Token inválido');
  });

  // 5. Calcular carbono
  await test('Calcular crédito de carbono', async () => {
    const data = await request('POST', '/carbon/calculate', {
      plantId: 'test-plant-id'
    }, {
      'Authorization': `Bearer ${testToken}`
    });
    if (!data.credit) throw new Error('Crédito não retornado');
  });

  // 6. Obter créditos
  await test('Obter meus créditos', async () => {
    const data = await request('GET', '/carbon/my-credits', null, {
      'Authorization': `Bearer ${testToken}`
    });
    if (!Array.isArray(data.credits)) throw new Error('Créditos não retornados');
  });

  // 7. Estatísticas
  await test('Obter estatísticas de carbono', async () => {
    const data = await request('GET', '/carbon/stats', null, {
      'Authorization': `Bearer ${testToken}`
    });
    if (data.total_credits === undefined) throw new Error('Estatísticas não retornadas');
  });

  console.log(`\n${colors.green}✅ Todos os testes concluídos!${colors.reset}\n`);
}

// Executar testes
runTests().catch(error => {
  console.error(`${colors.red}Erro ao executar testes: ${error.message}${colors.reset}`);
  process.exit(1);
});
