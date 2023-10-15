import Joi from "joi";

const validacao = Joi.object({
  
    name: Joi
        .string()
        .pattern(/^[A-Za-zÀ-ÿ']+([\s][A-Za-zÀ-ÿ']+)*$/)
        .messages({
          "string.empty": "O campo nome não pode ser vazio.",
          "string.pattern.base": "Insira um nome válido. Nomes podem conter apenas letras do alfabeto, espaços e acentos."
        }),

    email: Joi
           .string()
           .email()
           .messages({
               "string.email": "Email inválido.",
               "string.empty": "O campo email não pode ser vazio."
           }),

    cpf: Joi
        .string()
        .pattern(/^[0-9]{11}$/)
        .messages({
          "string.pattern.base": "O cpf precisa ter necessariamente 11 caracteres numéricos.",
          "string.empty": "O campo cpf não pode ser vazio."
        }),

    zipCode: Joi
    .string()
    .pattern(/^[0-9]{8}$/)
    .messages({
     "string.pattern.base": "O cep precisa ter necessariamente 8 caracteres numéricos.",
     "string.empty": "O campo cep não pode ser vazio."
    }),

    street: Joi
    .string()
    .min(1)
    .max(100)
    .messages({
     "string.pattern.base":"A rua pode ter no máximo 100 caracteres.",
     "string.empty": "O campo rua não pode ser vazio.",
     "string.min": "A sigla do estado deve conter exatamente 2 caracteres.",
     "string.max": "A sigla do estado deve conter exatamente 2 caracteres."
    }),

    number: Joi
    .string()
    .pattern(/^[0-9]{1,10}$/)
    .messages({
     "string.pattern.base": "O número de endereço pode ter no máximo 10 caracteres numéricos.",
     "string.empty": "O campo número não pode ser vazio."
    }),

    district: Joi
    .string()
    .min(1)
    .max(100)
    .messages({
     "string.pattern.base": "A cidade pode ter no máximo 100 caracteres.",
     "string.empty": "O campo cidade não pode ser vazio."
    }),

    city: Joi
    .string()
    .min(1)
    .max(100)
    .messages({
     "string.pattern.base":
     "A cidade pode ter no máximo 100 caracteres.",
     "string.empty": "O campo cidade não pode ser vazio."
    }),

    state: Joi
    .string()
    .pattern(/^(AC|AL|AM|AP|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RO|RR|RS|SC|SE|SP|TO)$/i)
    .min(2)
    .max(2)
    .messages({
     "string.pattern.base": "A sigla do estado precisa ser uma das siglas válidas.",
     "string.empty": "O campo estado não pode ser vazio.",
     "string.min": "A sigla do estado deve conter exatamente 2 caracteres.",
     "string.max": "A sigla do estado deve conter exatamente 2 caracteres."
    }),
    
})
.or("name", "email", "cpf", "zipCode", "street", "number", "district", "city", "state")
.messages({
  "object.missing":"É preciso informar pelo menos um campo para atualização."
});

export default validacao;
