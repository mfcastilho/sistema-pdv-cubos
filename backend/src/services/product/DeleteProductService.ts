import { ProductRepository, OrderProductsRepository } from "../../repositories";
import { deleteFile } from "../../utils";

class DeleteProductService {
     async execute(id: string) {

          const repo = ProductRepository;
          const orderProductRepo = OrderProductsRepository;

          const productExistsAtSomeOrder = await orderProductRepo.findUnique({
               where: {id}
          });

          if(productExistsAtSomeOrder) return new Error("Um produto listado em um pedido não pode ser excluído.");

          const product = await repo.findUnique({
               where: {id}
          });

          if(product?.productImage) {
               const fileName = product.productImage.split("/").pop();
               const filePath = `produtos/${id}/${fileName}`;
               await deleteFile(filePath);
          }

          await repo.delete({
               where: {id}
          });

          return product;
     }
}

export default DeleteProductService;