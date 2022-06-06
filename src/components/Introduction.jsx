import React from 'react';
import slideImg1 from '../images/slideIMG1.png'
import slideImg2 from '../images/slideIMG2.png'
import slideImg3 from '../images/slideIMG3.png'
import slideImg4 from '../images/slideIMG4.png'
import botaoMais from '../images/botaoMais.png'

export default function Intro() {
  return (
    <div className='h-screen mt-24 p-6 lg:mt-40'>
        <h1 className='text-center font-bold lg:text-4xl'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
        <div className='flex mt-10'>
            <div className='flex justify-center w-1/2'>
            <img src={slideImg1} alt='' className='lg:w-1/3 w-3/4 h-fit'/>
            <button className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            </div>
            <div className='flex justify-center w-1/2'>
            <img src={slideImg2} alt='' className='lg:w-1/3 w-3/4 h-fit'/>
            <button href='/cened/cursos' className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            </div>
        </div>
        <div className='flex mt-10'>
            <div className='flex justify-center w-1/2'>
            <img src={slideImg3} alt='' className='lg:w-1/3 w-3/4 h-fit'/>
            <button className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            
            </div>
            <div className='flex justify-center w-1/2' >
            <img src={slideImg4} alt='' className='lg:w-1/3 w-3/4 h-fit'/>
            <button href='#/' className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            </div>
        </div>
    </div>
  )
}