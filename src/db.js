import { connect } from "mongoose";

export const conexion =(async ()=>{
    try{
        await connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jnwcv.mongodb.net/Ecommerce`)
        console.log("DB CONECTADA");
    }catch(error){
        console.error(error);
    }
})()