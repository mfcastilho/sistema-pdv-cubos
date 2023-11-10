import { Request, Response, NextFunction } from 'express';
import { ProductRepository, OrderProductsRepository } from "../repositories";

const verifyProductDeletion = async (req: Request, res: Response, next: NextFunction)=>{
     const { id } = req.params;

     const product = await ProductRepository.findFirst({
          where: {id}
     });
     
     const productExists = await OrderProductsRepository.findFirst({
          where: {productId: id}
     });

     if(!productExists) return next();

     return res.status(400).json({error: `Produto '${product?.description}' não pode ser excluído. O produto se encontra vinculado a um ou mais pedidos.`});
}

export default verifyProductDeletion;