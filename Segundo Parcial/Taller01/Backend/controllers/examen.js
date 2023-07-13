const { response, json, request } = require('express');
const Examen = require('../models/examen');



const getExamenes = async (req, res= response)=>{
        const examen =await  Examen.find();
        return res.json({examen})
}


const getExamen = async (req=request, res= response)=>{
    const {id} = req.params
    const examen =  await Examen.findById(id)
    res.json(examen);
}

const createExamen = async(req=request,res=response)=>{
    const {descripcion,  indicaciones, resultados} =  req.body;
    
    const Examensave = new Examen({ descripcion,  indicaciones, resultados })

    await Examensave.save()
  
    res.status(201).json(Examensave);
}
const updatedExamen = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatedExamen =  await Examen.findByIdAndUpdate(id,data )
    res.json(`Se ha editado el tipo de examen`);
    res.json(updatedExamen);
}
const deleteExamen =  async (req, res= response)=>{
    const {id} = req.params;
    await Examen.findByIdAndDelete(id)
    res.json(`Se ha eliminado el tipo de examen`);
}

 module.exports ={
    getExamen, 
    getExamenes,
    createExamen,
    updatedExamen,
    deleteExamen
 }