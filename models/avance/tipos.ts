import { gql } from "apollo-server-express";

//gql nos permite escribir un template de graphQL
//las comillas sirven para escribir la libreria
const tiposAvance = gql`
  type Avance {
    _id: String
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  """
   colocamos como se llama y que devuelve
  """
  type Query {
    Avances: [Avance]
    filtrarAvance(idProyecto: String!):[Avance]

  }
  type Mutation {
    crearAvance(
      fecha: Date!
      descripcion: String!
      observaciones: [String]
      proyecto: String!
      creadoPor: String!
    ): Avance

  }
`;
export  default tiposAvance ;