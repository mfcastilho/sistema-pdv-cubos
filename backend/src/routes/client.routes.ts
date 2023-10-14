import { Router } from "express";

import { CreateClientController } from "../controllers";

import { validateRequestBody,
         verifyToken,
         verifyIfEmailExists,
         verifyIfCpfExists } from "../middlewares";

import { createClientSchema } from "../schemas"

const clientRoutes = Router();


clientRoutes.post("/cliente", verifyToken, validateRequestBody(createClientSchema), verifyIfEmailExists, verifyIfCpfExists, CreateClientController.handle);

export default clientRoutes;