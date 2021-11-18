import { UserModel } from "./usuario";

const resolverUsuario = {
  Query: {
    //CONSULTA LOS USUARIOS EN LA BD
    Usuario: async (parent, args) => {
      const usuario = await UserModel.find();

      return usuario;
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

  
  },
};
export { resolverUsuario };
