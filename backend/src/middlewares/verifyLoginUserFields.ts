import { Request, Response, NextFunction } from 'express';
import Joi from "joi";


const verifyLoginUserFields = async (req: Request, res: Response, next: NextFunction)=> {

     const user = Joi.object({

               email: Joi.string()
                    .trim()
                    .email({ tlds: { allow: false } })
                    .required()
                    .messages({
                         'any.required': "O campo email é obrigatório.",
                         'string.base': "Formato de email inválido.",
                         'string.email': "Formato de email inválido.",
                         'string.empty': "Todos os campos são obrigatórios."
                    }),

               password: Joi.string()
                    .trim()
                    .min(5)
                    .max(16)
                    .pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!*]).{8,}$/)
                    .messages({
                         'any.required': "O campo senha é obrigatório.",
                         'string.min': "A senha deve conter no mínimo 5 e no máximo 16 caracteres.", 
                         'string.max': "A senha deve conter no mínimo 5 e no máximo 16 caracteres.", 
                         'string.pattern.base': "A senha deve conter letras, números e caracteres especiais.",
                         'string.empty': "Todos os campos são obrigatórios."
                    })     
     });

     try {
          await user.validateAsync(req.body);
          return next();
     } catch (error:any) {
          return res.status(400).json({ error: error.message });
     }
}

export default verifyLoginUserFields;