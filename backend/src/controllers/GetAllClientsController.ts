import { GetAllClientsService } from "../services";
import { Request, Response } from "express";


class GetAllClientsController {
     async handle(req:Request, res:Response) {
          try {
               
               const service = new GetAllClientsService();

               const clients = await service.execute();

               return res.status(200).json(clients);


          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new GetAllClientsController;