import { OrderProductsDTO } from"../dto";
import { ProductRepository } from "../repositories";

 const calculateTotalValue = async (orderProducts: OrderProductsDTO[])=>{

     let totalValue = 0;

     if (orderProducts) {
          for (const p of orderProducts) {
            const product = await ProductRepository.findFirst({
              where: { id: p.productId },
            });
      
            if (product) {
              totalValue += p.productQuantity * product?.value;
            }
          }
      
          return totalValue;
        }
        return totalValue;
}

export default calculateTotalValue;