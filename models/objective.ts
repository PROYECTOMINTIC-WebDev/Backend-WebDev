import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enum/enum";
import { modeloProyectos } from "./proyecto/proyecto";

interface Objetivo{
     descripcion: string,
     tipo:Enum_TipoObjetivo,
     proyecto: Schema.Types.ObjectId,
}

const objectivesSchema = new Schema<Objetivo>({
      
    descripcion:{
        type:String,
        required:true,
    },
    tipo:{
        type:String,
        enum: Enum_TipoObjetivo,
        required:true,
    },
    //aqui deifinimos el proyecto de tipo Project 
    proyecto:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:modeloProyectos,
    }
})

//aqui creamos el modelo del schema creado 
const modeloObjetivos = model('Objetivo', objectivesSchema, 'objetivos');

export {modeloObjetivos};