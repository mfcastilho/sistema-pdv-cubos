import { Request, Response, NextFunction } from "express";
import Joi from "joi";


const verifyRegisterProductFields = async (req: Request, res: Response, next: NextFunction)=> {

     const user = Joi.object({

          description: Joi.string()
               .trim()
               .required()
               .messages({
                    "string.empty": "Todos os campos são obrigatórios.",
                    "string.base": "O campo 'description' deve ser um texto.",
                    "any.required": "O campo 'description' é obrigatório." 
               }),

          stock_quantity: Joi.number().integer()
               .required()
               .messages({
                    "number.base": "O campo 'stock_quantity' deve ser um número.",
                    "number.integer": "O campo 'stock_quantity' deve ser um número inteiro.",
                    "any.required": "O campo 'stock_quantity' é obrigatório.",
                    "number.empty": "Todos os campos são obrigatórios."
               }),
          
          value: Joi.number().precision(2)
               .required()
               .messages({
                    "number.base": "O campo 'value' deve ser um número.",
                    "number.integer": "O campo 'value' deve ser um número decimal.",
                    "any.required": "O campo 'value' é obrigatório.",
                    "number.empty": "Todos os campos são obrigatórios."
               }), 

          categoryId: Joi.string()
          .required()
          .messages({
               "any.required": "É preciso informar o id da categoria.",
               "string.empty": "Todos os campos são obrigatórios."
          }),       

            
     })
     .or("description", "stock_quantity", "value", "categoryId")
     .messages({
          "object.missing":"É preciso informar pelo menos um campo para atualização (nome, email ou senha)."
     });

     try {
          await user.validateAsync(req.body);
          return next();
     } catch (error:any) {
          return res.status(400).json({ error: error.message });
     }
}

export default verifyRegisterProductFields;