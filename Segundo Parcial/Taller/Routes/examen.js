const { Router } = require('express')
const { check } =  require('express-validator')


const { 
    getExamen,
    createExamen,
    getExamenes,
    updatedExamen,
    deleteExamen
} = require('../controllers/examen');

const { validateFields } = require('../middlewares');
const { get } = require('mongoose');

const router = Router();

router.get('/', getExamenes);

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getExamen );

router.post('/',
  [
    check('descripcion').notEmpty().withMessage('No debe estar vacío el campo descripcion'),
    check('indicaciones').notEmpty().withMessage('No debe estar vacío el campo indicaciones'),
    validateFields
  ],
  createExamen
);

 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updatedExamen);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteExamen);

module.exports = router;