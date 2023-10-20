import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const mongoURI=process.env.MONGODB_URI
export const connectDB= async ()=>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}