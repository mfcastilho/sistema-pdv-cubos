import { ClientRepository } from "../../repositories";


class GetAllClientsService {
     async execute() {

          const clients = await ClientRepository.findMany({
               include: {
                    Address: true
               }
          });

          return clients;       
     }
}

export default GetAllClientsService;