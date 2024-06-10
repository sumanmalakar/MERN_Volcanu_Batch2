import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import productRouter from "./Routes/product.js";
import cors from 'cors'

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
  })
);

// product router
app.use("/api/product", productRouter);




mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:5albIa4990YThPOg@cluster0.ddicszz.mongodb.net/",
    {
      dbName: "Volcanus_MERN_E_Commerce",
    }
  )
  .then(() => console.log("MongoDB Connected Successfully..."))
  .catch((err) => console.log(err));

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
