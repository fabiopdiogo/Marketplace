import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick: () => void;
};

import { useState } from 'react'
const StyledButton = styled.button<ButtonProps>`

`
export default function HomePage(){

  const [value,setValue] = useState(0);

  const toggle = () => {
    setValue(value+1)
  }
  return(
    <div>
      <StyledButton onClick={toggle}></StyledButton>
      <p>{value}</p>
    </div>
  )
}