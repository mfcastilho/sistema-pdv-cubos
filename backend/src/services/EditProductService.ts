import { ProductRepository } from "../repositories";
import { convertCurrentToCents } from "../utils";

interface ProductDTO {
     id: string
     description:string;
     stockQuantity:number;
     value:number;
     categoryId:string
}

class EditProductService {
     async execute({ id, description, stockQuantity, value, categoryId }: ProductDTO) {

          try {

               const repo = ProductRepository;

               const product: ProductDTO | null = await repo.findUnique({
                    where: {id}
               });

               if(product) {

                    if(description) product.description = description;

                    if(stockQuantity) product.stockQuantity = stockQuantity;

                    if(value) product.value = convertCurrentToCents(value);

                    if(categoryId) product.categoryId = categoryId;

                    const productUpdated = await repo.update({
                         where:{id},
                         data: product
                    });

                    return productUpdated;
               }
               
          } catch (error) {
               throw error;
          }
     }
}

export default EditProductService;