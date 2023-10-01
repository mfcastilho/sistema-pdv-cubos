import { UserCategory } from "../repositories";

interface CreateUserRequest {
     name:string,
     email:string,
     password:string
}

class CreateUserService {
     async execute({ name, email, password }:CreateUserRequest) {

          try {
                
               const repo = UserCategory;

               const userCreate = repo.create({
                    data: {
                         name,
                         email,
                         password
                    },
                    select: {
                         id: true,
                         name: true,
                         email: true
                    }
               });

               return userCreate;
                
          } catch (error) {
               throw error;
          }
     }
}

export default CreateUserService;