import { GetClientService } from "../services";
import { Request, Response } from "express";


class GetClientController {
     async handle(req:Request, res:Response) {

          try {
               
               const { id } = req.params;

               const service = new GetClientService();

               const client = await service.execute(id);

               return res.status(200).json(client);

          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }


     }
}

export default new GetClientController;