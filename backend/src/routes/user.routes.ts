import { Router } from "express";
import { CreateUserController } from "../controllers";
import { verifyCreateUserFields, verifyIfEmailExists } from "../middlewares";

const userRoutes = Router();


userRoutes.post("/usuario", verifyCreateUserFields, verifyIfEmailExists, CreateUserController.handle);


export default userRoutes;