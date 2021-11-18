//importamos gql
import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar Date

  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }
  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }
  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    identificacion: String!
    estado: Enum_EstadoUsuario!
    rol: Enum_Rol!
  }

  type Objetivo {
    _id: String
    tipo: Enum_TipoObjetivo!
    descripcion: String!
  }

  input crearObjetivo{
  
    tipo: Enum_TipoObjetivo!
    descripcion: String!
  }
  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    FechaInicio: Date!
    FechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
  }

  type Query {
    Usuario: [Usuario]
    Proyecto: [Proyecto]
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

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      FechaInicio: Date!
      FechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objetivos:[crearObjetivo]
    ): Proyecto
  }
`;

export { typeDefs };
