const Aluno = require('../models/Aluno');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

exports.register = async (req, res) => {
  const { ra, login, nome, email, instituicao, senha, contato, curso, nivel, idade } = req.body;

  try {
    const alunoExistente = await Aluno.findOne({ where: { ra } }) 
        || await Aluno.findOne({ where: { email } });

    if (alunoExistente) {
      return res.status(400).json({ mensagem: 'Aluno já cadastrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    await Aluno.create({
      ra,
      login,
      nome,
      email,
      instituicao,
      senha: senhaCriptografada,
      contato,
      curso,
      nivel,
      idade
    });

    res.status(201).json({ mensagem: 'Aluno cadastrado com sucesso' });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ mensagem: 'Erro no servidor' });
  }
};

exports.login = async (req, res) => {
  const { login, senha } = req.body; // login pode ser: login, email ou RA

  try {
    const aluno = await Aluno.findOne({
      where: {
        [Op.or]: [
          { login },
          { ra: login },
          { email: login }
        ]
      }
    });

    if (!aluno) {
      return res.status(400).json({ mensagem: 'Credenciais inválidas' });
    }

    const senhaCorreta = await bcrypt.compare(senha, aluno.senha);
    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: 'Credenciais inválidas' });
    }

    const payload = { idAluno: aluno.id_aluno, nome: aluno.nome, email: aluno.email };
    const token = jwt.sign(payload, process.env.JWT_SECRETO, { expiresIn: '1h' });

    res.json({ token });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ mensagem: 'Erro no servidor' });
  }
};
