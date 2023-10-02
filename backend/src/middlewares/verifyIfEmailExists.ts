import { UserRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';

const verifyIfEmailExists = async (req: Request, res: Response, next: NextFunction)=>{
     
     try {

          const { email } = req.body;
     
          const repo = UserRepository;
     
          const emailExists = await repo.findFirst({
               where: {
                    email:email
               }
          });
     
          const userLoggedId = req.decoded.id;
     
          const userLogged = await repo.findUnique({
               where:{id:userLoggedId}
          });
     
          if(userLogged){
               if(userLogged?.email === email) return next();
          }
     
          if(emailExists) return res.status(400).json({error: "Email já está cadastrado."});
     
          return next();

     } catch (error) {
          throw error;
     }
}

export default verifyIfEmailExists;