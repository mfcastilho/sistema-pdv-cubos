import { prismaClient } from "../config/database/prismaClient";

const AddressRepository = prismaClient.address;

export default AddressRepository;