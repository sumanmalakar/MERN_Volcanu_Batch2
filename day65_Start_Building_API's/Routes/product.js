import express from "express";
import { addProduct, getAllProducts, home } from "../Controllers/product.js";

const router = express.Router();

// add product
router.post("/add", addProduct); // => /api/product/add

// get all products
router.get("/get", getAllProducts); // => /api/product/get

// home
router.get('/home',home) // => /api/product/home

export default router;
