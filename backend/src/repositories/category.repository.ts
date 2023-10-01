import { prismaClient } from "../config/database/prismaClient";

const CategoryRepository = prismaClient.category;

export default CategoryRepository;