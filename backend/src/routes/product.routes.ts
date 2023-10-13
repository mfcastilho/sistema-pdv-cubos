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


productRoutes.post("/produto", verifyToken, verifyProductFields, verifyIfCategoryExists, RegisterProductController.handle);

productRoutes.put("/produto/:id", verifyToken, verifyProductFields, verifyIfCategoryExists, EditProductController.handle);

productRoutes.get("/produto", verifyToken, GetAllProductsController.handle);

productRoutes.get("/produto/:id", verifyToken, verifyIfProductExists, GetProductController.handle);

productRoutes.delete("/produto/:id", verifyToken, verifyIfProductExists, DeleteProductController.handle);

export default productRoutes;