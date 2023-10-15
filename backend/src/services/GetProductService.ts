import { ProductRepository } from "../repositories";

class GetProductService {
     async execute(id: string) {

          const repo = ProductRepository;

          const product = await repo.findUnique({
               where: {id}
          });

          return product;
     }
}

export default GetProductService;