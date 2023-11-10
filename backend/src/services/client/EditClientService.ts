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


class EditClientService {
     async execute({ name, cpf, email }: ClientDTO, { zipCode, street, number, district, city, state }: AddressDTO, id:string) {

          
          const clientRepo = ClientRepository;

          const addressRepo = AddressRepository;

          const client = await clientRepo.findFirst({
               where:{id}
          });

          const address = await addressRepo.findFirst({
               where: {clientId: id}
          });
          

          if(client && address) {

               if(name) client.name = name;

               if(email) client.email = email;

               if(cpf) client.cpf = cpf;

               if(zipCode) address.zipCode = zipCode;

               if(street) address.street = street;

               if(number) address.number = number;

               if(district) address.district = district;

               if(city) address.city = city;

               if(state) address.state = state.toUpperCase();

               const clientUpdated = await clientRepo.update({
                    where: {id},
                    data: client
               });

               const addressUpdated: AddressDTO = await addressRepo.update({
                    where: {id: address.id},
                    data: address
               });

               delete addressUpdated.id;
               delete addressUpdated.clientId;

               const clientAddressUpdated = {
                    ...clientUpdated,
                    ...addressUpdated
               }
              
               
               return clientAddressUpdated;
          }
     }
}

export default EditClientService;