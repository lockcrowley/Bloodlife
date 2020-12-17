import jwt from 'jsonwebtoken';
import User from '../models/User';

//import authConfig from '../config/auth';

const userSession = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } })

    if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Senhas não coincidem ' });
      }

    const { id, name, whatsapp } = user;

    return res.json({
        user: {
            id,
            name,
            whatsapp,
            password
        },
        token: jwt.sign({ id }, '1fa905c98edb142670cd635f5ea24954', {
            expiresIn: '7d',
        }),
    });
}

export { userSession }