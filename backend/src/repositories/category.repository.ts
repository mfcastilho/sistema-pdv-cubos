import { prismaClient } from "../config/database/prismaClient";

const Category = prismaClient.category;

export default Category;