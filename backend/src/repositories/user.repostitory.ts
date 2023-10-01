import { prismaClient } from "../config/database/prismaClient";

 const UserRepository = prismaClient.user;

 export default UserRepository;