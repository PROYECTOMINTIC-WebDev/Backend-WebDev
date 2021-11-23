import { Schema, model } from "mongoose";
import { ProyectModel } from "./project";
import {UserModel} from './user';
//definimos la interfaz para el avance


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

    },observaciones:[
        {
            type:String,
        }
    ],
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