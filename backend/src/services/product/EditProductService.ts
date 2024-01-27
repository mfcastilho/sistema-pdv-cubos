import { ProductRepository } from "../../repositories";
import { convertCurrentToCents, deleteFile, uploadFile } from "../../utils";

interface ProductDTO {
     id: string
     description: string;
     stockQuantity: number;
     value: number;
     categoryId: string
     productImage: Express.Multer.File | null;
}

class EditProductService {
     async execute({ id, description, stockQuantity, value, categoryId, productImage }: ProductDTO) {
          const repo = ProductRepository;

          const product = await repo.findUnique({
               where: {id}
          });

          if(product) {

               if(description) product.description = description;

               if(stockQuantity) product.stockQuantity = Number(stockQuantity);

               if(value) product.value = convertCurrentToCents(value);

               if(categoryId) product.categoryId = categoryId;

               if(productImage) {

                    if(product?.productImage) {
                         const fileName = product.productImage.split("/").pop();
                         const filePath = `produtos/${id}/${fileName}`;
                         await deleteFile(filePath);
                    }

                    const dir = `produtos/${id}`
                    const url = await uploadFile(dir, productImage);

                    product.productImage = url;
               }

               const productUpdated = await repo.update({
                    where:{id},
                    data: product
               });

               return productUpdated;
          }
     }
}

export default EditProductService;