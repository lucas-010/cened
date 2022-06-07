import React from 'react';
import slideImg1 from '../images/slideIMG1.png'
import slideImg2 from '../images/slideIMG2.png'
import slideImg3 from '../images/slideIMG3.png'
import slideImg4 from '../images/slideIMG4.png'
import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import {MdOutlineExpandMore} from 'react-icons/md'
import {Collapse} from 'react-collapse';
import './Introduction.css'


export default function Intro() {
  const listText1 = [
    {text: 'Assegurar o direito do reeducando à instrução escolar e formação profissional, em nível de iniciação ou de aperfeiçoamento.'},
    {text: 'Qualificar os egressos do sistema penitenciário para a (re)inserção no mercado de trabalho.'}
  ]
  const listText2 = [
    {text: 'Promover aos REEDUCANDOS do país, mesmo que separados por distâncias geográficas e sociais, cursos de educação profissional, na modalidade de ensino a distância.'},
  ]
  const listText3 = [
    {text: 'Promover a capacitação profissional dos REEDUCANDOS do sistema penitenciário.'},
    {text: 'Contribuir para a elevação do nível de escolaridade dos REEDUCANDOS.'},
    {text: 'Promover o crescimento pessoal e profissional do REEDUCANDO durante o cumprimento da sua pena, visando à recuperação da sua dignidade.'},
    {text: 'Possibilitar a recuperação da autoestima do REEDUCANDO por meio dos estudos que o qualificarão para o exercíciode uma profissão útil à sociedade.'},
  ]
  const listText4 = [
    {text: 'Possibilitar aos REEDUCANDOS a pleitear o benefício de remição da pena pelo estudo, previsto no art. 126 da Lei nº 7.210/84 (Lei de Execução Penal) e regulamentado pela Resolução nº 391/2021, do Conselho Nacional de Justiça.'},
    ]
  let [open1, setOpen1] = React.useState();
  let [open2, setOpen2] = React.useState();
  let [open3, setOpen3] = React.useState();
  let [open4, setOpen4] = React.useState();
  return (
    <div className='mt-24 p-10 lg:mt-36 text-2xl' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,230,140,1) 100%)'}}>
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
            className='bg-blue-600 align-center self-center lg:w-1/4 justify-center text-white h-fit text-base flex rounded-xl'>SAIBA MAIS</button>
            </div>
            <div className='flex flex-col items-center w-1/4'>
            <img src={slideImg2} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Educação para todos!</p>
            <button onClick={() => { 
              setOpen1(false);
              setOpen3(false);
              setOpen4(false);
              !open2 ? setOpen2(true) : setOpen2(false);
            }}  href='/cened/cursos' className='bg-blue-600 align-center self-center lg:w-1/4 justify-center text-white h-fit text-base flex rounded-xl'>SAIBA MAIS</button>
            
            </div>
            <div className='flex flex-col items-center w-1/4'>
            <img src={slideImg3} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Formação profissional!</p>

            <button onClick={() => { 
              setOpen1(false);
              setOpen2(false);
              setOpen4(false);
              !open3 ? setOpen3(true) : setOpen3(false);
            }}  className='bg-blue-600 align-center self-center lg:w-1/4 justify-center text-white h-fit text-base flex rounded-xl'>SAIBA MAIS</button>
            
            </div>
            <div className='flex flex-col items-center w-1/4' >
            <img src={slideImg4} alt='' className='lg:w-2/3 w-3/4 h-fit'/>
            <p>Remição da pena pelo estudo</p>
            <button onClick={() => { 
              setOpen2(false);
              setOpen3(false);
              setOpen1(false);
              !open4 ? setOpen4(true) : setOpen4(false);
            }}  href='#/' className='bg-blue-600 align-center self-center lg:w-1/4 justify-center text-white h-fit text-base flex rounded-xl'>SAIBA MAIS</button>
            </div>
        </div>
        <Collapse isOpened={open1}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl' >
          <AccordionDetails className='text-lg mt-2'>{listText1.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open2}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl' >
          <AccordionDetails className='text-lg mt-2'>{listText2.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open3}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl' >
          <AccordionDetails className='text-lg mt-2'>{listText3.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open4}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl' >
          <AccordionDetails className='text-lg mt-2'>{listText4.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
    </div>
  )
}