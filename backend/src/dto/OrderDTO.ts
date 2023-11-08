import { OrderProductsDTO } from "../dto";

interface OrderDTO {
     clientId: string;
     observation: string;
     orderProducts: OrderProductsDTO[];
}

export default OrderDTO;