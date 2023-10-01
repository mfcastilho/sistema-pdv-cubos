import { prismaClient } from "../config/database/prismaClient";

 const User = prismaClient.user;

 export default User;