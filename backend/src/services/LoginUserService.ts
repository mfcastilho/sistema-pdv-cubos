import { UserRepository } from "../repositories";
import jwt from "jsonwebtoken";


interface LoginUserDTO {
     id?:string,
     name?:string,
     email:string,
     password?:string
}

class LoginUserService {
     async execute({ email }:LoginUserDTO) {
          
          const repo = UserRepository;

          const user:LoginUserDTO | null = await repo.findFirst({
               where: {email}
          });

          if(user) {
               const jwtSecretkey = process.env.JWT_SECRET_KEY; 

               if(!jwtSecretkey) return new Error("A chave secreta JWT não está definida.");

               const token = jwt.sign({id:user.id}, jwtSecretkey, {expiresIn:"24h"});

               const { password, ...userLogged } = user;

               return {user: userLogged, token};                   
          }
     }
}

export default LoginUserService;