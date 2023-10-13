import { ProductRepository } from "../repositories";

class GetProductService {
     async execute(id: string) {

          try {

               const repo = ProductRepository;

               const product = await repo.findUnique({
                    where: {id}
               });

               return product;
               
          } catch (error) {
               throw error;
          }
     }
}

export default GetProductService;