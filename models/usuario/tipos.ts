import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    identificacion: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
  }
 input FiltroUsuario{
   _id: ID
    correo: String
    identificacion: String
    estado: Enum_EstadoUsuario
    rol: Enum_Rol
}
  type Query {
    Usuarios(filtro:FiltroUsuario): [Usuario]
    Usuario(_id:String!): Usuario
    UsuariosEstudiantes(rol:Enum_Rol!): [Usuario]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario!
      rol: Enum_Rol!
      password: String!
      
    ): Usuario

    eliminarUsuario(_id: String): Usuario

    """
     crear el usuario
    """
    editarUsuario(
      _id: ID!
      nombre: String
      apellido: String
      identificacion: String
      correo: String
      estado: Enum_EstadoUsuario
      rol: Enum_Rol
    ): Usuario

      
    

    editarPerfil(
      _id: ID!,
      nombre: String
      apellido: String
      identificacion: String
      
    ):Usuario

    editarEstado(
      _id: ID!
      estado: Enum_EstadoUsuario!
    ): Usuario
  
  }
`;

export { tiposUsuario };
