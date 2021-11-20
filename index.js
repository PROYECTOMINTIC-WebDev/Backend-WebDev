//prender nuestro servudor de graphql
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import ConectarBD from './DB/db';
import {tipos} from './graphql/types';
import {resolvers} from './graphql/resolvers';
//PARA QUE NOS PERMITE USAR PARIVABOES DE ENTORNO EN TODA LA APLICACION
dotenv.config();

//DEFINIMOS  UN SERVIDOR DE APOLLO

const server = new ApolloServer({
    typeDefs:tipos,
    resolvers:resolvers,

});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port:process.env.PORT || 4000}, async ()=>{
   await ConectarBD();
   await server.start();
   server.applyMiddleware({app: app});
   console.log("servidor listo")
});
