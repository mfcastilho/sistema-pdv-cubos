import { GetAllCategoriesService } from "../services";
import { Request, Response } from "express";

class GetAllCategoriesController {
     async handle(req:Request, res:Response) {
          try {
               
               const service = new GetAllCategoriesService();
               const categories = await service.execute();

               return res.status(200).json(categories);

          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new GetAllCategoriesController;