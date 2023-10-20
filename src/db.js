import mongoose from "mongoose";


const mongoURI=process.env.MONGODB_URI
export const connectDB= async ()=>{
    try{
        await mongoose.connect(mongoURI)
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}