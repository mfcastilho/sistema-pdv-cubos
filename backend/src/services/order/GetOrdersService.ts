import { OrderRepository, OrderProductsRepository, ProductRepository, ClientRepository } from "../../repositories";

import { OrderDTO } from"../../dto";

import { calculateTotalValue, getOrderProductsValues, sendEmail } from "../../utils";

class GetOrdersService {
     async execute(clientId: string) {

          if(clientId) {
               const clientOrders = await OrderRepository.findMany({
                    where: {clientId}
               });

               return clientOrders;
          }

          const orders = await OrderRepository.findMany();

          console.log(orders);

          return orders;
          
     }
}


export default GetOrdersService;