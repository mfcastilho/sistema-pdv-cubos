import { UserRepository } from "../repositories";
import bcrypt from "bcrypt";

interface UserDTO {
     id:string,
     name:string,
     email:string,
     password:string
}

class EditUserLoggedInfosService {
     async execute({ id, name, email, password }: UserDTO) {
         
          try {
               const repo = UserRepository;
          
               const cryptedPassword = await bcrypt.hash(password, 10);
     
               const user: UserDTO | null = await repo.update({
                    where:{id},
                    data: {
                         name, 
                         email, 
                         password: cryptedPassword
                    }
               });

               if(user) {
                    const { password, ...userUpdated } = user;

                    return userUpdated;
               }
               
          } catch (error) {
               throw error;
          }


          
     }
}

export default EditUserLoggedInfosService;