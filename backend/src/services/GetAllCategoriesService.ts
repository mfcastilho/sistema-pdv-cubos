import { CategoryRepository } from "../repositories";


class GetAllCategoriesService {
     async execute() {
          try {
               
               const repo = CategoryRepository;
               const categories = await repo.findMany();

               return categories;

          } catch (error) {
               throw error;
          }
     }
}

export default GetAllCategoriesService;