import { Router } from "express";
import multer from "../config/multer";

import { RegisterProductController, 
         EditProductController, 
         GetAllProductsController,
         GetProductController,
         DeleteProductController } from "../controllers/product";

import { verifyToken, 
         verifyProductFields, 
         verifyIfCategoryExists,
         verifyIfProductExists,
         verifyProductDeletion } from "../middlewares";

const productRoutes = Router();


productRoutes.post("/", verifyToken, multer.single("productImage"), verifyProductFields, verifyIfCategoryExists, RegisterProductController.handle);

productRoutes.put("/:id", verifyToken, verifyIfProductExists, multer.single("productImage"), verifyProductFields, verifyIfCategoryExists, EditProductController.handle);

productRoutes.get("/", verifyToken, GetAllProductsController.handle);

productRoutes.get("/:id", verifyToken, verifyIfProductExists, GetProductController.handle);

productRoutes.delete("/:id", verifyToken, verifyIfProductExists, verifyProductDeletion, DeleteProductController.handle);


export default productRoutes;