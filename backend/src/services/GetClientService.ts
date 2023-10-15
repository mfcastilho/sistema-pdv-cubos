import { ClientRepository } from "../repositories";


class GetClientService {
     async execute(id:string) {

          const client = await ClientRepository.findFirst({
               where: { id },
               include: { Address: true }
          });

          return client;
     }
}

export default GetClientService;