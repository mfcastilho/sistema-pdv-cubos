import { Router } from "express";

import {  CreateUserController, 
          LoginUserController, 
          GetUserLoggedInfosController } from "../controllers";

import {  verifyCreateUserFields, 
          verifyIfEmailExists,
          verifyLoginEmail,
          verifyLoginPassword,
          verifyLoginUserFields,
          verifyToken } from "../middlewares";

const userRoutes = Router();

userRoutes.post("/usuario", verifyCreateUserFields, verifyIfEmailExists, CreateUserController.handle);

userRoutes.post("/login", verifyLoginUserFields, verifyLoginEmail, verifyLoginPassword, LoginUserController.handle);

userRoutes.get("/usuario", verifyToken, GetUserLoggedInfosController.handle);


export default userRoutes;