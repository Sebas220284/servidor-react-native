
import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI ||  "mongodb://localhost:27017/app-native";


export const connectDB= async ()=>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}

/*import mongoose from "mongoose";

//require('dotenv').config()
const mongoURI=process.env.MONGODB_URL
export const connectDB=  ()=>{
    try{
       mongoose.connect(process.env.MONGODB_URI)
        console.log('BASE DE DATOS CONECTADA:)')
    }catch(error){
console.log(error)
    }
  
}
*/
