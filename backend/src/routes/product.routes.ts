import { Router } from "express";

import { RegisterProductController, EditProductController } from "../controllers";

import {  verifyToken, 
          verifyProductFields, 
          verifyIfCategoryExists } from "../middlewares";

const productRoutes = Router();


productRoutes.post("/produto", verifyToken, verifyProductFields, verifyIfCategoryExists, RegisterProductController.handle);

productRoutes.put("/produto/:id", verifyToken, verifyProductFields, verifyIfCategoryExists, EditProductController.handle);


export default productRoutes;