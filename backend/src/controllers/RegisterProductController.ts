import { RegisterProductService } from "../services";
import { Request, Response } from "express";


class RegisterProductController {
     async handle(req:Request, res:Response) {

          try {

               const { description, stock_quantity, value, categoryId } = req.body;

               const service = new RegisterProductService();

               const productRegistered = await service.execute({ description, stock_quantity, value, categoryId });

               return res.status(201).json(productRegistered);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new RegisterProductController;