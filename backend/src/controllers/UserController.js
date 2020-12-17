import * as Yup from 'yup';
import User from '../models/User';

const createUser = async (req, res) => {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Preencha os campos corretamente' })
    }
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
        return res.status(400).json({ error: 'Este usuário já existe' })
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
        id,
        name,
        email
    });
}

const updateUser = async (req, res) => {

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
            .min(6)
            .when('oldPassword', (oldPassword, field) =>
                oldPassword ? field.required() : field
            ),
        confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Preencha os campos corretamente' })
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);


    if (email !== user.email) {
        const userExists = await User.findOne({ where: { email } });

        if (userExists) {
            return res.status(400).json({ error: 'Este usuário já existe' });
        }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.status(401).json({ error: 'As senhas não coincidem ' });
    }

    await user.update(req.body);

    const { id, name } = await User.findByPk(req.userId)

    return res.json({
        id,
        name,
        email,
    });
}

const countUsers = async (req, res) => {
    const users = await User.findAll({});

    const count = users.length;

    return res.json(count);
}

export { createUser, updateUser, countUsers }