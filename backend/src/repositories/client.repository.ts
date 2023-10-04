import { prismaClient } from "../config/database/prismaClient";

const ClientRepository = prismaClient.client;

export default ClientRepository;