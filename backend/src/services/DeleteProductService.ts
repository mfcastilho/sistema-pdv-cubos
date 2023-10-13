import { ProductRepository } from "../repositories";

class DeleteProductService {
     async execute(id: string) {

          try {

               const repo = ProductRepository;

               const product = await repo.findUnique({
                    where: {id}
               });

               await repo.delete({
                    where: {id}
               });

               return product;
               
          } catch (error) {
               throw error;
          }
     }
}

export default DeleteProductService;