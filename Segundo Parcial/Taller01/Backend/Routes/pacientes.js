const { Router } = require('express')
const { check } =  require('express-validator')


const { 
    getPacientes,
    getPaciente,
    createPaciente,
    deletePaciente,
    updatePaciente
} = require('../controllers/pacientes');

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getPacientes);

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getPaciente );

router.post('/',
  [
    check('Nombre').notEmpty().withMessage('No debe estar vacío el campo Nombre'),
    check('Identificacion').notEmpty().withMessage('No debe estar vacío el campo Identificacion'),
    validateFields
  ],
  createPaciente
);

 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updatePaciente);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deletePaciente);

module.exports = router;