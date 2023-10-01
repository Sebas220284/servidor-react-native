import User from '../models/user.models.js'
import bcrypt from 'bcrypt'

import { token } from 'morgan';
import { createAccessToken } from '../libs/jwt.js';
export const register=async(req,res)=>{
const {email,password,username}= req.body
console.log(email,password,username)


 try{

    const passwordHash=await bcrypt.hash(password,10)
    const newUser=new User({
        username,
        email,
        password:passwordHash,
    
    })

    
   const userSaved= await newUser.save()

  const token= await createAccessToken({id:userSaved._id})
    res.cookie('token',token)
   

        
res.json({id:userSaved._id,
    username:userSaved.username,
    email:userSaved.email,
createAt:userSaved.createAt,
updateAt:userSaved.updateAt}) }catch(error){
res.status(500).json({message:error.message})
 }

};


export const login=async(req,res)=>{
    const {email,password,}= req.body
   // console.log(email,password,username)
    
    
     try{
    const userFound=
    await User.findOne({ email });
    if(!userFound)return res.status(400).json({message:"Usuario no encontrado"});

        const isMatch=await bcrypt.compare(password,userFound.password);
        if(!isMatch)return res.status(400).json({message:"Contraseña incorrecta"});


       
   
    
      const token= await createAccessToken({id:userFound._id})

        res.cookie("token",token)
       
    
            
    res.json({id:userFound._id,
        username:userFound.username,
        email:userFound.email,
    createAt:userFound.createAt,
    updateAt:userFound.updateAt}) }catch(error){
    res.status(500).json({message:error.message})
     }
    
    };

    export const logout= (req,res)=>{
res.cookie('token',"",{
    expires:new Date(0)
})
return res.sendStatus(200);
    }