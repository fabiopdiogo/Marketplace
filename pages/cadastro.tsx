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
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  })
  .required();


function SignUp(){

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  //const { errors, isSubmitting } = formState;
  //console.log('errors', errors);
  
  const handleSubmitData =  (data: any) => {
    console.log('submit',data);
  }

  return(
    <form onSubmit={handleSubmit(handleSubmitData)}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <input type="submit" />
    </form>
  )
  
}

export default SignUp;



