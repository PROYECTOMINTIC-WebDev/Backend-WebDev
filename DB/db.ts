import { connect } from "mongoose";

const ConectarBD = async () => {
    return await connect(process.env.DATABEASE_URL ).then(()=>{
        console.log("conexion exitosa")
    }).catch((e)=>{
        console.log("error al conectar a la BD",e)
    })
}

export default ConectarBD;