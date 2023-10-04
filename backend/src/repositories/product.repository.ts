import { prismaClient } from "../config/database/prismaClient";

const ProductRepository = prismaClient.product;

export default ProductRepository;