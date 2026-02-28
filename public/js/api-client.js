/**
 * Cliente API para Horta Hero
 * Gerencia comunicação com backend
 */

class HortaHeroAPI {
  constructor(baseURL = 'http://localhost:5000/api') {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('auth_token');
  }

  // Método auxiliar para requisições
  async request(method, endpoint, body = null) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (this.token) {
      options.headers['Authorization'] = `Bearer ${this.token}`;
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro na requisição');
      }

      return data;
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  }

  // ===== AUTENTICAÇÃO =====

  async register(email, password, name) {
    const data = await this.request('POST', '/auth/register', {
      email,
      password,
      name
    });
    this.setToken(data.token);
    return data;
  }

  async login(email, password) {
    const data = await this.request('POST', '/auth/login', {
      email,
      password
    });
    this.setToken(data.token);
    return data;
  }

  async verifyToken() {
    return await this.request('POST', '/auth/verify');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('auth_token', token);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  // ===== CRÉDITOS DE CARBONO =====

  async calculateCarbon(plantId) {
    return await this.request('POST', '/carbon/calculate', { plantId });
  }

  async getMyCredits() {
    return await this.request('GET', '/carbon/my-credits');
  }

  async verifyCreditCertification(creditId, vcsVerified, goldStandardVerified) {
    return await this.request('POST', `/carbon/verify/${creditId}`, {
      vcsVerified,
      goldStandardVerified
    });
  }

  async getCarbonStats() {
    return await this.request('GET', '/carbon/stats');
  }

  // ===== PLANTAS =====

  async addPlant(plantData) {
    return await this.request('POST', '/plants', plantData);
  }

  async getMyPlants() {
    return await this.request('GET', '/plants/my-plants');
  }

  async updatePlant(plantId, plantData) {
    return await this.request('PUT', `/plants/${plantId}`, plantData);
  }

  async deletePlant(plantId) {
    return await this.request('DELETE', `/plants/${plantId}`);
  }

  // ===== USUÁRIO =====

  async getProfile() {
    return await this.request('GET', '/user/profile');
  }

  async updateProfile(userData) {
    return await this.request('PUT', '/user/profile', userData);
  }

  async getRanking() {
    return await this.request('GET', '/user/ranking');
  }

  async getMyRankingPosition() {
    return await this.request('GET', '/user/ranking/position');
  }
}

// Instância global da API
const api = new HortaHeroAPI();

// Exportar para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HortaHeroAPI;
}
