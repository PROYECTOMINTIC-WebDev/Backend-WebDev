import ConectarBD from "./DB/db";
import {UserModel} from "./models/usuario/usuario";
import { Enum_Rol, Enum_TipoObjetivo } from "./models/enum/enum";
import { ProyectModel } from "./models/proyecto/proyecto";
const main = async ()=>{

    await ConectarBD();

  const proyectoCreado = await  ProyectModel.create({
        nombre:'proyecto Metodo 3',
        presupuesto:120000,
        FechaInicio:Date.now(),
        FechaFin: new Date("2021/12/25"),
        lider: '618d43ec4071386efb2f312e',
        objetivos:[
            {descripcion: "este es el objetivo general", tipo:Enum_TipoObjetivo.GENERAL},
            {descripcion: "este es el objetivo especifico 1", tipo:Enum_TipoObjetivo.ESPECIFICO},
            {descripcion: "este es el objetivo especifico 2", tipo:Enum_TipoObjetivo.ESPECIFICO},

        ]
    });


/*     const proyecto = await ProyectModel.find({nombre: 'proeycto 2'}).populate('lider');

console.log("el proyecti es ",proyecto);
 */

//----------CRUD USUARIOS----------
    // await UserModel.create({
    //     correo:"manuelguma25@gmail.com",
    //     identificacion: 1007409899,
    //     nombre:"Jose",
    //     apellido:"guzman1",
    //     rol:Enum_Rol.administrador,
    // }).then((u)=>{
    //     console.log("usuario creado ", u);
    // }).catch((e)=>{
    //     console.log("error al crear usuario ", e);

    // })  

    //obtener los usuaios 


    //  await UserModel.find()
    //     .then((u)=>{
    //         console.log('usuarios: ',u);
    //     }).catch((e)=>{
    //         console.log('error es ',e);
            

    //     }) 

};

main();