import React from 'react';
import slideImg1 from '../images/slideIMG1.png'
import slideImg2 from '../images/slideIMG2.png'
import slideImg3 from '../images/slideIMG3.png'
import slideImg4 from '../images/slideIMG4.png'
import botaoMais from '../images/botaoMais.png'
import { useState } from 'react';
import {Collapse} from 'react-collapse';


export default function Intro() {
  let [open1, setOpen1] = React.useState();
  let [open2, setOpen2] = React.useState();
  let [open3, setOpen3] = React.useState();
  let [open4, setOpen4] = React.useState();
  return (
    <div className='h-screen mt-24 p-6 lg:mt-40 text-2xl' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,230,140,1) 100%)'}}>
        <h1 className='text-center font-bold lg:text-4xl'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
        <div className='flex mt-10'>
            <div className='flex flex-col items-center w-1/4'>
            <img src={slideImg1} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Reconstruindo a vida!</p>
            <button onClick={() => { 
              setOpen2(false);
              setOpen3(false);
              setOpen4(false);
              !open1 ? setOpen1(true) : setOpen1(false);
            }} 
            className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            </div>
            <div className='flex flex-col items-center w-1/4'>
            <img src={slideImg2} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Educação para todos!</p>
            <button onClick={() => { 
              setOpen4(false);
              setOpen3(false);
              setOpen1(false);
              !open2 ? setOpen2(true) : setOpen2(false);
            }}  href='/cened/cursos' className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            
            </div>
            <div className='flex flex-col items-center w-1/4'>
            <img src={slideImg3} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Formação profissional!</p>

            <button onClick={() => { 
              setOpen2(false);
              setOpen4(false);
              setOpen1(false);
              !open3 ? setOpen3(true) : setOpen3(false);
            }}  className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            
            </div>
            <div className='flex flex-col items-center w-1/4' >
            <img src={slideImg4} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Remição da pena pelo estudo</p>
            <button onClick={() => { 
              setOpen2(false);
              setOpen3(false);
              setOpen1(false);
              !open4 ? setOpen4(true) : setOpen4(false);
            }}  href='#/' className='bg-gray-900 align-center self-center lg:w-1/12 h-fit flex rounded-full'><img src={botaoMais} alt='' className='rounded-full'/></button>
            </div>
        </div>
        <Collapse isOpened={open1}>
          <ul className='w-9/10 list-disc border-black rounded border-solid'>
            <li >Assegurar o direito do reeducando à instrução escolar e formação profissional, em nível de iniciação ou de aperfeiçoamento.</li>
            <li>Qualificar os egressos do sistema penitenciário para a (re)inserção no mercado de trabalho.</li>
          </ul>
        </Collapse>
        <Collapse isOpened={open2}>
        <ul className='w-9/10 list-disc'>
            <li>Promover aos REEDUCANDOS do país, mesmo que separados por distâncias geográficas e sociais, cursos de
              educação profissional, na modalidade de ensino a distância.</li>
          </ul>
        </Collapse>
        <Collapse isOpened={open3}>
        <ul className='w-9/10 list-disc'>
        <li>Promover a capacitação profissional dos REEDUCANDOS do sistema penitenciário.</li>
            <li>Contribuir para a elevação do nível de escolaridade dos REEDUCANDOS.</li>
            <li>Promover o crescimento pessoal e profissional do REEDUCANDO durante o cumprimento da sua pena, visando à
            recuperação da sua dignidade</li>
            <li>Possibilitar a recuperação da autoestima do REEDUCANDO por meio dos estudos que o qualificarão para o exercício
            de uma profissão útil à sociedade.</li>
          </ul>
        </Collapse>
        <Collapse isOpened={open4}>
        <ul className='w-9/10 list-disc'>
            <li>Possibilitar aos REEDUCANDOS a pleitear o benefício de remição da pena pelo estudo, previsto no art. 126 da Lei nº
              7.210/84 (Lei de Execução Penal) e regulamentado pela Resolução nº 391/2021, do Conselho Nacional de Justiça.</li>
          </ul> 
        </Collapse>
    </div>
  )
}