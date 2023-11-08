import { prismaClient } from "../config/database/prismaClient";

const OrderProductsRepository = prismaClient.orderProducts;

export default OrderProductsRepository;