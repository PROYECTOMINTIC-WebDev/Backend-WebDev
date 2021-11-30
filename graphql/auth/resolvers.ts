
    import {  modeloUsuarios  } from '../../models/usuario/usuario';
    import bcrypt from 'bcrypt';
    
    //import { generateToken } from '../../utils/tokenUtils';
    
    const resolversAutenticacion = {
      Mutation: {
        registro: async (parent, args) => {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
    
            const usuarioCreado = await  modeloUsuarios .create({
              nombre: args.nombre,
              apellido: args.apellido,
              identificacion: args.identificacion,
              correo: args.correo,
              password: hashedPassword,
              rol: args.rol,
            });
    
            return {
              token: generateToken({
                _id: usuarioCreado._id,
                nombre: usuarioCreado.nombre,
                apellido: usuarioCreado.apellido,
                identificacion: usuarioCreado.identificacion,
                correo: usuarioCreado.correo,
                rol: usuarioCreado.rol,
              }),
              authorized: true,
            };
          } catch (e) {
            return {
              error: e,
            };
          }
        },
        login: async (parent, args) => {
          const usuario = await  modeloUsuarios .findOne({ correo: args.correo });
          if (await bcrypt.compare(args.password, usuario.password)) {
            return {
              token: generateToken({
                _id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                identificacion: usuario.identificacion,
                correo: usuario.correo,
                rol: usuario.rol,
              }),
              authorized: true,
            };
          } else {
            return {
              error: 'not auth',
            };
          }
        },
        validateToken: async (parent, args, context) => {
          if (!context.auth.user) {
            return {
              token: null,
              authorized: false,
            };
          } else {
            return {
              token: generateToken(context.auth.user),
              authorized: true,
            };
          }
        },
      },
    };
    
    export { resolversAutenticacion };