import mongoose from "mongoose";

export const connectDB= async ()=>{
    try{
        await mongoose.connect('mongodb+srv://sebastianvazquez:milanesa220284@cluster0.k5mx9um.mongodb.net/')
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}