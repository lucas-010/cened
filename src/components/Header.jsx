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
      <div style={{backgroundImage: `url(${imagemBackground})`, backgroundSize: 'cover'}} className={`flex justify-around h-21 w-screen items-center ${collapse ? 'absolute' : ''}`}>
        <Link to={'/'}>
          <div style={{borderRadius: '100% 50% 100% 50%', transform: 'rotate(13deg)', backgroundColor: 'white', display: 'flex', justifyContent: 'center'}}>
            <img style={{transform: 'rotate(-13deg)'}} src={logo} alt="Icone de um livro" className='w-16 h-16'/>
          </div>
          <span className='text-white font-bold'>BRASÍLIA - DF</span>
        </Link>
        <AiOutlineMenu onClick={()=> setTranslateNavbar(!translateNavbar)} className='absolute right-5 md:right-8 lg:hidden cursor-pointer block' color='#fff' size={45}/>
        <div className='hidden p-5 text-white lg:block text-center'>
          <h1 className='font-bold'>CENTRO DE EDUCAÇÃO PROFISSIONAL</h1>
          <span>Cadastrada no MEC / SISTEC Brasília - Distrito Federal</span>
        </div>
        <div className='hidden p-5 text-white lg:block text-center'>
          <h1 className='font-bold'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL <br/> ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
          <span>Ofertado há 9 anos!</span>
        </div>
        <div className='items-center justify-between h-24 flex-col flex'>
          <img className='w-16' src={bandeiraBrasil} alt=''/>
          <img className='w-16' src={bandeiraDF} alt=''/>
        </div>
      </div>
      <Navbar translateNavbar={translateNavbar}/>
    </div>
  )
}
