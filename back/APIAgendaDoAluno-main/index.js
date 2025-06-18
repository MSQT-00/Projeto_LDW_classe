const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const sequelize = require('./config/database');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*', // Permite requisições de qualquer origem
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/faltas', require('./routes/faltas'));
app.use('/api/professores', require('./routes/professor'));
app.use('/api/anotacoes', require('./routes/Anotacoes'));
app.use('/api/alunos', require('./routes/aluno'));
app.use('/api/calendario', require('./routes/calendario'));

const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  })
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));
