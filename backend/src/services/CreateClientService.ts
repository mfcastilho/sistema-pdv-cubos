import { ClientRepository, AddressRepository } from "../repositories";

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
}


class CreateClientService {
     async execute({ name, cpf, email }: ClientDTO, { zipCode, street, number, district, city, state }: AddressDTO) {

          try {
               
               const clientRepo = ClientRepository;

               const addressRepo = AddressRepository;
     
               const clientCreated = await clientRepo.create({
                    data : { name, cpf, email }
               });
     
               const addressCreated: AddressDTO | null = await addressRepo.create({
                    data:{ 
                         zipCode, 
                         street, 
                         number, 
                         district, 
                         city, 
                         state, 
                         clientId: clientCreated.id 
                    }
               });

               delete addressCreated.id;

               const client = {
                    ...clientCreated,
                    ...addressCreated
               }

               return client;
     
          } catch (error) {
               throw error;
          }

     }
}

export default CreateClientService;