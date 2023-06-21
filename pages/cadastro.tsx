import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const asyncFunction = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(() =>{
      resolve('Hello')
    }, 3000)
  });

  return myPromise;
}

const schema = yup
  .object()
  .shape({
    firstName: yup.string().min(1,'Campo obrigatório').required(), 
    lastName: yup.string().required('Campo obrigatório').required()
  })
  .required();


function SignUp(){

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode:'all',
    defaultValues:{
      firstName: "",
      lastName: ""
    }
  });
  const { errors, isSubmitting } = formState;
  console.log('errors', errors);
  
  const handleSubmitData =  async (data: any) => {
    console.log('submit',data);
    await asyncFunction()
  }

  return(
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <input {...register('firstName')} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <input {...register('lastName')} />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <button type="submit">{isSubmitting ? 'Enviando...': 'Enviar'}</button>
    </form>
  )
  
}

export default SignUp;


