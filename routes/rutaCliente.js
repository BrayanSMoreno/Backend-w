const express = require('express');
const router = express.Router();
const clienteController = require ('../controllers/clienteController');
const { route } = require('./usuarios');

// Estas son las rutas de nuestro crud 

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarCliente);
router.get('/:id', clienteController.buscarCliente);
router.delete('/:id', clienteController.eliminarCliente);
router.put('/:id', clienteController.actualizarCliente);


module.exports = router;