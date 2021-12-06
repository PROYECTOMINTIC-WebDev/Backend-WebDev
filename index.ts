//prender nuestro servudor de graphql
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ConectarBD from './DB/db';
import {tipos} from './graphql/types';
import {resolvers} from './graphql/resolvers';
import { validateToken } from './utils/tokenUtils';

//Para poder usar variables de entorno en toda la app
dotenv.config();
let verificacion;

const getUserData = (token) => {
    verificacion= validateToken(token.split(' ')[1]);
    console.log(verificacion)
    if (verificacion.data) {
      return verificacion.data; ;
    } else {
      return null;
    }
  };
//Se instancia un servidor de Apolo
const server = new ApolloServer({
    typeDefs:tipos,
    resolvers:resolvers,
    context: ({ req }) => {
        const token = req.headers?.authorization ?? null;
        if (token) {
          const userData = getUserData(token);
          if (userData) {
            return { userData };
          }
        }
        return null;
      }, 
   
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port:process.env.PORT || 10000}, async ()=>{
   await ConectarBD();
   await server.start();
   server.applyMiddleware({app: app});
   console.log("Servidor listo")
});
