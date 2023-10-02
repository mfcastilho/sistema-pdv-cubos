import { Router } from "express";
import { CreateUserController, LoginUserController } from "../controllers";

import {  verifyCreateUserFields, 
          verifyIfEmailExists,
          verifyLoginEmail,
          verifyLoginPassword,
          verifyLoginUserFields } from "../middlewares";

const userRoutes = Router();

userRoutes.post("/usuario", verifyCreateUserFields, verifyIfEmailExists, CreateUserController.handle);

userRoutes.post("/login",verifyLoginUserFields, verifyLoginEmail, verifyLoginPassword, LoginUserController.handle);


export default userRoutes;