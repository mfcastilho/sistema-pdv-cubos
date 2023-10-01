import { CategoryCategory } from "../repositories";


class GetAllCategoriesService {
     async execute() {
          try {
               
               const repo = CategoryCategory;
               const categories = await repo.findMany();

               return categories;

          } catch (error) {
               throw error;
          }
     }
}

export default GetAllCategoriesService;