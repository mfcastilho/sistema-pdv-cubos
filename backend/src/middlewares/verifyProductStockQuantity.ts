import { Request, Response, NextFunction } from 'express';
import { ProductRepository } from "../repositories";

const verifyProductStockQuantity = async (req: Request, res: Response, next: NextFunction)=>{

     const { orderProducts } = req.body;

     for(let i = 0; i < orderProducts.length; i++) {
          const product = await ProductRepository.findFirst({
               where: {id:orderProducts[i].productId}
          });

          if(product) {
               if(product.stockQuantity < orderProducts[i].productQuantity) return res.status(400).json({error: `Não existe essa quantidade em estoque do produto ${product.description}. No momento temos em estoque ${product.stockQuantity} unidades desse produtos.`});
          } 
     }

     return next();
     
}                    

export default verifyProductStockQuantity;