import { modeloUsuarios } from "../../models/usuario/usuario";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils";

const resolversAutenticacion = {
  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const usuarioCreado = await modeloUsuarios.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        password: hashedPassword,
      });
    /*   console.log("usuario creado", usuarioCreado); */
      return {
        token: generateToken({
          _id: usuarioCreado._id,
          nombre: usuarioCreado.nombre,
          apellido: usuarioCreado.apellido,
          identificacion: usuarioCreado.identificacion,
          correo: usuarioCreado.correo,
          rol: usuarioCreado.rol,
        }),
      };
    },
    login: async (parent, args) => {
      const usuarioEncontrado = await modeloUsuarios.findOne({correo: args.correo,});
      if(await bcrypt.compare(args.password, usuarioEncontrado.password)){
        return {
          token: generateToken({
            _id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            identificacion: usuarioEncontrado.identificacion,
            correo: usuarioEncontrado.correo,
            rol: usuarioEncontrado.rol,
          }),
        };
      }else{
        return {
         error: "Usuario o contraseña incorrectos",
        };
      }
      
    },
    refreshToken:async (parent,args,context)=>{
      /* console.log("ress",context) */
      if(!context.userData){
        return{
          error:"token no valido",
        }
      }else{
        return {
          token: generateToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            correo: context.userData.correo,
            rol: context.userData.rol,
          }),
        }
        
      }
    }
  },
};

export { resolversAutenticacion };
