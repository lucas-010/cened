import React from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import {AiOutlineMenu} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import imagem from '../images/headerimg.png';

export default function Header({setTranslateNavbar, translateNavbar}) {
  let [collapse, setCollapse] = useState(false);
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 35) {
        setCollapse(true);
      } else {
        setCollapse(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
    return () => window.removeEventListener("scroll", posicaoScroll);
  }, []);

  console.log(collapse)
  return (
    <div className={`${collapse ? '' : 'fixed'} z-20 `}>
      <div style={{backgroundImage: `url(${imagem})`, backgroundSize: 'cover'}} className={`flex justify-center h-20 w-screen items-center ${collapse ? 'absolute' : ''}`}>
        <Link to={'/'}>
          <div style={{borderRadius: '100% 50% 100% 50%', transform: 'rotate(45deg)' , backgroundColor: 'white'}}>
            <img style={{transform: 'rotate(-45deg)'}} src={logo} alt="Icone de um livro" className='w-16 h-16 p-1.5'/>
          </div>
        </Link>
        <AiOutlineMenu onClick={()=> setTranslateNavbar(!translateNavbar)} className='absolute right-5 md:right-8 lg:hidden cursor-pointer block' color='#fff' size={45}/>
        <div className='hidden p-5 text-white lg:block'>
          <h1 className='font-bold'>CENTRO DE EDUCAÇÃO PROFISSIONAL</h1>
          <span>Cadastrada no MEC / SISTEC Brasília - Distrito Federal</span>
        </div>
      </div>
      <Navbar translateNavbar={translateNavbar}/>
    </div>
  )
}
