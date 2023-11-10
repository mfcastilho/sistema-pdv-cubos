import { ClientRepository, AddressRepository } from "../../repositories";

interface ClientDTO {
     name: string;
     email: string;
     cpf: string;  
}

interface AddressDTO {
     id?: string
     zipCode: string;
     street: string;
     number: string;
     district: string;
     city: string;
     state: string;
     clientId?: string;
}


class CreateClientService {
     async execute({ name, cpf, email }: ClientDTO, { zipCode, street, number, district, city, state }: AddressDTO) {

          const clientRepo = ClientRepository;

          const addressRepo = AddressRepository;

          const clientCreated = await clientRepo.create({
               data : { name, cpf, email }
          });

          const addressData = { zipCode, street, number, district, city, state, clientId: clientCreated.id };

          addressData.zipCode = addressData.zipCode ?? "N/A";
          addressData.street = addressData.street ?? "N/A";
          addressData.number = addressData.number ?? "N/A";
          addressData.district = addressData.district ?? "N/A";
          addressData.city = addressData.city ?? "N/A";
          addressData.state = addressData.state ?? "xx";
          
          addressData.state = addressData.state.toUpperCase();


          const addressCreated: AddressDTO | null = await addressRepo.create({
               data:addressData
          });

          delete addressCreated.id;
          delete addressCreated.clientId;

          const client = {
               ...clientCreated,
               ...addressCreated
          }

          return client;
     }
}

export default CreateClientService;