import { GetUserLoggedInfosService } from "../services";
import { Request, Response } from "express";


class GetUserLoggedInfosController {
     async handle(req:Request, res:Response) {

          try {
               
               const service = new GetUserLoggedInfosService();

               const userLogged = await service.execute();
     
               return res.status(200).json(userLogged);

          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new GetUserLoggedInfosController;