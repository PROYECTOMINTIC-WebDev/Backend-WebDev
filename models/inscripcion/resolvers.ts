import { Enum_EstadoInscripcion } from "../enum/enum";
import { modeloUsuarios } from "../usuario/usuario";
import { modeloInscripciones } from "./inscripcion";

const resolverIncripciones = {
 /* de esta forma tambien funciona el pupulate de estudiante 
 por lo que se puede aplicar a los virtualize y crear una consulta para 
  cada campo foraneo ,por lo que nos ahorra escribir los virtual anidados 
  ----------------
  Inscripcion: {
    estudiante: async (parent, args, context) => {
      return await modeloUsuarios.findOne({ _id: parent.estudiante });
    },
  },
  ---------------
  */
  Query: {
    Inscripcion: async (parent, args) => {
      const inscripciones = await modeloInscripciones.find().populate('estudiante').populate('proyecto');
      return inscripciones;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await modeloInscripciones.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent,args) => {
        const inscripcionAprobada = await modeloInscripciones.findByIdAndUpdate(args._id, {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: new Date(),
        });
      return inscripcionAprobada;
    },

    rechazarInscripcion: async (parent,args) => {
      const inscripcionRechazada = await modeloInscripciones.findByIdAndUpdate(args._id, {
          estado: Enum_EstadoInscripcion.RECHAZADA,
      });
    return inscripcionRechazada;
  },

    cerrarInscripcion: async (parent,args) => {
      const inscripcionCerrada = await modeloInscripciones.findByIdAndUpdate(args._id, {
          fechaEgreso: new Date(),
      });
    return inscripcionCerrada;
  },

  },
};

export {resolverIncripciones}