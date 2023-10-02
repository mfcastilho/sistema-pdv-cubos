import { UserRepository } from "../repositories";

interface UserDTO {
     id?:string,
     name:string,
     email:string,
     password?:string
}

class GetUserLoggedInfosService {
     async execute({id}:UserDTO) {
          
          try {
               
               const repo = UserRepository;

               const userLogged: UserDTO | null = await repo.findFirst({
                    where:{id}
               });

               return userLogged;

          } catch (error) {
               throw error;
          }
     }
}


export default GetUserLoggedInfosService;