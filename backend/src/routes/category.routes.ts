import { Router, Request, Response } from "express";
import { GetAllCategoriesController } from "../controllers";

const categoryRoutes = Router();


categoryRoutes.get("/categoria", GetAllCategoriesController.handle);


export default categoryRoutes;