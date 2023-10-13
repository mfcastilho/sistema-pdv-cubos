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

          stockQuantity: Joi.number().integer()
               .required()
               .min(0)
               .messages({
                    "number.base": "O campo 'stockQuantity' deve ser um número.",
                    "number.min": "O campo 'stockQuantity' não aceita valores negativos",
                    "number.integer": "O campo 'stockQuantity' deve ser um número inteiro.",
                    "any.required": "O campo 'stockQuantity' é obrigatório.",
                    "number.empty": "Todos os campos são obrigatórios."
               }),
          
          value: Joi.number().precision(2)
               .required()
               .min(0.1)
               .messages({
                    "number.base": "O campo 'value' deve ser um número.",
                    "number.min": "O campo 'value' não aceita o valor zero e valores negativos",
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