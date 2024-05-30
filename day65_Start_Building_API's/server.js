import express from "express";
import mongoose from "mongoose";

const app = express();


// home route
app.get('/',(req,res)=>{
    const product = [
        {id:1,title:'Iphone 15',price:100000},
        {id:2,title:'Oneplus 8',price:38000},
        {id:3,title:'MI 9',price:900000},
        {id:4,title:'Galaxy S24 Ultra',price:120000},
    ]
    res.json({message:'This is MERN E - Commerce API',product})
})






mongoose.connect(
  "mongodb+srv://sumanmalakar2022:5albIa4990YThPOg@cluster0.ddicszz.mongodb.net/",{
    dbName: "Volcanus_MERN_E_Commerce"
    
  }
).then(()=>console.log("MongoDB Connected Successfully...")).catch((err)=>console.log(err))



const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
