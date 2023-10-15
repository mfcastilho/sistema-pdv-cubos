import { Request, Response, NextFunction } from 'express';
import { ClientRepository } from "../repositories";

const verifyIfCpfExists = async (req: Request, res: Response, next: NextFunction)=>{

     try {

          const { cpf } = req.body;

          const repo = ClientRepository;

          if(cpf) {
               const cpfExists = await repo.findFirst({
                    where: {cpf}
               });

               if(req.params.id) {
                    const client = await repo.findFirst({
                         where: {id: req.params.id}
                    });

                    if(client?.cpf === cpf) return next();
               }
               
               if(cpfExists) return res.status(400).json({error: "O Cpf informado já está cadastrado."});

               return next();
          }

          return next();
          
     } catch (error) {
          return res.status(500).json({error: "Erro interno do servidor."});
     }
}

export default verifyIfCpfExists;