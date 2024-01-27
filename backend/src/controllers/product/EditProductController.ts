import { Request, Response } from "express";
import { EditProductService } from "../../services/product";
import { ProductDTO } from "../../dto";

class EditProductController {
     async handle(req: Request, res: Response) {

          try {

               const { id } = req.params;

               const { description, stockQuantity, value, categoryId } = req.body;

               const productImage = req.file ?? null;
     
               const service = new EditProductService();
     
               const productUpdated = await service.execute({ id, description, stockQuantity, value, categoryId, productImage });

               return res.status(200).json(productUpdated);

          } catch (error) {
               console.log(error);
               
               return res.status(500).json({error: "Erro interno do servidor"});
          }

     }
}

export default new EditProductController;