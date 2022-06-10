import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import CourseBox from '../components/CourseBox'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'
import { MdCheckBox } from 'react-icons/md'
import CoursesSelect from '../components/CoursesSelect'
import Footer from '../components/Footer'
import AC from '../images/flags/AC.png'
import AL from '../images/flags/AL.png'
import AM from '../images/flags/AM.png'
import AP from '../images/flags/AP.png'
import BA from '../images/flags/BA.png'
import CE from '../images/flags/CE.png'
import DF from '../images/flags/DF.png'
import ES from '../images/flags/ES.png'
import GO from '../images/flags/GO.png'
import MA from '../images/flags/MA.png'
import MG from '../images/flags/MG.png'
import MS from '../images/flags/MS.png'
import MT from '../images/flags/MT.png'
import PA from '../images/flags/PA.png'
import PB from '../images/flags/PB.png'
import PI from '../images/flags/PI.png'
import PE from '../images/flags/PE.png'
import PR from '../images/flags/PR.png'
import RJ from '../images/flags/RJ.png'
import RN from '../images/flags/RN.png'
import RO from '../images/flags/RO.png'
import RR from '../images/flags/RR.png'
import RS from '../images/flags/RS.png'
import SC from '../images/flags/SC.png'
import SE from '../images/flags/SE.png'
import SP from '../images/flags/SP.png'
import TO from '../images/flags/TO.png'

export default function List() {
  const abbres = [
    {
      img: AC,
      text: 'Acre',
      abbre: 'ac'
    },

    {
      img: AL,
      text: 'Alagoas',
      abbre: 'al'
    },

    {
      img: AM,
      text: 'Amazonas',
      abbre: 'am'
    },

    {
      img: AP,
      text: 'Amapá',
      abbre: 'ap'
    },

    {
      img: BA,
      text: 'Bahia',
      abbre: 'ba'
    },

    {
      img: CE,
      text: 'Ceará',
      abbre: 'ce'
    },

    {
      img: DF,
      text: 'Distrito Federal',
      abbre: 'df'
    },

    {
      img: ES,
      text: 'Espírito Santo',
      abbre: 'es'
    },

    {
      img: GO,
      text: 'Goiás',
      abbre: 'go'
    },

    {
      img: MA,
      text: 'Maranhão',
      abbre: 'ma'
    },

    {
      img: MS,
      text: 'Mato Grosso do Sul',
      abbre: 'ms'
    },
    
    {
      img: MT,
      text: 'Mato Grosso',
      abbre: 'mt'
    },

    {
      img: MG,
      text: 'Minas Gerais',
      abbre: 'mg'
    },

    {
      img: PA,
      text: 'Pará',
      abbre: 'pa'
    },

    {
      img: PB,
      text: 'Paraíba',
      abbre: 'pb'
    },

    {
      img: PR,
      text: 'Paraná',
      abbre: 'pr'
    },
    {
      img: PE,
      text: 'Pernambuco',
      abbre: 'pe'
    },

    {
      img: PI,
      text: 'Piauí',
      abbre: 'pi'
    },

    {
      img: RJ,
      text: 'Rio de Janeiro',
      abbre: 'rj'
    },

    {
      img: RN,
      text: 'Rio Grande do Norte',
      abbre: 'rn'
    },

    {
      img: RO,
      text: 'Rondônia',
      abbre: 'ro'
    },

    {
      img: RR,
      text: 'Roraima',
      abbre: 'rr'
    },

    {
      img: RS,
      text: 'Rio Grande do Sul',
      abbre: 'rs'
    },

    {
      img: SC,
      text: 'Santa Catarina',
      abbre: 'sc'
    },

    {
      img: SE,
      text: 'Sergipe',
      abbre: 'se'
    },

    {
      img: SP,
      text: 'São Paulo',
      abbre: 'sp'
    },

    {
      img: TO,
      text: 'Tocantins',
      abbre: 'to'
    },

  ]
  const [image, setImage] = useState()
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
          setImage(a.img)
        }else{
          return false
        }
        
      })
    }, [])
  
  return (
    <div className='absolute mt-10 w-screen min-h-screen'>
        <Title text={`CURSOS SUGERIDOS PARA O ESTADO: ${state}` }>
          <p className='text-2xl text-center flex items-center font-bold'>
          Selecione o(s) curso(s) <MdCheckBox color='#F6B112' className='hidden lg:block md:block' size={25}/> e, ao final, clique na imagem do carrinho de compras<BsArrowRightShort className='hidden lg:block md:block' size={25}/> <BsCart4 className='hidden lg:block md:block' size={25}/>
          </p>
        </Title>
        <div className='w-full flex-col items-center lg:items-start lg:flex-row flex lg:justify-start justify-center'>
        <div className='flex mb-2 flex-col lg:items-start lg:ml-10 items-center'>
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
