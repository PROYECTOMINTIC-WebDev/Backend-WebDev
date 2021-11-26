import mongoose from "mongoose";

const ConectarBD = async () => {
    return await mongoose
    .connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Conexión exitosa")
    })
    .catch((e)=>{
        console.log("Error conectando a la base de datos",e)
    });
}

export default ConectarBD;