import { Router } from "express";

import { LoginUserController } from "../controllers/user";

import {  verifyLoginEmail,
          verifyLoginPassword,
          verifyLoginUserFields } from "../middlewares";
       

const loginRoutes = Router();


loginRoutes.post("/", verifyLoginUserFields, verifyLoginEmail, verifyLoginPassword, LoginUserController.handle);


export default loginRoutes;