import { gql } from "apollo-server-express";

const tiposAvancel = gql   `
  type Avance(){
            fecha:Date!
            description:String!
            observaciones:[String]
            
            }

`


export { tiposAvancel };