import { OrderProductsDTO } from"../dto";
import { ProductRepository } from "../repositories";

 const getOrderProductsValues = async (orderProducts: OrderProductsDTO[])=>{

     if(orderProducts) {
          
          const promisses = orderProducts.map(async (p)=>{
               
                    const product = await ProductRepository.findFirst({
                         where: {id: p.productId}
                    });
                        
                    if(product) {
                         const productValue = product?.value;
                         
                         return productValue;
                    }        
          });

          const totalValue = await Promise.all(promisses);
                   
          return totalValue;
     }
}

export default getOrderProductsValues;