import { User } from "../repositories";
import { Request, Response, NextFunction } from 'express';

const verifyIfEmailExists = async (req: Request, res: Response, next: NextFunction)=>{
     
     const { email } = req.body;

     const repo = User;

     const emailExists = await repo.findFirst({
          where: {
               email:email
          }
     });

     if(emailExists) return res.status(400).json({error: "Email já está  cadastrado."});

     return next();

}

export default verifyIfEmailExists;