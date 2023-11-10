import { Router } from "express";
import { GetAllCategoriesController } from "../controllers/category";

const categoryRoutes = Router();

categoryRoutes.get("/", GetAllCategoriesController.handle);



export default categoryRoutes;