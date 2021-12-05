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
            observaciones: args.observaciones,
            proyecto: args.proyecto,
            creadoPor: args.creadoPor,
          });
          return avanceCreado;
      },

      crearObservaciones: async(parent, args)=> {
        const observacionCreada = await modeloAvances.findByIdAndUpdate(args._id,{
          fecha: args.fecha,
          descripcion: args.descripcion,
          observaciones: args.observaciones,
          proyecto: args.proyecto,
          creadoPor: args.creadoPor,
        });
        return observacionCreada;
    },
    actualizarAvance: async(parent, args)=> {
      const avanceActualizado = await modeloAvances.findByIdAndUpdate(args._id,{
        fecha: args.fecha,
        descripcion: args.descripcion,
        observaciones: args.observaciones,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      return avanceActualizado;
  },
  eliminarAvance: async (parent, args) => {
    const avanceEliminado = await modeloAvances.findByIdAndDelete({
      _id: args._id,
    });
    return avanceEliminado;
  },
  },
};
export  {resolversAvance};

