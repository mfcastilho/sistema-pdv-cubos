import { OrderRepository, OrderProductsRepository } from "../repositories";
import { OrderDTO } from"../dto";
import { calculateTotalValue, getOrderProductsValues } from "../utils";

class CreateOrderService {
     async execute({ clientId, observation, orderProducts }: OrderDTO) {

          const orderRepo = OrderRepository;

          const orderProdRepo = OrderProductsRepository;

          let totalValue = await calculateTotalValue(orderProducts);

          let productsValue = await getOrderProductsValues(orderProducts);
          
          const newOrder = await orderRepo.create({
               data: {
                    clientId,
                    observation,
                    totalValue
               },
               select: {
                    id: true,
                    clientId: true,
                    observation: true,
                    totalValue: true
               }
          });

          for(let i = 0; i < orderProducts.length; i++) {
               if(productsValue) {
                    await orderProdRepo.create({
                         data: {
                              productQuantity: orderProducts[i].productQuantity,
                              productValue: productsValue[i] ?? 0,
                              orderId: newOrder.id,
                              productId: orderProducts[i].productId
                         }
                    })
               }    
          }

          const orderInfos = await orderRepo.findFirst({
               where: {id: newOrder.id},
               include: { OrderProducts: true }
          });

          return orderInfos;  
     }
}

export default CreateOrderService;