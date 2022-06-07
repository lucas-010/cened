import React from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import imagemBackground from '../images/headerimg.png';
import bandeiraDF from '../images/flags/DF.png';
import bandeiraBrasil from '../images/flags/bandeiradobrasil.jpg';


export default function Header({setTranslateNavbar, translateNavbar}) {
  let [collapse, setCollapse] = useState(false);
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 100) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
    return () => window.removeEventListener("scroll", posicaoScroll);
  }, []);
  return (
    <div className={`${collapse ? '' : 'fixed'} z-20 `}>
      <div style={{backgroundImage: `url(${imagemBackground})`, backgroundSize: 'cover'}} className={`flex lg:justify-around h-21 w-screen items-center ${collapse ? 'absolute' : ''}`}>
        <Link to={'/'}>
          <div style={{borderRadius: '100% 50% 100% 50%', transform: 'rotate(17deg)', backgroundColor: 'white', display: 'flex', justifyContent: 'center', width: '150%'}}>
            <img style={{transform: 'rotate(-17deg)'}} src={logo} alt="Icone de um livro" className='lg:w-24 lg:h-24 w-20 h-20'/>
          </div>
        </Link>
        <AiOutlineMenu onClick={()=> setTranslateNavbar(!translateNavbar)} className='absolute right-5 md:right-8 lg:hidden cursor-pointer block' color='#fff' size={45}/>
        <div className='hidden p-5 text-white lg:block text-center'>
          <h1 className='font-bold text-lg'>CENTRO DE EDUCAÇÃO PROFISSIONAL</h1>
          <span>Credenciada na Secretaria de Educação do DF<br/>Cadastrada no SISTEC / MEC </span>
        </div>
        <div className='hidden p-5 text-white lg:block text-center'>
          <h1 className='font-bold'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL <br/> ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
          <span className='text-base'>Ofertado há 9 anos!</span>
        </div>
        <div className='lg:flex md:blck hidden justify-center h-24 lg:flex-col-reverse text-white'>
          <h1 className='mt-1 lg:text-xl'>Brasil - Brasília - DF</h1>
          <div className='flex lg:justify-between'><img className='lg:w-20 w-14' src={bandeiraBrasil} alt=''/>
          <img className='lg:w-20 w-16' src={bandeiraDF} alt=''/></div>
        </div>
      </div>
      <Navbar translateNavbar={!translateNavbar}/>
    </div>
  )
}
