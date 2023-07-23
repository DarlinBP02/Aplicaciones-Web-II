const { Router } = require('express')
const { check } =  require('express-validator')


const { 
    createResultado,
    deleteResultado,
    updateResultado,
    getResultados,
    getResultado
} = require('../controllers/resultados');

const { validateFields } = require('../middlewares')

const router = Router();

router.get('/', getResultados);

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo correcto')
            .isMongoId(), 
            validateFields],
getResultado );

router.post('/',
  [
    check('ResultadoExamen').notEmpty().withMessage('No debe estar vacío el campo ResultadoExamen'),
    check('ValorPagado').notEmpty().withMessage('No debe estar vacío el campo ValorPagado'),
    check('Observaciones').notEmpty().withMessage('No debe estar vacío el campo Observaciones'),
    validateFields
  ],
  createResultado
);

 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updateResultado);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deleteResultado);

module.exports = router;