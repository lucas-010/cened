import React from 'react'
import Footer from '../components/Footer'
import RegInstructions from '../components/RegInstructions'
import RegisterForm from '../components/RegisterForm'

export default function Register() {
  return (
    <div className='absolute w-screen min-h-screen flex flex-col mt-24 lg:mt-52'>
      <header className='text-center'><h1 className='lg:text-5xl text-3xl font-bold'>
        CADASTRO DE ALUNO / INTERNO
        </h1>
        <h2 className='text-xl font-bold'>Matrícula do Reeducando. Contrato de Prestação de Serviços Educacionais</h2>
        </header>
      <RegInstructions/>
      <RegisterForm/>
      <Footer/>
    </div>
  )
}