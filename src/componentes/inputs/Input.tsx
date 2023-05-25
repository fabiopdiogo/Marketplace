import styled from 'styled-components'
import { useController } from 'react-hook-form'

const InputContainer = styled.div`
  width: 100%;
`
const StyledLabel = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid black;
  background-color: #F5F5F5;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;  
  grid-area: nome;


  &:focus {
    outline: none
  }
`

const ErrorLabel = styled.span`
  color: ${props => props.theme.error};
  font-weight: bold;
  font-size: 14px;
`
const errorMessage = {
  'string.empty': 'Este campo é obrigatótio.',
  'string.email': 'Por favor, digite um e-mail válido.',
  'string.min': 'A senha deve ter no minimo 6 caracteres.',
  'duplicated': 'Já existe uma conta criada com esse valor.'
}

interface Props{
  name: string,
  control: string,
  label: string,
  defaultValue: string
}

const Input = ({label,name, control, defaultValue = ''}) => {
  const{
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue})
  return (
    <InputContainer>
      <StyledInput placeholder={label} value={value} onChange={onChange}/>
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
}

export default Input