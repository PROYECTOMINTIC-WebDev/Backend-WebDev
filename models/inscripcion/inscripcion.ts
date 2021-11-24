import { Schema, model } from "mongoose";
import {Enum_EstadoInscripcion} from '../enum/enum';
import { UserModel } from "../usuario/usuario";
import {ProyectModel} from '../proyecto/proyecto';
interface Inscripcion{

    proyecto:Schema.Types.ObjectId,
    estudiante:Schema.Types.ObjectId,
    estado:Enum_EstadoInscripcion,
    fechaIngreso:Date,
    fechaEgreso:Date,
}

const inscripcionSchema = new Schema<Inscripcion>({
     
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
        ref:ProyectModel,
        required:true,
    }
    ,
    estudiante: {
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true
    }



})

const IncripcionModel = model('Incripcion', inscripcionSchema)

export {IncripcionModel};