import React from 'react'
import loginIMG from '../images/loginIMG.jpeg'
import { MdAccountBox, MdPersonAddAlt1 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState, useEffect, createContext } from 'react';
import { ImEnter } from "react-icons/im";
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { TextField, Alert } from '@mui/material';
import { Collapse } from '@material-ui/core';


export default function Box({valueCpf, cpfApi, studentData, valueSenha, setValueSenha, setValueCpf, loginVerify}){
  let [alert, setAlert] = useState(false);
  let [alertId, setAlertId] = useState(0);
  let ConditionalLink = ({ children, to, condition }) => (!!condition && to)
  ? <Link to={to}>{children}</Link>
  : <>{children}</>;
  function submitForm(e){
    if(loginVerify){
      sessionStorage.setItem('verified', JSON.stringify(true));
      window.location=`areadoaluno`;
    }
    else if(valueCpf === studentData.cpf && valueSenha !== studentData.senha){ 
      setAlert(true);setAlertId(1);
    }
    else if(cpfApi === studentData.cpf && valueSenha !== studentData.senha){ 
      setAlert(true);setAlertId(1);
    }
    else{
      setAlert(true);setAlertId(2);
    }
  }
  return (
    <div className='flex flex-col w-screen'>
      <div className='flex flex-col items-center self-center mt-10 lg:w-1/2'> 
        <img className='lg:w-4/12 w-1/2 rounded-md mb-10' src={loginIMG} alt=''/>
        <Collapse in={alertId===1?alert:false}>
        <Alert className='lg:w-64' severity='error' onClose={() => {setAlert(false)}}>Senha incorreta!</Alert>
        </Collapse>
        <Collapse in={alertId===2?alert:false}>
        <Alert className='lg:w-64' severity='warning' onClose={() => {setAlert(false)}}>Itens incorretos!</Alert>
        </Collapse>
        <form className='flex flex-col p-5 bg-[#EBECF0] lg:w-1/2 items-center text-xl'>
        <div className='w-5/6 flex items-center bg-white rounded-lg mb-2'><MdAccountBox/>
        <InputMask mask="999.999.999-99" maskChar={null} onChange={(e)=> setValueCpf(e.target.value)} value={valueCpf} id='cpfAluno' className='p-2 w-full' >{() =><TextField label='CPF' className='w-full'/>}</InputMask>
        </div>
        <div className='w-5/6 flex items-center bg-white rounded-lg mb-2'><RiLockPasswordFill/>
        <TextField label='Senha' onChange={(e)=> setValueSenha(e.target.value)} id='password' type='password' className='w-full'></TextField></div>
        <button className='bg-blue-900 text-white mb-4 items-center justify-center rounded-md p-2 xl:w-72 w-52 flex' type='button' onClick={()=> submitForm()}><ImEnter/>&nbsp; Acessar</button>
        <Link to='/register' className='mb-4 text-base xl:w-72 w-52 bg-white text-black items-center justify-center rounded-md p-1 flex'>
        <button type='button' className='flex'><MdPersonAddAlt1/>&nbsp; Primeiro Acesso</button>
        </Link>
        <Link to='/register' className='mb-4 text-base xl:w-72 w-52 bg-white text-black items-center justify-center rounded-md p-1 flex'><button type='button' className='flex'><MdPersonAddAlt1/>&nbsp; Esqueci minha senha</button>
        </Link>
        </form>
      </div>
    </div>
  )
}

