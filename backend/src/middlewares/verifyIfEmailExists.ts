import { UserRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';

const verifyIfEmailExists = async (req: Request, res: Response, next: NextFunction)=>{
     
     try {

          const { email } = req.body;
     
          if(email) {
               const repo = UserRepository;
     
               const emailExists = await repo.findFirst({
                    where: {
                         email:email
                    }
               });
          
               if(req.decoded){
                    
                    const userLoggedId = req.decoded.id;
          
                    const userLogged = await repo.findUnique({
                         where:{id:userLoggedId}
                    });
               
                    
                    if(userLogged?.email === email) return next();    
               }
          
               if(emailExists) return res.status(400).json({error: "Email já está cadastrado."});
          
               return next();
          }

          return next();

     } catch (error) {
          throw error;
     }
}

export default verifyIfEmailExists;