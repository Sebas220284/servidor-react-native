import mongoose from "mongoose";

const uri = "mongodb+srv://sebastianvazquez:milanesa220284@cluster0.k5mx9um.mongodb.net/?retryWrites=true&w=majority";

export const connectDB =  () => {
  try {
  
    const writeConcern = { w: "majority", wtimeout: 1000, j: true };

    const client = new mongoose.Mongoose();
    
  
    client.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, writeConcern });

    console.log('BASE DE DATOS CONECTADA:)');
  } catch (error) {
    console.error(error);
  }
}
