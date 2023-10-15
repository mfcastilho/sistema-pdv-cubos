import { ClientRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';


const verifyIfClientExists = async (req: Request, res: Response, next: NextFunction)=>{

     try {

          const { id } = req.params;

          const repo = ClientRepository;

          const client = await repo.findFirst({
               where: {id}
          });

          if(!client) return res.status(404).json({error: "Cliente não encontrado"});

          return next();
          
     } catch (error) {
          return res.status(500).json({ mensagem: "Erro interno do servidor"});
     }
}

export default verifyIfClientExists;