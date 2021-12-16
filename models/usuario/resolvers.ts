import { modeloUsuarios } from "./usuario";


const resolverUsuario = {
  Query: {
    //CONSULTA LOS USUARIOS EN LA BD
    Usuarios: async (parent, args) => {
      const usuario = await modeloUsuarios.find({...args.filtro});
      return usuario;
    },

    Usuario: async(parent, args) =>{
      const usuario = await modeloUsuarios.findOne({_id:args._id});
      return usuario;
    },

    UsuariosEstudiantes: async (parent, args) => {
      const usuariosEstudiantes = await modeloUsuarios.find({rol:args.rol});
      return usuariosEstudiantes;
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
        password:args.password,
      });
      return usuarioCreado;
    },
    eliminarUsuario: async (parent, args) => {
      const usuarioEliminado = await modeloUsuarios.findByIdAndDelete({
        _id: args._id,
      }, {new: true});
      return usuarioEliminado;
    },

    editarPerfil: async (parent, args)=> {
      const usuarioEditado = await modeloUsuarios.findByIdAndUpdate(
        args._id,{
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificacion,
        
        
      },{new:true});

      return usuarioEditado;
    },

  

    editarUsuario: async (parent, args) => {
      const usuarioEditar = await modeloUsuarios.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        estado: args.estado,
        rol: args.rol,
      }, {new: true});
      return usuarioEditar;
    },
    editarEstado: async (parent, args) => {
      const usuarioEditar = await modeloUsuarios.findByIdAndUpdate(args._id, {
        
        estado: args.estado,
        rol: args.rol,
      }, {new: true});
      return usuarioEditar;
    },  
  },
};
export { resolverUsuario };
