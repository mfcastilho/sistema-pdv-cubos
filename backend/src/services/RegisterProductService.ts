import { ProductRepository } from "../repositories";
import { convertCurrentToCents } from "../utils";


interface ProductDTO {
     description:string;
     stockQuantity:number;
     value:number;
     categoryId:string
}

class RegisterProductService {
     async execute({ description, stockQuantity, value, categoryId }: ProductDTO) {

          try {
               
               const repo = ProductRepository;

               const centsValue = convertCurrentToCents(value);

               const productRegistered = await repo.create({
                    data: {
                         description, 
                         stockQuantity, 
                         value: centsValue, 
                         categoryId
                    }
               });
     
               return productRegistered;

          } catch (error) {
               throw error;
          }
     }
}

export default RegisterProductService;