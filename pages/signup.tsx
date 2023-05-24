import React from "react";
import { useForm } from "react-hook-form";

import { joiResolver } from '@hookform/resolvers/joi'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Form = styled.form`
  display: grid;
  grid-template-areas: 
    "nome    sobrenome"
    "email   email"
    "data    sexo"
    "cpf     telefone"
    "senha   senha"
    "button  button"
  ;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 5px;
  padding: 5px;
  height: auto;
`

const Nome = styled.input`
  grid-area: nome;
  padding: 10px;
`
const Sobrenome = styled.input`
  grid-area:sobrenome;
  padding: 10px;
`

const Email = styled.input`
  grid-area:email ;
  padding: 10px;
`

const Data = styled.input`
  grid-area:data ;
  padding: 10px;
`

const Sexo = styled.select`
  grid-area:sexo ;
  padding: 10px;
`

const CPF = styled.input`
  grid-area:cpf ;
  padding: 10px;
`

const Telefone = styled.input`
  grid-area:telefone ;
  padding: 10px;
`
const Senha = styled.input`
  grid-area:senha ;
  padding: 10px;
`
const Button = styled.button`
  grid-area:button ;
  padding: 10px;
`


function signup(){
  return(
    <Container>
      <Form action="">
      <Nome type="text" placeholder="Nome"/>
      <Sobrenome type="text" placeholder="Sobrenome"/>
      <Email type="text" placeholder="Email"/>
      <Data type="text" placeholder="Data"/>
      <Sexo placeholder="Sexo"/>
      <CPF placeholder="Cpf"/>
      <Telefone placeholder="Telefone"/>
      <Senha placeholder="Senha"/>
      <Button>Cadastrar</Button>
      </Form>  
    </Container>
  )
  
}

export default signup