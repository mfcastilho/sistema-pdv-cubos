import { EditClientService } from "../../services/client";
import { Request, Response } from "express";


class EditClientController {
     async handle(req:Request, res:Response) {

          try {
               const { name, cpf, email } = req.body;
               
               const  { zipCode, street, number, district, city, state } = req.body;

               const { id } = req.params;

               const service = new EditClientService();

               const clientUpdated = await service.execute({ name, cpf, email }, { zipCode, street, number, district, city, state }, id);

               return res.status(200).json(clientUpdated);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new EditClientController;