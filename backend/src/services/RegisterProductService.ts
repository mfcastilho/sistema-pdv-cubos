import { ProductRepository } from "../repositories";
import { convertCurrentToCents } from "../utils";


interface ProductDTO {
     description:string;
     stock_quantity:number;
     value:number;
     categoryId:string
}

class RegisterProductService {
     async execute({ description, stock_quantity, value, categoryId }: ProductDTO) {

          try {
               
               const repo = ProductRepository;

               const centsValue = convertCurrentToCents(value);

               const productRegistered = await repo.create({
                    data: {
                         description, 
                         stock_quantity, 
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