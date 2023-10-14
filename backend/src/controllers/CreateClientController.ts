import { CreateClientService } from "../services";
import { Request, Response } from "express";

class CreateClientController {
     async handle(req:Request, res:Response) {

          try {

               const { name, cpf, email } = req.body;

               const  { zipCode, street, number, district, city, state } = req.body;

               const service = new CreateClientService();

               const clientCreated = await service.execute({ name, cpf, email }, { zipCode, street, number, district, city, state });

               return res.status(201).json(clientCreated);
               
          } catch (error) {    
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new CreateClientController;