import { Request, Response, NextFunction } from 'express';
import { AddressRepository } from "../repositories";


declare global {
     namespace Express {
          interface Request {
               addressRegistered?: any;
          }
     }
}

const verifyIfAddressIsRegistered = async (req: Request, res: Response, next: NextFunction)=>{

     try {
          const repo = AddressRepository;
     
          const  address = await repo.findFirst({
               where: {clientId: req.params.id}
          });
     
          if(address) {
               const { zipCode, street, number, district, city, state } = address;
     
               if(zipCode === "N/A" && street === "N/A" && number === "N/A" && district === "N/A" && city === "N/A" && state === "XX") {
                    req.addressRegistered = false;
                }else {
                    req.addressRegistered = true;
                }
        
                return next();
          }
     } catch (error) {
          return res.status(500).json({ mensagem: "Erro interno do servidor"});
     }
}

export default verifyIfAddressIsRegistered;