import { UserRepository } from "../repositories";
import bcrypt from "bcrypt";

interface CreateUserDTO {
     name:string,
     email:string,
     password:string
}

class CreateUserService {
     async execute({ name, email, password }:CreateUserDTO) {

          const repo = UserRepository;
          const cryptedPassword = await bcrypt.hash(password, 10);

          const userCreate = repo.create({
               data: {
                    name,
                    email,
                    password:cryptedPassword
               },
               select: {
                    id: true,
                    name: true,
                    email: true
               }
          });

          return userCreate;
     }
}

export default CreateUserService;