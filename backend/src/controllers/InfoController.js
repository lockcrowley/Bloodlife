import * as Yup from 'yup'
import Info from '../models/Info';
import User from '../models/User';
import Hemocenter from '../models/Hemocenter';

const createInfo = async (req, res) => {
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        bloodtype: Yup.string().required(),
        whatsapp: Yup.string().required(),
        genre: Yup.string().required(),
        description: Yup.string().required(),
        acceptterms: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Preencha os campos corretamente' })
    }

    const {
        name,
        email,
        bloodtype,
        acceptterms,
        hemocenter,
        genre,
        description,
        whatsapp
    } = req.body;

    let location;
    let latitude;
    let longitude;

    const hemo = await Hemocenter.findOne({ where: { name: hemocenter } });

    location = hemo.id;
    latitude = hemo.latitude;
    longitude = hemo.longitude;

    if (acceptterms) {
        const info = await Info.create({
            user_id: req.userId,
            name,
            email,
            bloodtype,
            hemocenter,
            genre,
            description,
            location,
            latitude,
            acceptterms,
            longitude,
            whatsapp
        });
        
        const user = await User.findByPk(req.userId);
        await user.update({ wasaccept: true });

        return res.json(info);
    } else {
        return res.status(401).json({ error: 'Você precisa aceitar os termos de uso!' });
    }

}

const listAll = async (req, res) => {
    const infos = await Info.findAll({});

    return res.json(infos);
};

const listDetails = async (req, res) => {
    const details = await Info.findByPk(req.params.id);

    return res.json(details);
}

const listOne = async (req, res) => {
    const infos = await Info.findAll({ where: { user_id: req.userId, } })

    return res.json(infos);
}

const deleteMyInfo = async (req, res) => {
    const infos = await Info.findByPk(req.params.id);

    if (infos.user_id !== req.userId) {
        return res.status(401).json({
            error: 'Você não possui permissão para cancelar'
        })
    }

    else {
        await infos.destroy();

        return res.json({ message: 'Ficha deletada com sucesso!' });
    }

}

export { createInfo, listDetails, listAll, listOne, deleteMyInfo };