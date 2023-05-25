import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi'
import styled from "styled-components";
import Input from "../src/componentes/inputs/Input";

import { signupSchema } from '../modules/user/user.schema'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  
  grid-template-areas: 
    "nome    sobrenome"
    "email   email"
    "data    sexo"
    "cpf     telefone"
    "senha   senha"
    "button  button"
  ;
  grid-gap: 5px;
  padding: 5px;
  height: auto;
`

const Nome = styled.input`
  grid-area: nome;
  padding: 10px;
  border: 1px solid grey;
`
const Sobrenome = styled.input`
  grid-area:sobrenome;
  padding: 10px;
  border: 1px solid grey;
`

const Email = styled.input`
  grid-area:email ;
  padding: 10px;
  border: 1px solid grey;
`

const Data = styled.input`
  grid-area:data ;
  padding: 10px;
  border: 1px solid grey;
`

const Sexo = styled.select`
  grid-area:sexo ;
  padding: 10px;
  border: 1px solid grey;
`

const CPF = styled.input`
  grid-area:cpf ;
  padding: 10px;
  border: 1px solid grey;
`

const Telefone = styled.input`
  grid-area:telefone ;
  padding: 10px;
  border: 1px solid grey;
`
const Senha = styled.input`
  grid-area:senha ;
  padding: 10px;
  border: 1px solid grey;
`
const Button = styled.button`
  grid-area:button ;
  padding: 10px;
  grid-column: 2;
  background-color: #111;
  color:#fff;
  border: none;
  border-radius:5px;
`

function signup(){
  const {control,handleSubmit}=useForm({
    resolver: joiResolver(signupSchema)
  })
  return(
    <Container>
      <h2>Insira seus dados</h2>
      <Form action="">
        <Input name="firstName" label="Nome" control={control}/>
        <Sobrenome name="lastName" type="text" placeholder="Sobrenome"/>
        <Email name="email" type="text" placeholder="Email"/>
        <Data name="data" type="text" placeholder="Data"/>
        <Sexo name="user" placeholder="Sexo" defaultValue="vazio">
          <option value="vazio">Selecione...</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </Sexo>
        <CPF name="cpf" placeholder="Cpf"/>
        <Telefone name="telefone" placeholder="Telefone"/>
        <Senha name="email" placeholder="Senha"/>
        <Button>Cadastrar</Button>
      </Form>  
    </Container>
  )
  
}

export default signup