import { UserRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';


const verifyEmailLogin = async (req: Request, res: Response, next: NextFunction)=>{

     try {

          const { email } = req.body;
          const repo = UserRepository;

          const user = await repo.findFirst({
               where: {email}
          });

          if(!user) return res.status(404).json({error: "Email e/ou senha incorreto."});

          return next();
          
     } catch (error) {
          return res.status(500).json({error: "Erro interno do servidor"});
     }
}

export default verifyEmailLogin;