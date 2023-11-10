import { UserRepository } from "../../repositories";

interface UserDTO {
     id?:string,
     name:string,
     email:string,
     password?:string
}

class GetUserLoggedInfosService {
     async execute({id}:UserDTO) {
          
          const repo = UserRepository;

          const user: UserDTO | null = await repo.findFirst({
               where:{id}
          });

          if(user) {
               const { password, ...userLogged } = user;

               return userLogged;
          }
     }
}


export default GetUserLoggedInfosService;