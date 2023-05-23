import React, {useState} from 'react';
import styled from 'styled-components';

import Header from '../src/componentes/Header/Header';
import Cover from '../src/Sections/Cover/Cover';

export default function HomePage(){
  const [menuIsVisible, setMenuIsVisible] = useState(true);

  const Img = styled.img`
    width: 100vw;
  `

  return(
    <div>
      <Header setMenuIsVisible={setMenuIsVisible}></Header>
      <Cover/>
      <Img src="covers/accolades.png"></Img>
    </div>
  )
}