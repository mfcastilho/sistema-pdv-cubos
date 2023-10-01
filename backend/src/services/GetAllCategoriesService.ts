import { Category } from "../repositories";


class GetAllCategoriesService {
     async execute() {
          try {
               
               const repo = Category;
               const categories = await repo.findMany();

               return categories;

          } catch (error) {
               throw error;
          }
     }
}

export default GetAllCategoriesService;