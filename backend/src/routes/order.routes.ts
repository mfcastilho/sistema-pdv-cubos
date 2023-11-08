import { Router } from "express";

import { CreateOrderController } from "../controllers";

import { createOrderSchema } from "../schemas"

import { validateRequestBody,
         verifyToken,
         verifyIfProductExists,
         verifyIfClientExists, 
         verifyProductStockQuantity } from "../middlewares";

const orderRoutes = Router();


orderRoutes.post("/", verifyToken, validateRequestBody(createOrderSchema), verifyIfProductExists, verifyIfClientExists, verifyProductStockQuantity, CreateOrderController.handle);


export default orderRoutes;