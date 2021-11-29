//importamos gql
import { gql } from "apollo-server-express";

const tiposProyecto = gql`
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
    avances:[Avance]
    inscripciones:[Inscripcion]
  }

  type Query {
    
    Proyecto: [Proyecto]
  }
type Objetivo{
    _id: ID!
    descripcion:String!
    tipo:Enum_TipoObjetivo!
}
  input crearObjetivo{
    
    descripcion:String!
    tipo:String!
  }
  type Mutation {
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

export { tiposProyecto };
