import { AdvancementModel } from "./avance";

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await AdvancementModel.find().populate('creadoPor').populate('proyecto');

      return avances;
    },
    filtrarAvance: async (params, args) => {
        const avancefiltrado= await AdvancementModel.find({
            proyectos:args.idProyecto
        }).populate('proyecto').populate('creadoPor')
        return avancefiltrado;
    }
  },

  Mutation: {
      crearAvance: async (parent, args) => {
          const avanceCreado = await AdvancementModel.create({
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