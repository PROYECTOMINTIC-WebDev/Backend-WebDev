import { Schema, model } from "mongoose";
import { Enum_EstadoUsuario, Enum_Rol } from "../enum/enum";

//interfaz para definir los tipos de mis elementos en usuarios
interface User {
  correo: string;
  identificacion: string;
  nombre: string;
  apellido: string;
  rol: Enum_Rol;
  estado: Enum_EstadoUsuario;
  password: string;
  
}

const userSchema = new Schema<User>({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  correo: {
    type: String,
    required: true,
    unique: true,
  },
 
  password: {
    type: String,
    required: true,
  },
 

  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.PENDIENTE,
  },
  rol: {
    type: String,
    required: true,
    enum: Enum_Rol,
  },
});

//definimos el modelo para conectarnos a la bd
const modeloUsuarios = model("Usuario", userSchema, 'usuarios');

export { modeloUsuarios };
