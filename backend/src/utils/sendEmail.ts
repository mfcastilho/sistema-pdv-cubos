import { EmailOrderConfirmationDTO } from './../dto';

import { htmlCompilator } from "../utils";

const sgMail = require('@sendgrid/mail');

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendEmail = async ({name, email, orderNumber, observation, totalValue, products}: EmailOrderConfirmationDTO) => {

     const html = await htmlCompilator({name, email, orderNumber, observation, totalValue, products});

     const msg = {
          to: [email],
          from: {
               name: "SomosDev Tecnologia",
               email: process.env.FROM_EMAIL
          }, 
          subject: 'Confirmação do Pedido',
          text: 'Sucesso na realização do Pedido!',
          html,
                    
          // templateId: process.env.TEMPLATE_ID,
          // dynamicTemplateData: {
          //      name: name
          // }
     };

     try {
          await sgMail.send(msg);
     } catch (error: any) {
          console.error(error);
          if (error.response) {
               console.error(error.response.body)
          }
     }
}

export default sendEmail;