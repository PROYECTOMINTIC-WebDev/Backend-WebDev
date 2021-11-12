import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enum";
import { ProyectModel } from "./project";

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
        ref:ProyectModel,
    }


//awui creamos el modelo del schema creado 



})
const ObjectiveModel = model('objetivos',objectivesSchema);


export {ObjectiveModel};