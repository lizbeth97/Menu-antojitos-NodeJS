const express = require('express');
const router = express.Router();

const platilloController = require('../controllers/platillo');

router.get('/', platilloController.getPlatillos);
router.post('/', platilloController.agregarPlatillos);
router.get('/:id', platilloController.findCategoriaId);
router.put('/:id', platilloController.editPlatillo);

module.exports = router;