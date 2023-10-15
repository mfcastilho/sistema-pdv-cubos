import { ProductRepository } from "../repositories";

class DeleteProductService {
     async execute(id: string) {

          const repo = ProductRepository;

          const product = await repo.findUnique({
               where: {id}
          });

          await repo.delete({
               where: {id}
          });

          return product;
     }
}

export default DeleteProductService;