import React from 'react'
import loginIMG from '../images/loginIMG.jpeg'
import { MdAccountBox, MdPersonAddAlt1 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState, useEffect, createContext } from 'react';
import { ImEnter } from "react-icons/im";
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { TextField } from '@mui/material';


export default function Box({loginVerify, setLoginVerify}) {
  let ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>: <>{children}</>;
  let [valueCpf, setValueCpf] = useState(''),
  [valueSenha, setValueSenha] = useState(''),
  cpfApi = valueCpf.replaceAll('.','').replaceAll('-',''),
  [missPass, setMissPass] = useState(false);
  let [studentData, setStudentData] = useState({"cpf":'', "senha":''});
  let API = process.env.REACT_APP_API_KEY;
  const verificationLogin = createContext(loginVerify);
  useEffect(()=>{
    axios.get(`${API}/alunos?Cpf=${cpfApi}`).then(response=>{
      if(response.data.data.length ===1){
      setStudentData(response.data.data[0])}
      if(cpfApi === studentData.cpf && valueSenha === studentData.senha ){
        setLoginVerify(true);}
        else{
          setLoginVerify(false);}
        })
  },[cpfApi, valueSenha])
  function submitForm(e){
    if(loginVerify){
      setTimeout(()=> alert(`Logado com sucesso!`),300);}
    else if(cpfApi === studentData.cpf && valueSenha !== studentData.senha){ 
      alert('Senha incorreta!');
    }
    else{
      alert('Itens incorretos!');
    }
  }
  return (
    <div className='flex flex-col w-screen'>
      <div className='flex flex-col items-center self-center mt-10 lg:w-1/2'> 
        <img className='lg:w-4/12 w-1/2 rounded-md mb-10' src={loginIMG} alt=''/>
        <form className='flex flex-col p-5 bg-[#EBECF0] lg:w-1/2 items-center text-xl'>
        <div className='w-5/6 flex items-center bg-white rounded-lg mb-2'><MdAccountBox/>
        <InputMask mask="999.999.999-99" maskChar={null} onChange={(e)=> setValueCpf(e.target.value)} value={valueCpf} id='cpfAluno' className='p-2 w-full' >{() =><TextField label='CPF' className='w-full'/>}</InputMask>
        </div>
        <div className='w-5/6 flex items-center bg-white rounded-lg mb-2'><RiLockPasswordFill/>
        <TextField label='Senha' {...missPass ? 'error' : ''} onChange={(e)=> setValueSenha(e.target.value)} id='password' type='password' className='w-full'></TextField></div>
        <ConditionalLink to="/studentarea" condition={loginVerify} >
        <button className='bg-blue-900 text-white mb-4 items-center justify-center rounded-md p-2 xl:w-72 w-52 flex' type='button' onClick={()=> submitForm()}><ImEnter/>&nbsp; Acessar</button>
        </ConditionalLink>
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

