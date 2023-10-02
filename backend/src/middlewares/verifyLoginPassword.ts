import { UserRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';
import bcrypt from "bcrypt";


const verifyLoginPassword = async (req: Request, res: Response, next: NextFunction)=>{
     try {

          const { email, password } = req.body;

          const repo = UserRepository;

          const user = await repo.findFirst({
               where:{email}
          });

          const cryptedPassword = user?.password;

          if(!cryptedPassword) return res.status(500).json({error: "Senha não encontrada."});

          const passwordIsValid = await bcrypt.compare(password, cryptedPassword);
          
          if(!passwordIsValid) return res.status(401).json({error: "Email e/ou senha incorreto."});

          return next();
          
     } catch (error) {
          return res.status(500).json({error: "Erro interno do servidor"});    
     }
}

export default verifyLoginPassword;