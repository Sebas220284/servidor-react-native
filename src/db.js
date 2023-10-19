import mongoose from "mongoose";


const MONGODB_URI="mongodb+srv://sebastianvazquez:milanesa220284@cluster0.k5mx9um.mongodb.net/"
export const connectDB= async ()=>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}