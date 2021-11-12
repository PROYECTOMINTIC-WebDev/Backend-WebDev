import { Schema, model } from "mongoose";
import {Enum_EstadoUsuario, Enum_Rol} from './enum'
//interfas para deifiir los tipos de mis elementos

interface User{
    correo:string,
    identificacion:string,
    nombre:string,
    apellido:string,
    rol:Enum_Rol,
    estado:Enum_EstadoUsuario;

}

const userSchema = new Schema<User>({
    correo:{
        type:String,
        required:true,
            unique:true,
            


    },identificacion:{
        type:String,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,
       

    },
    apellido:{
        type:String,
        required:true,
       

    },
    rol:{
        type:String,
        required:true,
        enum:Enum_Rol,
    },
    estado:{
        type:String,
        enum:Enum_EstadoUsuario,
        default:Enum_EstadoUsuario.pendiente,
    }

});

//definimos el modelo para conectarnos a la bd 

const UserModel = model('User',userSchema);

export  {UserModel};