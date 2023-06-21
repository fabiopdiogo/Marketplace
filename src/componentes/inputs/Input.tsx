import styled from 'styled-components'
import { Control, FieldValues, useController } from 'react-hook-form'

const InputContainer = styled.div<ContainerProps>`
  width: 100%;
  grid-area: ${props =>props.grid};
`

const StyledInput = styled.input`
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
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`

const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`
const errorMessage = {
  'string.empty': 'Este campo é obrigatório.',
  'string.email': 'Por favor, digite um e-mail válido.',
  'string.min': 'A senha deve ter no minimo 6 caracteres.',
  'duplicated': 'Já existe uma conta criada com esse valor.'
}

interface Props{
  name: string,
  control?: Control<FieldValues>,
  label?: string,
  defaultValue?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  helperText?:string;
  error:string
}

type ContainerProps ={
  grid: string;
}

const Input =({label,name,helperText,error} : Props) => {

  return (
    <InputContainer grid={name}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={label} />
    </InputContainer>
  )
}

export default Input