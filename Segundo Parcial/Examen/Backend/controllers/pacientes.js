const { response, json, request } = require('express');
const Pacientes = require('../models/pacientes');



const getPacientes = async (req, res= response)=>{
        const pacientes =await  Pacientes.find();
        return res.json({pacientes})
}


const getPaciente = async (req=request, res= response)=>{
    const {id} = req.params
    const paciente =  await Pacientes.findById(id)
    res.json(paciente);
}

const createPaciente = async(req=request,res=response)=>{
    const {Nombre,  Identificacion } =  req.body;
    
    const Pacientesave = new Pacientes({ Nombre,  Identificacion })

    await Pacientesave.save()
  
    res.status(201).json(Pacientesave);
}
const updatePaciente = async(req,res =  response)=>{
    const {id} = req.params;
    const {...data } =  req.body;
    console.log(id,data)
    const updatePaciente =  await Pacientes.findByIdAndUpdate(id,data )
    res.json(`Se ha editado el paciente`);
    res.json(updatePaciente);
}
const deletePaciente =  async (req, res= response)=>{
    const {id} = req.params;
    await Pacientes.findByIdAndDelete(id)
    res.json(`Se ha eliminado el paciente`);
}

 module.exports ={
    getPaciente, 
    getPacientes,
    createPaciente,
    updatePaciente,
    deletePaciente
 }