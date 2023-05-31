import connect from 'next-connect';
import Joi from 'joi';
import validate from '../../lib/middlewares/validation'
import { signupUser } from "../../modules/user/user.service";

const postSchema =  Joi.object({
  nome: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres'),
  sobrenome: Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres'),
  email: Joi.string().email({ tlds: {allow: false}} ).required().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteres'),
  data: Joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/).required(),
  cpf: Joi.string().required()
    .max(11).message('O campo "cpf" deve conter {{#limit}} caracteres')
    .min(11).message('O campo "cpf" precisa ter ter no mínimo {{#limit}} caracteres'),
  senha: Joi.string().required()
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres')
    .min(6).message('O campo "senha" precisa ter ter no mínimo {{#limit}} caracteres'),
  telefone: Joi.string().required()
    .max(11).message('O campo "telefone" deve conter {{#limit}} caracteres')
    .min(11).message('O campo "telefone" precisa ter ter no mínimo {{#limit}} caracteres')  
})

  const signup = connect()
    .post(validate({body: postSchema}),(req, res) => {
      signupUser(req.body)
      res.status(200).json({teste: "okokokok"})
  })

export default signup;