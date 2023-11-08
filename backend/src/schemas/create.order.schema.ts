const joi = require("joi");

const validacao = joi.object({
  clientId: joi
    .string()
    .required()
    .messages({
      "any.required": "É preciso informar o id do cliente",
      "string.empty": "Os campos clientId, productId e productQuantity são obrigatórios."
    }),

  observation: joi
    .string()
    .messages({
      "string.base": "Os campo observation tem que ser preenchido com caracteres."
    }),

  orderProducts: joi.array()
    .required() 
    .items( 
      joi.object({
        productId: joi
          .string()
          .required()
          .messages({
            "any.required": "É preciso informar o id do produto",
            "string.empty": "Os campos clientId, productId e productQuantity são obrigatórios."
          }),

        productQuantity: joi
          .number()
          .required()
          .messages({
            "any.required": "É preciso informar a quantidade do produto.",
            "number.base": "O campo productQuantity tem que ser um número"
          })
      })
    )
});

module.exports = validacao;
