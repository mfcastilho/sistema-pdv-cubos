import { Request, Response, NextFunction } from 'express';
import Joi from "joi";


const verifyLoginUserFields = async (req: Request, res: Response, next: NextFunction)=> {

     const user = Joi.object({

               email: Joi.string()
                    .trim()
                    .required()
                    .messages({
                         'string.empty': "Todos os campos são obrigatórios."
                    }),

               password: Joi.string()
                    .trim()
                    .messages({
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