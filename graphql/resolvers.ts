import { ProyectModel } from "../models/project";
import { UserModel } from "../models/user";

const resolvers = {
  Query: {
    //CONSULTA LOS USUARIOS EN LA BD
    Usuario: async (parent, args) => {
      const usuario = await UserModel.find();

      return usuario;
    },
    Proyecto: async (parent, args) => {
      const proyectos = await ProyectModel.find().populate('lider');
      return proyectos;
    },
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuariocreado = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
        rol: args.rol,
      });
      return usuariocreado;
    },
    eliminarusuario: async (parent, args) => {
      const usuarioEliminado = await UserModel.findByIdAndDelete({
        _id: args._id,
      });
      return usuarioEliminado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioeditar = await UserModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
        rol: args.rol,
      });
      return usuarioeditar;
    },

    crearProyecto: async(parent, args) =>{
        const proyectocreado = await ProyectModel.create({
            nombre:args.nombre,
            estado:args.estado,
            fase:args.fase,
            FechaInicio:args.FechaInicio,
            FechaFin:args.FechaFin,
            presupuesto:args.presupuesto,
            lider:args.lider,
            objetivos:args.objetivos,
           


        })
        return  proyectocreado
    }
  },
};
export { resolvers };
