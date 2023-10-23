import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
require('dotenv').config()
const mongoURI=process.env.MONGODB_URL
export const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}