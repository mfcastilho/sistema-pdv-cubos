import { Router } from "express";

import { CreateOrderController } from "../controllers";

const orderRoutes = Router();


orderRoutes.post("/", CreateOrderController.handle);


export default orderRoutes;