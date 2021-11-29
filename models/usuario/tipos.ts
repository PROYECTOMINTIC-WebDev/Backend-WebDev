import { gql } from "apollo-server-express";

const tiposUsuario = gql`
  scalar Date

  
type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    identificacion: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
  }

  type Query {
    Usuario: [Usuario]
    UnUsuario(idUsuario: String!):Usuario
   
  }
  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario!
      rol: Enum_Rol!
      
    ): Usuario

    eliminarusuario(_id: String): Usuario

    """
     crear el usuario
    """
    editarUsuario(
      _id: ID!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: Enum_EstadoUsuario!
      rol: Enum_Rol!
    ): Usuario
  
  }
`;

export { tiposUsuario };
