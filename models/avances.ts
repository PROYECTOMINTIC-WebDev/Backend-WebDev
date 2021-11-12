import { Schema, model } from "mongoose";
import { ProyectModel } from "./project";
import {UserModel} from './user';
//definimos la interfas para el avance


interface Avance{
    proyecto: Schema.Types.ObjectId,
    fecha: Date,
    descripcion: string,
    observaciones:[string],
    creadoPor: Schema.Types.ObjectId,
}

const avancesSchema = new Schema<Avance>({

    fecha:{
        type:Date,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,

    },
    //son array porque se necesita intresar varias observaciones
    observaciones:[
        {
            type:String,
        }
    ],
    //aqui traemos el id del modelo de proyecto para hacer referencia 
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:ProyectModel,
        required:true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:UserModel,
        required:true
    }



})

const AdvancementModel= model('Modelo', avancesSchema,"Avances");

export { AdvancementModel};