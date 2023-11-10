import { Router } from "express";

import { CreateOrderController, GetOrdersController } from "../controllers/order";

import { createOrderSchema } from "../schemas"

import { validateRequestBody,
         verifyToken,
         verifyIfProductExists,
         verifyIfClientExists, 
         verifyProductStockQuantity } from "../middlewares";
         

const orderRoutes = Router();

orderRoutes.get("/", verifyToken, verifyIfClientExists, GetOrdersController.handle);
orderRoutes.post("/", verifyToken, validateRequestBody(createOrderSchema), verifyIfProductExists, verifyIfClientExists, verifyProductStockQuantity, CreateOrderController.handle);


export default orderRoutes;