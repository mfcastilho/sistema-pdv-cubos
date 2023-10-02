import { Router } from "express";
import { CreateUserController, LoginUserController } from "../controllers";

import {  verifyCreateUserFields, 
          verifyIfEmailExists,
          verifyLoginEmail,
          verifyLoginPassword, } from "../middlewares";

const userRoutes = Router();

userRoutes.post("/usuario", verifyCreateUserFields, verifyIfEmailExists, CreateUserController.handle);

userRoutes.post("/login", verifyLoginEmail, verifyLoginPassword, LoginUserController.handle);


export default userRoutes;