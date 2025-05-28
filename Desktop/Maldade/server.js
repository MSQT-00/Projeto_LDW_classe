const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Simulação de banco de dados em memória
const users = {};

// Endpoint para registrar um novo usuário
app.post('/api/auth/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username e password são obrigatórios!' });
    }

    if (users[username]) {
        return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = hashedPassword;

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
});

// Endpoint para login
app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username e password são obrigatórios!' });
    }

    const storedPassword = users[username];
    if (!storedPassword) {
        return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    // Verifica se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, storedPassword);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Credenciais inválidas!' });
    }

    res.status(200).json({ message: 'Login bem-sucedido!' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});