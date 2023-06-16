import React from "react";
import { useState } from "react";
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

const Sexo = styled.div`  
  width: 100%;
  grid-area:sexo ;  
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
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`
const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid black;
  background-color: #F5F5F5;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;  


  &:focus {
    outline: none
  }
`

function signup(){

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [data,setData] = useState('');
  const [cpf,setCPF] = useState('');
  const [sex,setSex] = useState('');
  const [number,setNumber] = useState('');
  const [password,setPassword] = useState('');

  const {register,handleSubmit, formState: {errors}} = useForm({
    resolver: joiResolver(signupSchema)
  })

  console.log(errors)

  function handleForm(event){
    console.log({
      firstName,
      lastName,
      email,
      data,
      cpf,
      sex,
      password,
      number
    })
  }

  return(
    <Container>      
      <h2>Insira seus dados</h2>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Input name="nome" label="Nome" onChange = {(event) => setFirstName((event.target.value))} />
        <Input name="sobrenome" label="Sobrenome" onChange = {(event) => setLastName(event.target.value)}/>
        <Input name="email" label="E-mail" onChange = {(event) => setEmail(event.target.value)}/>
        <Input name="data" label="Data" onChange = {(event) => setData(event.target.value)}/>
        <Sexo>
          <StyledLabel>Sexo</StyledLabel>
          <StyledSelect name="sexo"  placeholder="Sexo" onChange = {(event) =>setSex(event.target.value)}>
            <option value="vazio">Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </StyledSelect>
        </Sexo>
        <Input name="cpf" label="CPF" onChange = {(event) =>setCPF(event.target.value)}/>
        <Input name="telefone" label="Telefone" onChange = {(event) =>setNumber(event.target.value)}/>
        <Input name="senha" label="Senha" onChange = {(event) =>setPassword(event.target.value)}/>
        <Button onClick={handleForm} >Cadastrar</Button>
      </Form>  
    </Container>
  )
  
}

export default signup