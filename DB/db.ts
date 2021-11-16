import { connect } from "mongoose";

const ConectarBD = async () => {
    return await connect(
        'mongodb+srv://floza97:1103980759@gestionproyectosmintic.piuw0.mongodb.net/BDWebDev?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("conexion exitosa")
    }).catch((e)=>{
        console.log("error al conectar a la BD",e)
    })
}

export default ConectarBD;