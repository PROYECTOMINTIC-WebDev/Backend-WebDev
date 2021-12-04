import { modeloAvances } from "./avance";

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await modeloAvances.find().populate('creadoPor').populate('proyecto');
      return avances;
    },
    filtrarAvance: async (params, args) => {
        const avanceFiltrado= await modeloAvances.find({
            proyecto:args.idProyecto
        }).populate('proyecto').populate('creadoPor')
        return avanceFiltrado;
    }
  },

  Mutation: {
      crearAvance: async (parent, args) => {
          const avanceCreado = await modeloAvances.create({
            fecha: args.fecha,
            descripcion: args.descripcion,
            observaciones: args.proyecto,
            proyecto: args.proyecto,
            creadoPor: args.creadoPor,
          });
          return avanceCreado;
      },
     
  },
};
export  {resolversAvance};

