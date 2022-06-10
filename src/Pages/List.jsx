import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import CourseBox from '../components/CourseBox'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'
import CoursesSelect from '../components/CoursesSelect'
import Footer from '../components/Footer'

export default function List() {
  const abbres = [
    {
      text: 'Acre',
      abbre: 'ac'
    },

    {
      text: 'Alagoas',
      abbre: 'al'
    },

    {
      text: 'Amazonas',
      abbre: 'am'
    },

    {
      text: 'Amapá',
      abbre: 'ap'
    },

    {
      text: 'Bahia',
      abbre: 'ba'
    },

    {
      text: 'Ceará',
      abbre: 'ce'
    },

    {
      text: 'Distrito Federal',
      abbre: 'df'
    },

    {
      text: 'Espírito Santo',
      abbre: 'es'
    },

    {
      text: 'Goiás',
      abbre: 'go'
    },

    {
      text: 'Maranhão',
      abbre: 'ma'
    },

    {
      text: 'Mato Grosso do Sul',
      abbre: 'ms'
    },
    
    {
      text: 'Mato Grosso',
      abbre: 'mt'
    },

    {
      text: 'Minas Gerais',
      abbre: 'mg'
    },

    {
      text: 'Pará',
      abbre: 'pa'
    },

    {
      text: 'Paraíba',
      abbre: 'pb'
    },

    {
      text: 'Paraná',
      abbre: 'pr'
    },
    {
      text: 'Pernambuco',
      abbre: 'pe'
    },

    {
      text: 'Piauí',
      abbre: 'pi'
    },

    {
      text: 'Rio de Janeiro',
      abbre: 'rj'
    },

    {
      text: 'Rio Grande do Norte',
      abbre: 'rn'
    },

    {
      text: 'Rondônia',
      abbre: 'ro'
    },

    {
      text: 'Roraima',
      abbre: 'rr'
    },

    {
      text: 'Rio Grande do Sul',
      abbre: 'rs'
    },

    {
      text: 'Santa Catarina',
      abbre: 'sc'
    },

    {
      text: 'Sergipe',
      abbre: 'se'
    },

    {
      text: 'São Paulo',
      abbre: 'sp'
    },

    {
      text: 'Tocantins',
      abbre: 'to'
    },

  ]

  const [coursesSelected, setCoursesSelected] = useState([])

  const addCourseList = (id, image ,title, time, price)=>{
    let newCourse = [...coursesSelected, {id, image, title, time, price}]
    setCoursesSelected(newCourse)
  }
  const removeCourseList = (id)=>{
    let newCoursesList = []

    coursesSelected.map((c)=>{
      if(c.id !== id){
        newCoursesList.push(c)
      }
    })
    setCoursesSelected(newCoursesList)
  }
    let {idState} = useParams()
    const [state, setState] = useState('')
    useEffect(()=>{
      abbres.forEach((a)=>{
        if(a.abbre === idState){
          setState(a.text)
        }else{
          return false
        }
        
      })
    }, [])
  
  return (
    <div className='absolute mt-10 w-screen min-h-screen'>
        <Title text={`CURSOS SUGERIDOS PARA O ESTADO: ${state}`}>
          <p className='text-2xl text-center flex items-center font-bold'>
          Selecione o(s) curso(s) <MdCheckBox color='#F6B112' className='hidden lg:block md:block' size={25}/> e, ao final, clique na imagem do carrinho de compras<BsArrowRightShort className='hidden lg:block md:block' size={25}/> <BsCart4 className='hidden lg:block md:block' size={25}/>
          </p>
        </Title>
        <div className='w-full flex-col items-center lg:items-start lg:flex-row flex justify-center'>
        <div className='flex mb-2 flex-col items-center'>
          <CourseBox addCourseList={addCourseList} removeCourseList={removeCourseList} image={'https://www.cenedqualificando.com.br/Content/images/cened/cursos/84.1.jpg'} id={1} title='DIREITO PROCESSUAL PENAL – PROCEDIMENTO COMUM, NULIDADES E RECURSOS' price={180} time={80} />

          <CourseBox addCourseList={addCourseList} removeCourseList={removeCourseList} image={'https://www.cenedqualificando.com.br/Content/images/cened/cursos/84.1.jpg'} id={2} title='DIREITO PROCESSUAL PENAL – PROCEDIMENTO COMUM, NULIDADES E RECURSOS' price={180} time={80} />

          <CourseBox addCourseList={addCourseList} removeCourseList={removeCourseList} image={'https://www.cenedqualificando.com.br/Content/images/cened/cursos/84.1.jpg'} id={3} title='DIREITO PROCESSUAL PENAL – PROCEDIMENTO COMUM, NULIDADES E RECURSOS' price={180} time={80} />
        </div>
        <CoursesSelect courses={coursesSelected}/>
        </div>
      <Footer/>
    </div>
  )
}
