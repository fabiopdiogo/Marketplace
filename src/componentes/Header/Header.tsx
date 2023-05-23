import React from 'react';
import styled from 'styled-components';
import styles from "./Header.module.css";


interface Props{
  setMenuIsVisible?(setMenuIsVisible: boolean): void;
}

const Header = ({setMenuIsVisible}:Props) => {
  return (
    <>      
      <header className={styles.header}>
        <h1>CALÇADOS</h1>
          
        <div className={styles.options}>
          <a>CICLISMO</a>
          <a>FEMININO</a>
          <a>MASCULINO</a>
          <a>CALÇADOS</a>
          <a>ACESSÓRIOS</a>
          <a>FUTEBOL</a>
          <a>ESPORTES</a>
          <a>ROUPAS</a>
          <a>MARCAS</a>
          <a>OUTLET</a>
        </div>   

        <div className={styles.icons}>
          <img src="icons/search.png" alt="" />
          <img src="icons/carrinho.png" alt="" />
          <img src="icons/user-50.png" alt="" />   
        </div>
        
      </header>
    </>
  )
}

export default Header   