import React from 'react'
import loginIMG from '../images/loginIMG.jpeg'
import { MdAccountBox, MdPersonAddAlt1 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { ImEnter } from "react-icons/im";
import { Link } from 'react-router-dom';

export default function Box() {
  let [valueCpf, setValueCpf] = useState('')
  function cpfFormat(cpf){
		cpf = cpf.replace(/[^\d]/g, "");
		setValueCpf(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
	}
  function submitForm(e){
		if(valueCpf !== ''){
			alert(`CPF: ${valueCpf}`)
		}else{
			alert('Itens Incompletos')
		}
	}
  return (
    <div className='flex flex-col w-screen h-screen'>
      <div className='flex flex-col items-center self-center mt-10 lg:w-1/2'> 
        <img className='lg:w-4/12 w-1/2 rounded-md mb-10' src={loginIMG} alt=''/>
        <form className='flex flex-col p-5 bg-[#EBECF0] lg:w-1/2 items-center text-xl'>
        <div className='w-5/6 flex items-center bg-white mb-2'><MdAccountBox/><input placeholder='CPF' type='text' id='cpf-form' onChange={(e)=> cpfFormat(e.target.value)} value={valueCpf} maxLength={14} className='p-2 w-full'></input></div>
        <div className='w-5/6 flex items-center bg-white mb-2'><RiLockPasswordFill/><input placeholder='Senha' maxLength={30} id='password' type='password' className='p-2 w-full'></input></div>
        <button className='bg-blue-900 text-white mb-4 items-center justify-center rounded-md p-2 w-4/6 flex' type='button' onClick={()=> submitForm()}><ImEnter/>&nbsp; Acessar</button>
        <Link to='/register' className='mb-4 text-base w-4/6 bg-white text-black items-center justify-center rounded-md p-1 flex'>
        <button type='button' className='flex'><MdPersonAddAlt1/>&nbsp; Primeiro Acesso</button>
        </Link>
        <Link to='/register' className='mb-4 text-base w-4/6 bg-white text-black items-center justify-center rounded-md p-1 flex'><button type='button' className='flex'><MdPersonAddAlt1/>&nbsp; Esqueci minha senha</button>
        </Link>
        </form>
      </div>
    </div>
  )
}
