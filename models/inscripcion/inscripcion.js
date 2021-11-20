import mongoose from "mongoose";
import { modeloUsuarios } from "../usuario/usuario.js";
import { modeloProyectos } from '../proyecto/proyecto.js';

// interface Inscripcion{
//     proyecto:Schema.Types.ObjectId,
//     estudiante:Schema.Types.ObjectId,
//     estado:Enum_EstadoInscripcion,
//     fechaIngreso:Date,
//     fechaEgreso:Date,
// }

const { Schema, model } = mongoose;

const esquemaInscripciones = new Schema({
     
    estado:{
       type: String,
       enum:['ACEPTADA', 'RECHAZADA', 'PENDIENTE'],
       required:true,
    },
    
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaEgreso:{
        type:Date,
        required:true
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref: modeloProyectos,
        required:true,
    }
    ,
    estudiante: {
        type:Schema.Types.ObjectId,
        ref: modeloUsuarios,
        required:true
    }
})

const modeloInscripciones = model('Incripcion', esquemaInscripciones, 'inscripciones')

export {modeloInscripciones};