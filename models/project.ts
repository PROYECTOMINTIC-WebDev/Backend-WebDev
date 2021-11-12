import { Schema, model } from "mongoose";
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from "./enum";
import { UserModel } from "./user";

interface Proyecto {
  nombre: string;
  presupuesto: number;
  FechaInicio: Date;
  FechaFin: Date;
  estado: Enum_EstadoProyecto;
  fase: Enum_FaseProyecto;
  lider: Schema.Types.ObjectId;
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
}

const projectShema = new Schema<Proyecto>({
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
    enum: Enum_EstadoProyecto,
    default: Enum_EstadoProyecto.inactivo,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    default: Enum_FaseProyecto.nulo,
  },
  lider: {
    //necesito relacionar con un id que esta relacionado a otro modelo
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  //aqui colocamos los objetivos como una coleccion de infromacion 
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },

      tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
      },
    },
  ],
});

const ProyectModel = model("proyecto", projectShema);

export { ProyectModel };
