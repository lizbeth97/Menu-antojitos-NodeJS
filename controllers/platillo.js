const platilloModel = require('../models/platillo');
const e = require('express');
const { json } = require('express');
const platilloController = {};

platilloController.getPlatillos = async(req, res) => {
    const platillos = await platilloModel.find();
    res.json(platillos);
};

platilloController.agregarPlatillos = async(req, res) => {



    const newplatillo = {
        idCategoria: req.params.id,
        strNombre: req.body.strNombre,
        strDescripcion: req.body.strDescripcion,
        strIngredientes: req.body.strIngredientes,
        nmbPiezas: req.body.nmbPiezas,
        nmbPrecio: req.body.nmbPrecio,

    };
    const addPlatillo = await new platilloModel(newplatillo);
    await addPlatillo.save((err, platillo) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El nombre del platillo ya existe'
                }
            });
        }
        res.status(200).json({
            ok: true,
            platillo: platillo
        })
    });
};
platilloController.editPlatillo = async(req, res) => {
    const addPlatillo = {
        idCategoria: req.body.idCategoria,
        strNombre: req.body.strNombre,
        strDescripcion: req.body.strDescripcion,
        strIngredientes: req.body.strIngredientes,
        nmbPiezas: req.body.nmbPiezas,
        nmbPrecio: req.body.nmbPrecio,

    };

    await platilloModel.findByIdAndUpdate(req.params.id, { $set: addPlatillo }, { new: true });
    res.json({
        status: 'Actualizado'
    });
};

platilloController.findCategoriaId = async(req, res) => {
    const query = platilloModel.find();
    let a = (await query).filter((as) => as.idCategoria == `${req.params.id}`);
    res.json(a);
};

module.exports = platilloController;