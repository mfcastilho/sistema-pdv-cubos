import { CategoryRepository } from "../repositories";


class GetAllCategoriesService {
     async execute() {
          const repo = CategoryRepository;
          const categories = await repo.findMany();

          return categories;
     }
}

export default GetAllCategoriesService;