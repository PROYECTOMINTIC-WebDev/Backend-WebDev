import mongoose from "mongoose";
import { modeloProyectos } from "../proyecto/proyecto.js";
import { modeloUsuarios } from '../usuario/usuario.js';

//Definimos la interfaz para el avance

// interface Avance{
//     proyecto: Schema.Types.ObjectId,
//     fecha: Date,
//     descripcion: string,
//     observaciones:[string],
//     creadoPor: Schema.Types.ObjectId,
// }

const {Schema, model} = mongoose;

const esquemaAvances = new Schema({
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
        ref: modeloProyectos,
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref: modeloUsuarios,
        required:true
    }
})

const modeloAvances = model('Avance', esquemaAvances, "avances");

export { modeloAvances };