import express from "express"
import { conexion } from "./db.js";
import { customersRouter } from "./routes/customers.routes.js";

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(customersRouter)


app.listen(process.env.DB_PORT,()=>{
    console.log(`Servidor en puerto ${process.env.DB_PORT}`);
})