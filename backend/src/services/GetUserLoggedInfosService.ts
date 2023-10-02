import { UserRepository } from "../repositories";

interface UserDTO {
     id?:string,
     name:string,
     email:string,
     password?:string
}

class GetUserLoggedInfosService {
     async execute() {
          
          try {
               
               const repo = UserRepository;

               const userLogged: UserDTO | null = await repo.findFirst({
                    where:{}
               });

               return userLogged;

          } catch (error) {
               throw error;
          }
     }
}


export default GetUserLoggedInfosService;