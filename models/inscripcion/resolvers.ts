import { Enum_EstadoInscripcion } from "../enum/enum";
import { modeloProyectos } from "../proyecto/proyecto";
import { modeloUsuarios } from "../usuario/usuario";
import { modeloInscripciones } from "./inscripcion";

const resolverIncripciones = {
  Inscripcion: {
    proyecto: async (parent, args, context) => {
      return await modeloProyectos.findOne({ _id: parent.proyecto });
    },
    estudiante: async (parent, args, context) => {
      return await modeloUsuarios.findOne({ _id: parent.estudiante });
    },
  },
  Query: {
    Inscripcion: async (parent, args, context) => {
      let filtro = {};
      if (context.userData) {
        if (context.userData.rol === 'LIDER') {
          const projects = await modeloProyectos.find({ lider: context.userData._id });
          const projectList = projects.map((p) => p._id.toString());
          filtro = {
            proyecto: {
              $in: projectList,
            },
          };
        }
      }
      const inscripciones = await modeloInscripciones.find({ ...filtro });
      return inscripciones;
    },

    // inscripcionesNoAprobadas: async () => {
    //   const ina = await InscriptionModel.find({ estado: 'PENDIENTE' }).populate('estudiante');
    // },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await modeloInscripciones.create({
       
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent,args) => {
        const inscripcionAprobada = await modeloInscripciones.findByIdAndUpdate(args._id, {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: new Date(),
        }, {new: true});
      return inscripcionAprobada;
    },

    rechazarInscripcion: async (parent,args) => {
      const inscripcionRechazada = await modeloInscripciones.findByIdAndUpdate(args._id, {
          estado: Enum_EstadoInscripcion.RECHAZADA,
      }, {new: true});
    return inscripcionRechazada;
  },

    cerrarInscripcion: async (parent,args) => {
      const inscripcionCerrada = await modeloInscripciones.findByIdAndUpdate(args._id, {
        fechaEgreso: new Date(),
      }, {new: true});
    return inscripcionCerrada;
  },

  },
};

export {resolverIncripciones}