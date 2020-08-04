const express = require('express');
const router = express.Router();

const categoriaController = require('../controllers/categoria');

router.get('/', categoriaController.getCategorias);
router.post('/', categoriaController.agregarCategorias);
router.get('/:id', categoriaController.findPlatilloId);
router.put('/:id', categoriaController.editCategoria);


module.exports = router;