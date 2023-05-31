import React from "react"

import styled from "styled-components"

const Page = styled.div`
  display:flex;
  flex-direction: column;
`
const Header = styled.header`
  display: flex;  
  margin: 50px;
  
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;  
  margin: 50px;
  border-top: 1px dotted #000;
`
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items:start;  
  border-right: 4px solid black; 
  padding-right: 30px;
  gap:30px;
  height: 400px;
  
  padding-top: 10px;
`
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items:start;  
  height: 400px;
  padding-left: 50px;
`
const Snippet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`
const SnippetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 300px;
  border-right: solid; 
`
const SnippetOrders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  width: 300px;
`
const Sair = styled.a`
  text-decoration: none;
  color: black;
`

export default function Acount (){
  return(
    <Page>
      <Header>
        <Sair href="">Voltar a loja</Sair>
      </Header>
      <Container>
        <Div1>
          <Snippet>
            <img src="icons/user2-50.png"></img>
            <p>Informações</p>
          </Snippet>
          <Snippet>
            <img src="icons/pedidos.png"></img>
            <p>Pedidos</p>
          </Snippet>
          <Sair href="">Sair da conta</Sair>
        </Div1>
        <Div2>          
        <h1>Informações da sua conta</h1>
        <Snippet>
          <SnippetInfo>
            <img src="icons/user-50.png" />
            <h3>Usuario</h3> 
            <p>Email@email.com</p>
          </SnippetInfo>
          <SnippetOrders>
            <h3>Últimos pedidos</h3>
          </SnippetOrders>
        </Snippet>

        </Div2>
      </Container>

    </Page>
  )
}