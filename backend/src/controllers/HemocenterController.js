import Hemocenter from '../models/Hemocenter';

const createHemocenter = async (req, res) => {
    try {
        const { id, name, latitude, longitude } = await Hemocenter.create(req.body);

        return res.json({
            id,
            name,
            latitude,
            longitude,
        });
    } catch (err) {
        console.log(err);
    }
}

const listHemocenters = async (req, res) => {
    const hemo = await Hemocenter.findAll({})

    return res.json(hemo)
}

const getHemocenter = async (req, res) => {

    const hemocenter = await Hemocenter.findByPk(req.params.id);

    return res.json(hemocenter);
}

export { createHemocenter, listHemocenters, getHemocenter }