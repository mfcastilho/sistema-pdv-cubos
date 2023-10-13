import { Request, Response, NextFunction } from 'express';
import { ProductRepository } from "../repositories";

const verifyIfProductExists = async (req: Request, res: Response, next: NextFunction)=>{

     const { id } = req.params;

     const repo = ProductRepository;

     const product = await repo.findUnique({
          where: {id}
     });

     if(!product) return res.status(404).json({error: "Producto não encontrado."});

     return next();
}

export default verifyIfProductExists;