import { Request, Response } from "express";
import { EditProductService } from "../services";


class EditProductController {
     async handle(req: Request, res: Response) {

          try {

               const { id } = req.params;

               const { description, stock_quantity, value, categoryId } = req.body;
     
               const service = new EditProductService();
     
               const productUpdated = await service.execute({ id, description, stock_quantity, value, categoryId });

               return res.status(200).json(productUpdated);

          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }

     }
}

export default new EditProductController;