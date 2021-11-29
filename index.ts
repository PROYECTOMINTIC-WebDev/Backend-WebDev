//prender nuestro servudor de graphql
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ConectarBD from './DB/db';
import {tipos} from './graphql/types';
import {resolvers} from './graphql/resolvers';

//Para poder usar variables de entorno en toda la app
dotenv.config();

//Se instancia un servidor de Apolo
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
   console.log("Servidor listo")
});
