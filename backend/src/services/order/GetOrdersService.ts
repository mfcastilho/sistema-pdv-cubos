import { OrderRepository, OrderProductsRepository, ProductRepository, ClientRepository } from "../../repositories";

import { OrderDTO } from"../../dto";

import { calculateTotalValue, getOrderProductsValues, sendEmail } from "../../utils";

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

          console.log(orders);

          return orders;
          
     }
}


export default GetOrdersService;