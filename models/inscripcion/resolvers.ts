import { Enum_EstadoInscripcion } from "../enum/enum";
import { modeloInscripciones } from "./inscripcion";

const resolverIncripciones = {
  Query: {
    Inscripcion: async (parent, args) => {
      const inscripciones = await modeloInscripciones.find();
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