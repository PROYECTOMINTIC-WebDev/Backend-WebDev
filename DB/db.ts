import { connect } from "mongoose";

const ConectarBD = async () => {
    return await connect(
        'mongodb+srv://Manuel05:primavera@gestionproyectosmintic.piuw0.mongodb.net/BDWebDev?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("conexion exitosa")
    }).catch((e)=>{
        console.log("error al conectar a la BD",e)
    })
}

export default ConectarBD;