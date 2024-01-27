import { Router } from "express";

import {  CreateUserController, 
          GetUserLoggedInfosController,
          EditUserLoggedInfosController } from "../controllers/user";

import {  verifyCreateUserFields, 
          verifyEditUserFields, 
          verifyIfEmailExists,
          verifyToken } from "../middlewares";

          

const userRoutes = Router();

userRoutes.post("/", verifyCreateUserFields, verifyIfEmailExists, CreateUserController.handle);


userRoutes.get("/", verifyToken, GetUserLoggedInfosController.handle);

userRoutes.put("/", verifyToken, verifyEditUserFields, verifyIfEmailExists, EditUserLoggedInfosController.handle);


export default userRoutes;