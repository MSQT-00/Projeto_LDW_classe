const Aluno = require('../models/Aluno');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { ra, nome, email, instituicao, senha, contato, curso, nivel, idade } = req.body;

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
        res.status(500).send('Erro no servidor');
    }
};

exports.login = async (req, res) => {
    const { identificador, senha } = req.body; // identificador = email ou ra

    try {
        const aluno = await Aluno.findOne({
            where: {
                [Aluno.sequelize.Op.or]: [
                    { email: identificador },
                    { ra: identificador }
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

        const payload = { idAluno: aluno.id_aluno };

        const token = jwt.sign(payload, process.env.JWT_SECRETO, { expiresIn: '1h' });

        res.json({ token });
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro no servidor');
    }
};
