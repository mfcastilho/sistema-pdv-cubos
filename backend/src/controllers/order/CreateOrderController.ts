import { CreateOrderService } from "../../services/order";
import { Request, Response } from "express";


class CreateOrderController {
     async handle(req:Request, res:Response) {

          try {

               const { clientId, observation, orderProducts } = req.body;
               
               const service = new CreateOrderService();

               const orderCreated = await service.execute({ clientId, observation, orderProducts });

               return res.status(200).json(orderCreated);
               
          } catch (error) { 
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new CreateOrderController;