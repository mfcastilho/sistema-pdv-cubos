export interface EmailOrderConfirmationDTO{
     name: string;
     email: string;
     cpf?: string;
     orderNumber?: string;
     observation: string | undefined; 
     totalValue: number | undefined; 
     products: object[];   
}