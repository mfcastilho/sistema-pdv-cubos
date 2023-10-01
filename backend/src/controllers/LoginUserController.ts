import { LoginUserService } from "../services";
import { Request, Response } from "express";




class LoginUserController {
     async handle(req:Request, res:Response) {

          try {

               const { email } = req.body;
               
               const service = new LoginUserService();

               const response = await service.execute({ email });

               if(response instanceof Error) return res.status(500).json(response.message);

               return res.status(200).json(response);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }    
}

export default new LoginUserController;