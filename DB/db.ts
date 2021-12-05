import { connect } from "mongoose";

const ConectarBD = async () => {
    return await connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Conexión exitosa a la base de datos")
    }).catch((e)=>{
        console.log("Error al conectar a la base de datos",e)
    })
}

export default ConectarBD;