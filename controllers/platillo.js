const platilloModel = require('../models/platillo');
const e = require('express');
const { json } = require('express');
const platilloController = {};

platilloController.getPlatillos = async(req, res) => {
    const platillos = await platilloModel.find();
    res.json(platillos);
};

platilloController.agregarPlatillos = async(req, res) => {

    const addPlatillo = await new platilloModel(req.body);

    await addPlatillo.save();
    res.json({
        message: 'Platillo registrado'
    })
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
    console.log(addPlatillo);
    await platilloModel.findByIdAndUpdate(req.params.id, { $set: addPlatillo }, { new: true });
    res.json({
        status: 'Actualizado'
    });
};
platilloController.findCategoriaId = async(req, res) => {
    const platillo = await platilloModel.findById(req.params.id, );
    res.json(platillo);
};

module.exports = platilloController;