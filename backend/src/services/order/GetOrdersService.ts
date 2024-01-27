import { OrderRepository } from "../../repositories";

class GetOrdersService {
     async execute(clientId: string | undefined) {

          if(clientId) {
               const clientOrders = await OrderRepository.findMany({
                    where: {clientId},
                    include: { OrderProducts: true }
               });

               return clientOrders;
          }

          const orders = await OrderRepository.findMany({
               include: { OrderProducts: true }
          });

          return orders;    
     }
}


export default GetOrdersService;