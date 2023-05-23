import React from "react"

import styled from "styled-components"

const Div = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  background-color: #fff;  
  height: 100vh;  
  gap: 5px;
`
const Img = styled.img`
  width: 50px;
`
const Text = styled.textarea`
  width: 200px;
  resize:none;
  
`
const Button = styled.button`
  width: 100px;
  resize:none;  
  background-color: #111111;
  color:#ffffff;  
  padding: 15px;
  cursor: pointer;

`
const DivButton = styled.div`
  display:flex;
  gap:5px;
`


export default function Login (){

  return(
    <Div>
      <Img src="icons/user-50.png" alt="" />
      <h1>Seja bem vindo(a)!</h1>
      <p>Insira seu E-mail ou CPF/CNPJ</p>
      <Text />
      <DivButton>
        <Button>Criar conta</Button>
        <Button>Entrar</Button>
      </DivButton>
    </Div>
  )

}

