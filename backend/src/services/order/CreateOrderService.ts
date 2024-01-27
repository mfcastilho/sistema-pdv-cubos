import { OrderRepository, OrderProductsRepository, ProductRepository, ClientRepository } from "../../repositories";

import { OrderDTO } from"../../dto";

import { calculateTotalValue, getOrderProductsValues, sendEmail, convertCentsToCurrent } from "../../utils";
import { response } from "express";

class CreateOrderService {
     async execute({ clientId, observation, orderProducts }: OrderDTO) {

          const orderRepo = OrderRepository;

          const orderProdRepo = OrderProductsRepository;

          const client = await ClientRepository.findUnique({
               where: {id: clientId}
          })

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
                    });

                    const product = await ProductRepository.findFirst({
                         where: {id:orderProducts[i].productId}
                    });

                    const orderProductQuantity = orderProducts[i].productQuantity;

                    if(product) {

                         product.stockQuantity = product.stockQuantity - orderProductQuantity;

                         await ProductRepository.update({
                              where: {id:orderProducts[i].productId},
                              data: product
                         });
                    }   
               }    
          }

          const orderProductsInfos = await orderProdRepo.findMany({
               where: {orderId: newOrder.id},
               include: { product: true, order: true }
          });


          const orderInfos = await orderRepo.findFirst({
               where: {id: newOrder.id},
               include: { OrderProducts: true }
          });

          const productMapped = orderProductsInfos.map(orderProduct => (
               {
                    id: orderProduct.productId,
                    description: orderProduct.product.description,
                    value: convertCentsToCurrent(orderProduct.product.value),
                    productQuantity: orderProduct.productQuantity,
                    productImage: orderProduct.product.productImage
               }
          ));

          const response = {
               id: orderInfos?.id,
               observation: orderInfos?.observation,
               totalValue: convertCentsToCurrent(orderInfos?.totalValue!),
               products: productMapped
          }
          
          if(client) {
               sendEmail({name: client.name, email: client.email, orderNumber: response.id, observation: response.observation, totalValue: response.totalValue, products: response.products});
          }

          return response;  
     }
}

export default CreateOrderService;