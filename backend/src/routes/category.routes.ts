import { Router } from "express";
import { GetAllCategoriesController } from "../controllers";

const categoryRoutes = Router();

categoryRoutes.get("/", GetAllCategoriesController.handle);

export default categoryRoutes;