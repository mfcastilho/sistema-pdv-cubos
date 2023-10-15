import { Router } from "express";

import { RegisterProductController, 
         EditProductController, 
         GetAllProductsController,
         GetProductController,
         DeleteProductController } from "../controllers";

import { verifyToken, 
         verifyProductFields, 
         verifyIfCategoryExists,
         verifyIfProductExists } from "../middlewares";

const productRoutes = Router();


productRoutes.post("/", verifyToken, verifyProductFields, verifyIfCategoryExists, RegisterProductController.handle);

productRoutes.put("/:id", verifyToken, verifyProductFields, verifyIfCategoryExists, EditProductController.handle);

productRoutes.get("/", verifyToken, GetAllProductsController.handle);

productRoutes.get("/:id", verifyToken, verifyIfProductExists, GetProductController.handle);

productRoutes.delete("/:id", verifyToken, verifyIfProductExists, DeleteProductController.handle);

export default productRoutes;