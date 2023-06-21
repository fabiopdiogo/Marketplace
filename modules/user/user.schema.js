import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().min(1,'O campo "nome" pode ter no máximo 1 caracteres').max(50,'O campo "nome" pode ter no máximo 50 caracteres'), 
  lastName: z.string().min(1,'O campo "senha" pode ter no minimo 1 caracteres').max(50,'O campo "sobrenome" pode ter no máximo {{#limit}} caracteres'),
  email: z.string().email().max(100, 'O campo "email" pode ter no máximo 100 caracteres'),
  date: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/),
  sex: z.string(),
  cpf: z.string().min(11,'O campo "cpf" deve conter 11 caracteres').max(11,'O campo "cpf" deve conter 11 caracteres'),
  password: z.string().min(6, 'O campo "senha" pode ter no minimo 6 caracteres').max(50,'O campo "senha" pode ter no máximo 50 caracteres'),
  number: z.string().min(11, 'O campo "telefone" deve conter 11 numeros').max(11, 'O campo "telefone" deve conter 11 numeros'),
});

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6, 'O campo "senha" pode ter no minimo 6 caracteres').max(50, 'O campo "senha" pode ter no máximo 50 caracteres'),
});
