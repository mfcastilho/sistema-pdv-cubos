import { GetOrdersService } from "../../services/order";
import { Request, Response } from "express";

class GetOrdersController {
     async handle(req:Request, res:Response) {
          try {

               const client_id = req.query.client_id as string | undefined;

               const service = new GetOrdersService();

               const orders = await service.execute(client_id);

               return res.status(200).json(orders);
               
          } catch (error) {
               return res.status(500).json({error: "Erro interno do servidor"});
          }
     }
}

export default new GetOrdersController;