import { Express } from 'express';
import { ProductRepository } from "../../repositories";
import { convertCurrentToCents, uploadFile} from "../../utils";


interface ProductDTO {
     description: string;
     stockQuantity: number;
     value: number;
     categoryId: string;
     productImage: Express.Multer.File | undefined;
}

class RegisterProductService {
     async execute({ description, stockQuantity, value, categoryId, productImage }: ProductDTO) {

          const repo = ProductRepository;

          const centsValue = convertCurrentToCents(value);

          let productRegistered = await repo.create({
               data: {
                    description, 
                    stockQuantity: Number(stockQuantity), 
                    value: centsValue, 
                    categoryId
               }
          });
          
          if(productImage) {
               const dir = `produtos/${productRegistered.id}`
               const url = await uploadFile(dir, productImage);

               productRegistered = await repo.update({
                    data: {productImage:url},
                    where: {id: productRegistered.id}
               })
          }

          return productRegistered;
     }
}

export default RegisterProductService;