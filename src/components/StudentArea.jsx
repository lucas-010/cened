import React from 'react'
import Footer from './Footer'
import StudentAreaHeader from './StudentAreaHeader'
import StudentOptions from './StudentOptions'
import StudentStart from './StudentStart'
import StudentCurrentCourse from './StudentCurrentCourse'
import AllCourses from './AllCourses'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentArea({studentData, API}) {
  let [selected, setSelected] = useState(1);
  let [studentReg, setStudentReg] = useState('');
  let [courseHistory, setCourseHistory] = useState('');
  let keys = Object.keys(studentReg);
  let currentCourse = []
  useEffect(()=>{
    axios.get(`${API}documentos/consultas/matriculas?IdAluno=${studentData.idAluno}`).then(response=>{
      setStudentReg(response.data);
    })
  },[studentData])
  keys.forEach(item=>{if(studentReg[item].statusCurso === 2){currentCourse.push(studentReg[item]);}})
  return (
    <div className='bg-[rgb(229,247,252)] absolute'>
      <StudentAreaHeader/>
      <div className='min-h-screen w-screen flex flex-col pt-24 p-8'>
        <p className='text-center font-bold text-3xl text-blue-800 mb-5 lg-mb-0'>ÁREA DO ALUNO</p>
        <ul className='flex gap-4 flex-wrap'><li>Reeducando: <b>{studentData.nome}</b></li><li>CPF: <b>{studentData.cpf}</b></li></ul>
        <ul className='flex gap-4 flex-wrap'><li>UF: <b>{studentData.penitenciaria.ufDescricao}</b></li><li>Penitenciária: <b>{studentData.penitenciaria.nome}</b></li></ul>
        <div className='mt-5 flex flex-col overflow-auto lg:flex-row bg-white min-w-screen lg:min-w-min lg:border-2 border-gray-400 rounded-lg'>
          <StudentOptions selected={selected} setSelected={setSelected}/>
        {
        selected ===1 ? <StudentStart/>
        :
        selected ===2 ? <StudentCurrentCourse currentCourse={currentCourse[0]}/>
        :
        selected ===3 ? <AllCourses data={studentReg}/>
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
