import { Product } from './../entities/Product';
import { Request, Response, NextFunction } from 'express';
import { ProductRepository } from "../repositories";


const verifyIfProductExists = async (req: Request, res: Response, next: NextFunction)=>{

     let product:Product | undefined | null;

     if(req.baseUrl === "/produto") {
          const { id } = req.params;

          const repo = ProductRepository;

          product = await repo.findUnique({
               where: {id}
          });

          if(!product) return res.status(404).json({error: "Producto não encontrado."});
     }
     
     if(req.baseUrl === "/pedido") {
          const { orderProducts } = req.body;

          const repo = ProductRepository;

          for(let p of orderProducts) {
               product = await repo.findUnique({
                    where: {id: p.productId}
               });

               if(!product) return res.status(404).json({error: "Producto não encontrado."});
          }  
     }

     return next();
}

export default verifyIfProductExists;