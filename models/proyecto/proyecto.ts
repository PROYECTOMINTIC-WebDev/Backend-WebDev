import { Schema, model } from "mongoose";
import {
  Enum_EstadoProyecto,
  Enum_FaseProyecto,
  Enum_TipoObjetivo,
} from "../enum/enum";
import { modeloUsuarios } from "../usuario/usuario";

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

const esquemaProyectos = new Schema<Proyecto>({
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
    default: Enum_EstadoProyecto.INACTIVO,
  },
  fase: {
    type: String,
    enum: Enum_FaseProyecto,
    
    default: Enum_FaseProyecto.NULO,
  },
  lider: {
    //necesito relacionar con un id que esta relacionado a otro modelo
    type: Schema.Types.ObjectId,
    required: true,
    ref: modeloUsuarios,
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
},{
  toJSON:{virtuals:true},
  toObject:{virtuals:true},
});


esquemaProyectos.virtual('avances',{
  ref:"Avance",
  localField:"_id",
  foreignField:'proyecto',

})
esquemaProyectos.virtual('inscripciones',{
  ref:"Incripcion",
  localField:"_id",
  foreignField:'proyecto',

})
const modeloProyectos = model("Proyecto", esquemaProyectos, 'proyectos');

export { modeloProyectos };