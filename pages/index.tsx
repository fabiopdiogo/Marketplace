import React, {useState} from 'react';
import styled from 'styled-components';

import Header from '../src/componentes/Header/Header';
import Cover from '../src/Sections/Cover/Cover';
import ItemCard from '../src/componentes/ItemsCard/ItemsCard';

export default function HomePage(){
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const Page = styled.div`
    width: 100%;
    overflow-x: hidden;
  `

  const Img = styled.img`
    width: 100vw;
  `

  const ItemsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items:center;
    flex-wrap: wrap;
    padding-left: 70px;   
  `

  return(
    <Page>
      <Header setMenuIsVisible={setMenuIsVisible}></Header>
      <Cover/>
      <Img src="covers/accolades.png" />      
      <ItemsSection>
        <ItemCard src="items/tenis1.jpg"/>
        <ItemCard src="items/tenis2.jpg"/>
        <ItemCard src="items/tenis3.jpg"/>
        <ItemCard src="items/tenis4.jpg"/>
        <ItemCard src="items/tenis5.jpg"/>
        <ItemCard src="items/tenis6.jpg"/>
        <ItemCard src="items/tenis7.jpg"/>
      </ItemsSection>


    </Page>
  )
}