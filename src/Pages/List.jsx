import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../components/Title'
import axios from 'axios'
import CourseBox from '../components/CourseBox'
import {AiOutlineCheckSquare} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'

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

    let {id} = useParams()
    const [state, setState] = useState('')
    useEffect(()=>{
      abbres.forEach((a)=>{
        if(a.abbre === id){
          setState(a.text)
        }else{
          return false
        }
        
      })
    }, [])
  
  return (
    <div className='absolute mt-10 w-screen'>
        <Title text={`CURSOS SUGERIDOS PARA O ESTADO: ${state}`}>
          Selecione o(s) curso(s) <AiOutlineCheckSquare className='hidden lg:block md:block' size={25}/> e ao final clique na imagem do carrinho de compras<BsArrowRightShort className='hidden lg:block md:block' size={25}/> <BsCart4 className='hidden lg:block md:block' size={25}/>
        </Title>
        <div className='w-11/12 lg:w-3/5 mt-0 m-auto flex flex-col'>
          <CourseBox image={'https://www.cenedqualificando.com.br/Content/images/cened/cursos/84.1.jpg'} id={1} title='DIREITO PROCESSUAL PENAL – PROCEDIMENTO COMUM, NULIDADES E RECURSOS' price={180} time={80} />
        </div>
    </div>
  )
}
