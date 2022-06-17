import React from 'react'
import loginIMG from '../images/loginIMG.jpeg'
import { MdAccountBox, MdPersonAddAlt1 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { ImEnter } from "react-icons/im";
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputMask from 'react-input-mask';

export default function Box() {
  let ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>: <>{children}</>;
  let [valueCpf, setValueCpf] = useState(''),
  [valueSenha, setValueSenha] = useState(''),
  [cpfApi, setCpfApi] = useState('');
  function cpfFormat(cpf){
    setCpfApi(cpf);
		cpf = cpf.replace(/[^\d]/g, "");
		setValueCpf(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
	}
  let [studentData, setStudentData] = useState();
  let API = process.env.REACT_APP_API_KEY,
  [loginVerify, setLoginVerify] = useState(false);
  axios.get(`${API}/alunos?Cpf=${cpfApi}`).then(response=>{
    setStudentData(response.data.data[0]);
    if(studentData.cpf === cpfApi && studentData.senha === valueSenha){
      setLoginVerify(true);}
      else{
        setLoginVerify(false);}
      })
  function submitForm(e){
    if(studentData.cpf === cpfApi && studentData.senha !== valueSenha){
      alert('Senha incorreta!')
    }
    if(loginVerify){
      setTimeout(()=> alert(`Logado com sucesso!`),300)
    }
    else{
      alert('Itens incorretos!')
    }
  }
  return (
    <div className='flex flex-col w-screen'>
      <div className='flex flex-col items-center self-center mt-10 lg:w-1/2'> 
        <img className='lg:w-4/12 w-1/2 rounded-md mb-10' src={loginIMG} alt=''/>
        <form className='flex flex-col p-5 bg-[#EBECF0] lg:w-1/2 items-center text-xl'>
        <div className='w-5/6 flex items-center bg-white mb-2'><MdAccountBox/><input placeholder='CPF' type='text' id='cpf-form' onChange={(e)=> cpfFormat(e.target.value)} value={valueCpf} maxLength={14} className='p-2 w-full'></input></div>
        <div className='w-5/6 flex items-center bg-white mb-2'><RiLockPasswordFill/><input placeholder='Senha' onChange={(e)=> setValueSenha(e.target.value)} maxLength={30} id='password' type='password' className='p-2 w-full'></input></div>
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
