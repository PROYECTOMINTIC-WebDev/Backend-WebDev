import { modeloUsuarios } from "./usuario";

const resolverUsuario = {
  Query: {
    //CONSULTA LOS USUARIOS EN LA BD
    Usuario: async (parent, args) => {
      const usuario = await modeloUsuarios.find();
      return usuario;
    },
  
  },
  Mutation: {
    crearUsuario: async (parent, args) => {
      const usuarioCreado = await modeloUsuarios.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
        rol: args.rol,
      });
      return usuarioCreado;
    },
    eliminarUsuario: async (parent, args) => {
      const usuarioEliminado = await modeloUsuarios.findByIdAndDelete({
        _id: args._id,
      });
      return usuarioEliminado;
    },
    editarUsuario: async (parent, args) => {
      const usuarioEditar = await modeloUsuarios.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
        rol: args.rol,
      });
      return usuarioEditar;
    },

  
  },
};
export { resolverUsuario };
