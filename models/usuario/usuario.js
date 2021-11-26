import mongoose from "mongoose";

//interfaz para definir los tipos de mis elementos

// interface User {
//   correo: string;
//   identificacion: string;
//   nombre: string;
//   apellido: string;
//   rol: Enum_Rol;
//   estado: Enum_EstadoUsuario;
// }

const { Schema, model } = mongoose;

const esquemaUsuarios = new Schema({
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

  estado: {
    type: String,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO AUTORIZADO'],
    default: 'PENDIENTE',
  },
  rol: {
    type: String,
    required: true,
    enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
  },
});

//definimos el modelo para conectarnos a la bd

const modeloUsuarios = model("Usuario", esquemaUsuarios, 'users');

export { modeloUsuarios };
