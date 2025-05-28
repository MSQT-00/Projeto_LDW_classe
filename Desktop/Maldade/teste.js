const axios = require('axios');

const baseURL = 'http://localhost:3000/api/auth';

// Função para registrar um usuário
async function registerUser(username, password) {
    try {
        const response = await axios.post(`${baseURL}/register`, { username, password });
        console.log('Registro:', response.data);
    } catch (error) {
        console.error('Erro no registro:', error.response.data);
    }
}

// Função para fazer login
async function loginUser(username, password) {
    try {
        const response = await axios.post(`${baseURL}/login`, { username, password });
        console.log('Login:', response.data);
    } catch (error) {
        console.error('Erro no login:', error.response.data);
    }
}

// Testando a API
(async () => {
    await registerUser('admin', '123456'); // Testa o registro
    await loginUser('admin', '123456');   // Testa o login
})();