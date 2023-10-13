import { Request, Response } from "express";
import { GetAllProductsService } from "../services";


class GetAllProductsController {
     async handle(req:Request, res:Response) {

          try {
               const categoria_id: string | undefined  = req.query?.categoria_id as string | undefined;

               const service = new GetAllProductsService();

               const products = await service.execute(categoria_id);

               return res.status(200).json(products);

          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new GetAllProductsController;