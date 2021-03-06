// Pendientes
import { gql } from "apollo-server-express";

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }
  type Query {
    Inscripcion: [Inscripcion]
  }

  type Mutation {
    crearInscripcion(proyecto: String!estudiante: String!
    ): Inscripcion

    aprobarInscripcion(_id: String!): Inscripcion
    
    rechazarInscripcion(_id: String!): Inscripcion

    cerrarInscripcion(_id: String!): Inscripcion
  }
`
;
export { tiposInscripcion };
