//importamos gql 
import { gql } from "apollo-server-express";

const typeDefs = gql`
type Usuario{
  nombre: String!

}
type Query{
    Usuario:[Usuario]
}
`;

export {typeDefs}
