import { Router } from "express";

import { CreateClientController, EditClientController, GetAllClientsController } from "../controllers";

import { validateRequestBody,
         verifyToken,
         verifyIfEmailExists,
         verifyIfCpfExists, 
         verifyIfAddressIsRegistered,
         verifyIfClientExists } from "../middlewares";

import { createClientSchema, editClientSchema } from "../schemas"

const clientRoutes = Router();


clientRoutes.post("/", verifyToken, validateRequestBody(createClientSchema), verifyIfEmailExists, verifyIfCpfExists, CreateClientController.handle);

clientRoutes.put("/:id", verifyToken, verifyIfClientExists, verifyIfAddressIsRegistered, validateRequestBody(editClientSchema), verifyIfEmailExists, verifyIfCpfExists, EditClientController.handle);

clientRoutes.get("/", verifyToken, GetAllClientsController.handle);

export default clientRoutes;