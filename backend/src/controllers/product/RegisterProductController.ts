import { RegisterProductService } from "../../services/product";
import { Request, Response } from "express";


class RegisterProductController {
     async handle(req:Request, res:Response) {

          try {

               const { description, stockQuantity, value, categoryId } = req.body;
               const productImage = req.file;
               
               const service = new RegisterProductService();

               const productRegistered = await service.execute({ description, stockQuantity, value, categoryId, productImage });

               return res.status(201).json(productRegistered);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new RegisterProductController;