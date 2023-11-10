import { UserRepository } from "../../repositories";
import bcrypt from "bcrypt";

interface UserDTO {
     id:string,
     name:string,
     email:string,
     password:string
}

class EditUserLoggedInfosService {
     async execute({ id, name, email, password }: UserDTO) {
         
          const repo = UserRepository;

          const user: UserDTO | null = await repo.findUnique({
               where: {id}
          });

          if(user) {

               if(name) user.name = name;

               if(email) user.email = email;

               if(password) {
                    const cryptedPassword = await bcrypt.hash(password, 10);
                    user.password = cryptedPassword;
               }         
               const userUpdated: UserDTO | null = await repo.update({
                    where:{id},
                    data: user
               });

               if(userUpdated) {
                    const { password, ...rest } = userUpdated;

                    return rest;
               }
          }     
     }
}

export default EditUserLoggedInfosService;