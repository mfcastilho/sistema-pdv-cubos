import { Request, Response } from "express";
import { DeleteProductService } from "../services";

class DeleteProductController {
     async handle(req:Request, res:Response) {
          try {

               const { id } = req.params;

               const service = new DeleteProductService();

               const productDeleted = await service.execute(id);

               return res.status(200).json(productDeleted);
               
          } catch (error) {
               console.log(error);
               
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new DeleteProductController;