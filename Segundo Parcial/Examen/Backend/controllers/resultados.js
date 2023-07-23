const { response, json, request } = require('express');
const Resultados = require('../models/resultados');



const getResultados = async (req, res= response)=>{
        const resultados =await  Resultados.find();
        return res.json({resultados})
}


const getResultado = async (req=request, res= response)=>{
    const {id} = req.params
    const resultado =  await Resultados.findById(id)
    res.json(resultado);
}

const createResultado = async (req = request, res = response) => {
    const { pacientes, examen, ResultadoExamen, ValorPagado, Observaciones } = req.body;
  
    const Resultadosave = new Resultados({
      pacientes,
      examen,
      ResultadoExamen,
      ValorPagado,
      Observaciones,
    });
  
    await Resultadosave.save();
  
    res.status(201).json(Resultadosave);
  };
  
const updateResultado = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedResultado =  await Resultados.findByIdAndUpdate(id,data )
    res.json(`Se ha editado el resultado`);
    res.json(updatedResultado);
}
const deleteResultado =  async (req, res= response)=>{
    const {id} = req.params;
    await Resultados.findByIdAndDelete(id)
    res.json(`Se ha eliminado el resultado`);
}

 module.exports ={
    getResultados, 
    getResultado,
    createResultado,
    updateResultado,
    deleteResultado
 }