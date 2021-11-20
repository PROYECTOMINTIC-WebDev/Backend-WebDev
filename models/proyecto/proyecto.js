import mongoose from "mongoose";
import { modeloUsuarios } from "../usuario/usuario.js";

// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   FechaInicio: Date;
//   FechaFin: Date;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
// }

const { Schema, model } = mongoose;

const projectShema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  FechaInicio: {
    type: Date,
    required: true,
  },
  FechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ['ACTIVO', 'INACTIVO'],
    default: 'INACTIVO',
  },
  fase: {
    type: String,
    enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
    default: 'NULO',
  },
  lider: {
    //necesito relacionar con un id que esta relacionado a otro modelo
    type: Schema.Types.ObjectId,
    ref: modeloUsuarios,
    required: true,
  },
  //aqui colocamos los objetivos como una coleccion de información 
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },

      tipo: {
        type: String,
        enum: ['GENERAL', 'ESPECIFICO'],
        required: true,
      },
    },
  ],
});

const modeloProyectos = model("proyecto", esquemaProyectos, 'proyectos');

export { modeloProyectos };
