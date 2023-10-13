import { Request, Response } from "express";
import { GetProductService } from "../services";


class GetProductController {
     async handle(req:Request, res:Response) {
          try {

               const { id } = req.params;

               const service = new GetProductService();

               const product = await service.execute(id);

               return res.status(200).json(product);

          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new GetProductController;