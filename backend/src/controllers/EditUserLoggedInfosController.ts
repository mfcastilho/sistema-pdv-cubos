import { EditUserLoggedInfosService } from "../services";
import { Request, Response } from "express";

class EditUserLoggedInfosController {
     async handle(req:Request, res:Response) {

          try {

               const { name, email, password } = req.body;

               const id = req.decoded.id;

               const service = new EditUserLoggedInfosService();

               const userUpdated = await service.execute({ id, name, email, password });

               return res.status(200).json(userUpdated);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new EditUserLoggedInfosController;