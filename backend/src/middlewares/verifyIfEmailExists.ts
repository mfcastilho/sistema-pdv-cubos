import { UserRepository, ClientRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';

const verifyIfEmailExists = async (req: Request, res: Response, next: NextFunction)=>{
     
     try {

          const { email } = req.body;

          const userRepo = UserRepository;
          const clientRepo = ClientRepository;

          let emailExists;
       
          if(email) {

               if(req.baseUrl === "/usuario"){
                    emailExists = await userRepo.findFirst({
                         where: {email}
                    })
                }
                
                if(req.baseUrl === "/cliente"){
                    emailExists = await clientRepo.findFirst({
                         where: {email}
                    })
                }
               
          
               if(req.decoded){
                    
                    const userLoggedId = req.decoded.id;
          
                    const userLogged = await userRepo.findUnique({
                         where:{id:userLoggedId}
                    });
               
                    
                    if(userLogged?.email === email) return next();
                    
                    
                    if(req.params.id) {

                         const client = await clientRepo.findFirst({
                              where: {id: req.params.id}
                         });
     
                         if(client?.email === email) return next();
                    }
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