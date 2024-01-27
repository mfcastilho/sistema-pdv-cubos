
interface ProductDTO {
     id: string
     description:string;
     stockQuantity:number;
     value:number;
     categoryId:string
     productImage: string | null;
}

export default ProductDTO;