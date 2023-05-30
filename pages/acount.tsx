import React from "react"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items:start;  
  border-right: 1px solid black; 
  padding-right: 30px;
  gap:10px;
`
const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Snippet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Sair = styled.a`
  text-decoration: none;
  color: black;
`
const Divisa = styled.div`
`
export default function Acount (){
  return(
    <div>
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
        <Divisa/>
        <Div2>
          
        </Div2>
      </Container>

    </div>
  )
}