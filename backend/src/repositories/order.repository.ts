import { prismaClient } from "../config/database/prismaClient";

const OrderRepository = prismaClient.order;

export default OrderRepository;