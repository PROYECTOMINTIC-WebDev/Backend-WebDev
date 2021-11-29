// Pendientes

import { Enum_EstadoInscripcion } from "../enum/enum";
import { IncripcionModel } from "./inscripcion";

const resolverIncripciones = {
  Query: {
    Inscripcion: async (parent, args) => {
      const inscripciones = await IncripcionModel.find();
      return inscripciones;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionescreada = await IncripcionModel.create({
        estado: args.estado,
     
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionescreada;
    },
    aprobarInscrpcion: async (parent,args) => {
        const inscripcionAprobada= await IncripcionModel.findByIdAndUpdate(args._id, {
            estado: Enum_EstadoInscripcion.ACEPTADA,
            fechaIngreso: new Date("2018-03-11"),
            
        });
        return inscripcionAprobada;
    }
  },
};

export {resolverIncripciones}