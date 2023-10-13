import { CategoryRepository } from "../repositories";
import { Request, Response, NextFunction } from 'express';


const verifyIfCategoryExists = async (req: Request, res: Response, next: NextFunction)=>{
     try {

          const { categoryId } = req.body;

          const repo = CategoryRepository;

          const categoryExists = await repo.findUnique({
               where:{id:categoryId}
          });

          if(!categoryExists) return res.status(404).json({error: "Categoria não encontrada."});

          return next();
          
     } catch (error) {
          throw error;
     }
}

export default verifyIfCategoryExists;