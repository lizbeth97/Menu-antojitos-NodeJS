const categoriaModel = require('../models/categoria');
const e = require('express');
const { json } = require('express');
const categoriaController = {};

categoriaController.getCategorias = async(req, res) => {
    const categorias = await categoriaModel.find();
    res.json(categorias);
};

categoriaController.agregarCategorias = async(req, res) => {
    const agrCategoria = await new categoriaModel(req.body);
    await agrCategoria.save();
    res.json({
        message: 'Categoria registrada'
    })
};
categoriaController.editCategoria = async(req, res) => {
    const agrCategoria = {
        strNombre: req.body.strNombre,
        strDescripcion: req.body.strDescripcion

    };
    console.log(agrCategoria);
    await categoriaModel.findByIdAndUpdate(req.params.id, { $set: agrCategoria }, { new: true });
    res.json({
        status: 'Actualizado'
    });
};
categoriaController.findPlatilloId = async(req, res) => {
    const categoria = await categoriaModel.findById(req.params.id);
    res.json(categoria);
};

module.exports = categoriaController;