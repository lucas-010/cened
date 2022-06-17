import React from 'react'
import Footer from '../components/Footer'
import StudentAreaHeader from '../components/StudentAreaHeader'
import StudentOptions from '../components/StudentOptions'
import StudentStart from '../components/StudentStart'
import StudentCurrentCourse from '../components/StudentCurrentCourse'
import { useState } from 'react'


export default function StudentArea() {
  let [selected, setSelected] = useState(1);
  return (
    <div className='bg-cyan-200'>
      <StudentAreaHeader/>
      <div className='min-h-screen w-screen flex flex-col mt-20 p-4'>
        <div className='mt-10 flex flex-col overflow-auto lg:flex-row bg-cyan-400 min-w-screen lg:min-w-min lg:border-2 border-gray-600 rounded-lg'>
          <StudentOptions selected={selected} setSelected={setSelected}/>
        {
        selected ===1 ? <StudentStart/>
        :
        selected ===2 ? <StudentCurrentCourse/>
        :
        selected ===3 ? <div className='text-center w-5/6'>Todos os cursos</div>
        :
        selected ===4 ? <div className='text-center w-5/6'>Comprar novo curso</div>
        :
        selected ===5 ? <div className='text-center w-5/6'>Solicitar certificado</div>
        :
        selected ===6 ? <div className='text-center w-5/6'>Boletos</div>
        :
        selected ===7 ? <div className='text-center w-5/6'>Fale conosco</div>
        :
        selected ===8 ? <div className='text-center w-5/6'>Alterar senha</div>
        :<div className='text-center w-5/6'>Atualizar cadastro</div>}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
