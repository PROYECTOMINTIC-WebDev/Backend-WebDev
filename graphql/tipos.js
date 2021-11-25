//importamos gql
import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enum/tipos.js";
import { tiposUsuario } from "../models/usuario/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";

const tiposGlobales = gql`
  scalar Date

`;

export const tipos = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto];
