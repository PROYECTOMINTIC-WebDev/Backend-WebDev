import mongoose from "mongoose";
import { modeloProyectos } from "./proyecto/proyecto.js";

//Interfaz objetivos (opcional metodo 3)
// interface Objetivo{
//      descripcion: string,
//      tipo:Enum_TipoObjetivo,
//      proyecto: Schema.Types.ObjectId,
// }

const { Schema, model } = mongoose;

const objectivesSchema = new Schema({
      
    descripcion:{
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        enum: ['GENERAL', 'ESPECIFICO'],
        required:true,
    },
    //aqui deifinimos el proyecto de tipo Project 

    proyecto:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:modeloProyectos,
    }

//aqui creamos el modelo del esquema creado 


})
const modeloObjetivos = model('Objetivo',objectivesSchema, 'objetivos');

export {modeloObjetivos};