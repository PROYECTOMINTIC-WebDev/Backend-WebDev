import { modeloProyectos } from "./proyecto";

const resolversProyecto = {
  Query: {
    //CONSULTA LOS USUARIOS EN LA BD
    Proyecto: async (parent, args) => {
      const proyectos = await modeloProyectos.find().populate("lider").populate('avances').populate('inscripciones');
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await modeloProyectos.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        FechaInicio: args.FechaInicio,
        FechaFin: args.FechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
  },
};
export { resolversProyecto };
