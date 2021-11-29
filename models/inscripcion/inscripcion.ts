import { Schema, model } from "mongoose";
import {Enum_EstadoInscripcion} from '../enum/enum';
import { modeloUsuarios } from "../usuario/usuario";
import { modeloProyectos } from '../proyecto/proyecto';

interface Inscripcion{
    proyecto:Schema.Types.ObjectId,
    estudiante:Schema.Types.ObjectId,
    estado:Enum_EstadoInscripcion,
    fechaIngreso:Date,
    fechaEgreso:Date,
}

const esquemaInscripciones = new Schema<Inscripcion>({
    estado:{
       type: String,
       enum:Enum_EstadoInscripcion,
       required:true,
    },
    
    fechaIngreso:{
        type:Date,
        required:false,
    },
    fechaEgreso:{
        type:Date,
        required:false,
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:modeloProyectos,
        required:true,
    }
    ,
    estudiante: {
        type:Schema.Types.ObjectId,
        ref:modeloUsuarios,
        required:true
    }

})

const modeloInscripciones = model('Incripcion', esquemaInscripciones, 'inscripciones')

export {modeloInscripciones};