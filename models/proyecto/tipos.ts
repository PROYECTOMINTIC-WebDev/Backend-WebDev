//importamos gql
import { gql } from "apollo-server-express";

const tiposProyecto = gql`

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input camposObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  
  type Proyecto {
    _id: ID!
    nombre: String!
    objetivos: [Objetivo]
    presupuesto: Float!
    fechaInicio: String
    fechaFin: String
    lider: Usuario!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!   
    avances:[Avance]
    inscripciones:[Inscripcion]
  }

  type Query {

    Proyectos: [Proyecto]
    NuevasSolicitudesProyectos: [Proyecto]
    ListaProyectosEstudiante: [Proyecto]
    ProyectosEstudiante: [Proyecto]
    ProyectosLider: [Proyecto]
   
  }

   
  type Mutation {

    crearProyecto(
      nombre: String!
      objetivos:[crearObjetivo]
      presupuesto: Float
      fechaInicio: String
      fechaFin: String
      lider: String
      
    ): Proyecto

    eliminarProyecto(

      _id:String!

    ): Proyecto

    editarProyectoLider(

      _id: String!
      nombre: String!
      presupuesto: Float!
      objetivos: [crearObjetivo]

    ): Proyecto

    editarEstadoProyecto(

      _id:String!,
      estado: Enum_EstadoProyecto!,
      fase: Enum_FaseProyecto

    ):Proyecto

    crearObjetivo(

      idProyecto: String!,
      campos: crearObjetivo!

    ):Proyecto

    editarObjetivo(
      
      idProyecto: String!,
      indexObjetivo: Int!,
      campos: camposObjetivo!
      
    ): Proyecto

    eliminarObjetivo(

      idProyecto: String!,
      idObjetivo: String!
      
    ): Proyecto

  }
`;

export { tiposProyecto };
