import { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";


const verifyToken = (req: Request, res: Response, next: NextFunction)=>{

     try {
          const { authorization } = req.headers;

          if(!authorization) return res.status(401).json({error: "Para acessar este recurso um token de autenticação válido deve ser enviado."});

          const token = authorization.split(" ")[1];

          const jwtSecretKey = process.env.JWT_SECRET_KEY; 

          if(!jwtSecretKey) return res.status(500).json({error: "A chave secreta JWT não está definida."});

          const decoded = jwt.verify(token, jwtSecretKey);
          
     } catch (error) {
          return res.status(500).json({error: "Para acessar este recurso um token de autenticação válido deve ser enviado."});
     }
}

export default verifyToken;