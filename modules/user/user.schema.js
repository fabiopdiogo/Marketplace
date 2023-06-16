import Joi from "joi";

export const signupSchema = Joi.object({
  firstName: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres'),
  lastName: Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres'),
  email: Joi.string().email({ tlds: {allow: false}} ).required().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteres'),
  date: Joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/).required(),
  sex: Joi.string().required(),
  cpf: Joi.string().required()
    .max(11).message('O campo "cpf" deve conter {{#limit}} caracteres')
    .min(11).message('O campo "cpf" precisa ter ter no mínimo {{#limit}} caracteres'),
  password: Joi.string().required()
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres')
    .min(6).message('O campo "senha" precisa ter ter no mínimo {{#limit}} caracteres'),
  number: Joi.string().required()
    .max(11).message('O campo "telefone" deve conter {{#limit}} caracteres')
    .min(11).message('O campo "telefone" precisa ter ter no mínimo {{#limit}} caracteres'),

  
})

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
  .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres')
  .min(6).message('O campo "senha" precisa ter ter no mínimo {{#limit}} caracteres'),
})