import { Schema, model } from "mongoose";
import { modeloProyectos } from "../proyecto/proyecto";
import { modeloUsuarios } from '../usuario/usuario';

//definimos la interfaz para el avance
interface Avance{
    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones:[string],
    creadoPor: Schema.Types.ObjectId,
}

const esquemaAvances = new Schema<Avance>({
    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,

    },observaciones:[
        {
            type:String,
        }
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:modeloProyectos,
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:modeloUsuarios,
        required:true
    }

})

const modeloAvances = model('Avance', esquemaAvances,"avances");

export { modeloAvances };