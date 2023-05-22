import React, {useState} from 'react';
import styled from 'styled-components';

import Header from '../src/componentes/Header/Header';
import Cover from '../src/Sections/Cover/Cover';
export default function HomePage(){
  const [menuIsVisible, setMenuIsVisible] = useState(true);


  return(
    <div>
      <Header setMenuIsVisible={setMenuIsVisible}></Header>
      <Cover/>
    </div>
  )
}