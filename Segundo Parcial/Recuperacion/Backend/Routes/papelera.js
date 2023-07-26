const { Router } = require('express');
const { getPapelera,restoreData } = require('../controllers/papelera');

const router = Router();

router.get('/', getPapelera);
router.put('/restaurar/:id', restoreData); // Agregar la ruta para restaurar los datos


module.exports = router;