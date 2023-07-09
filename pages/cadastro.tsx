import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from "styled-components";

import Input from "../src/componentes/inputs/Input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px;
`

function SignUp(){

  return(
    <Form >
      <Input label="Nome" name="nome" error={""} />
      <Input label="Sobrenome" name="sobrenome" error={""} />
      <Input label="Email" name="email" error={""} />
      <Input label="Data" name="data" error={""} />
      <Input label="Sexo" name="sexo" error={""} />
      <Input label="CPF" name="cpf" error={""} />
      <Input label="Telefone" name="telefone" error={""} />
      <Input label="Senha" name="senha" error={""} />
      <Input label="Nome" name="nome" error={""} />
      <button type="submit" />
     </Form>
  )
  
}

export default SignUp;


