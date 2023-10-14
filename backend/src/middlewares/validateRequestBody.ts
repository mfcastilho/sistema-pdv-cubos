import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const validateRequestBody = (joiSchema: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction)=>{

     try {
          
          if(req.url === "/cliente") {

               const { name, cpf, email } = req.body;

               const  { zipCode, street, number, district, city, state } = req.body;
   
               if(req.addressRegistered) {
                   await joiSchema.validateAsync(req.body);
                   return next();
               }
   
               if((zipCode && (!street || !number || !district || !city || !state)) ||
               (street && (!zipCode || !number || !district || !city || !state)) ||
               (number && (!street || !zipCode || !district || !city || !state)) ||
               (district && (!street || !number || !zipCode || !city || !state)) ||
               (city && (!street || !number || !district || !zipCode || !state)) ||
               (state && (!street || !number || !district || !city || !zipCode))) {
   
                   return res.status(400).json({mensagem: "Se optar por cadastrar o endereço é obrigatório o preenchimento de todos os campos de endereço"});
               }
   
               if(zipCode && street && number && district && city && state) {

                   await joiSchema.validateAsync(req.body);

                   return next();
   
               }else{

                   await joiSchema.validateAsync({ name, cpf, email });

                   return next();
               }
           }
           
           await joiSchema.validateAsync(req.body);

           return next();

     } catch (error: any) {
          return res.status(400).json({ mensagem: error.message });
     }
}

export default validateRequestBody;