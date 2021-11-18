import { ProyectModel } from "./proyecto";

const resolversProyecto = {
  Query: {
    //CONSULTA LOS USUARIOS EN LA BD
    Proyecto: async (parent, args) => {
      const proyectos = await ProyectModel.find().populate("lider");
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectocreado = await ProyectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        FechaInicio: args.FechaInicio,
        FechaFin: args.FechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectocreado;
    },
  },
};
export { resolversProyecto };
