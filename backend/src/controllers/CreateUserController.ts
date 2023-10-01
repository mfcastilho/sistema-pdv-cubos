
import { CreateUserService } from "../services";
import { Request, Response } from "express";

class CreateUserController {
     async handle(req:Request, res:Response) {
          try {

               console.log("aqui");
               
               const { name, email, password } = req.body;
               const service = new CreateUserService();

               const userCreated = await service.execute({ name, email, password });

               return res.status(200).json(userCreated);
               
          } catch (error) { 
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new CreateUserController;