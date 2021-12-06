import { Schema, model } from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo, } from "../enum/enum";
import { modeloUsuarios } from "../usuario/usuario";

interface Proyecto {
  nombre: string,
  objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }],
  presupuesto: number,
  fechaInicio: string,
  fechaFin: string,
  lider: Schema.Types.ObjectId,
  estado: Enum_EstadoProyecto,
  fase: Enum_FaseProyecto,
  
}

const esquemaProyectos = new Schema<Proyecto>({

  nombre: {
    type: String,
    required: true,
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
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: String,
    default: "NO INICIADO",
  },
  fechaFin: {
    type: String,
    default: "NO FINALIZADO",
  },

  lider: {
    //necesito relacionar con un id que esta relacionado a otro modelo
    type: Schema.Types.ObjectId,
    ref: modeloUsuarios,
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
  
  
},
{
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

const modeloProyectos = model("Proyecto", esquemaProyectos);

export { modeloProyectos };