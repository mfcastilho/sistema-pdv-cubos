import { ProductRepository } from "../repositories";



class GetAllProductsService {
     async execute(categoria_id : string | undefined) {

          try {

               const repo = ProductRepository;

               if(categoria_id) {

                    const products = await repo.findMany({
                         where: {categoryId: categoria_id}
                    });

                    return products;
               }

               const products = await repo.findMany();

               return products;

          } catch (error) {
               throw error;
          }
     }
}

export default GetAllProductsService;