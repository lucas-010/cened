import React from 'react';
import imgFundo from '../images/marcaDagua.png'
import slideImg1 from '../images/slideIMG1.png'
import slideImg2 from '../images/slideIMG2.png'
import slideImg3 from '../images/slideIMG3.png'
import slideImg4 from '../images/slideIMG4.png'
import botaoMais from '../images/botaoMais.png'

export default function Intro() {
  return (
    <div style={{backgroundImage: `url(${imgFundo})`, backgroundSize: 'contain'}} className='h-screen mt-24 p-6 lg:mt-40'>
        <h1 className='text-center font-bold text-4xl'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
        <div className='flex justify-around ml-28'>
            <div className='flex'>
            <img src={slideImg1} alt='' className='w-1/2'/>
            <button className='bg-'><img src={botaoMais} alt='' className='w-1/2 rounded-full'/></button>
            </div>
            <div className='flex'>
            <img src={slideImg2} alt='' className='w-1/2'/>
            <button className='bg-'><img src={botaoMais} alt='' className='w-1/2 rounded-full'/></button>
            </div>
        </div>
        <div className='flex justify-around ml-28 mt-10'>
            <div className='flex'>
            <img src={slideImg3} alt='' className='w-1/2'/>
            <button className='bg-'><img src={botaoMais} alt='' className='w-1/2 rounded-full'/></button>
            
            </div>
            <div className='flex'>
            <img src={slideImg4} alt='' className='w-1/2'/>
            <button className='bg-'><img src={botaoMais} alt='' className='w-1/2 rounded-full'/></button>
            
            </div>
        </div>
    </div>
  )
}