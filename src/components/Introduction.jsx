import React from 'react';
import slideImg1 from '../images/slideIMG1.png'
import slideImg2 from '../images/slideIMG2.png'
import slideImg3 from '../images/slideIMG3.png'
import slideImg4 from '../images/slideIMG4.png'
import { useState } from 'react';
import { Accordion, AccordionDetails} from '@mui/material'
import {Collapse} from 'react-collapse';
import './Introduction.css';

export default function Intro() {
  const listText1 = [
    {text: 'Assegurar o direito do reeducando à instrução escolar e formação profissional, em nível de iniciação ou de aperfeiçoamento.'},
    {text: 'Qualificar os egressos do sistema penitenciário para a (re)inserção no mercado de trabalho.'}],
  listText2 = [
    {text: 'Promover aos REEDUCANDOS do país, mesmo que separados por distâncias geográficas e sociais, cursos de educação profissional, na modalidade de ensino a distância.'}],
  listText3 = [
    {text: 'Promover a capacitação profissional dos REEDUCANDOS do sistema penitenciário.'},
    {text: 'Contribuir para a elevação do nível de escolaridade dos REEDUCANDOS.'},
    {text: 'Promover o crescimento pessoal e profissional do REEDUCANDO durante o cumprimento da sua pena, visando à recuperação da sua dignidade.'},
    {text: 'Possibilitar a recuperação da autoestima do REEDUCANDO por meio dos estudos que o qualificarão para o exercíciode uma profissão útil à sociedade.'}],
  listText4 = [
    {text: 'Possibilitar aos REEDUCANDOS a pleitear o benefício de remição da pena pelo estudo, previsto no art. 126 da Lei nº 7.210/84 (Lei de Execução Penal) e regulamentado pela Resolução nº 391/2021, do Conselho Nacional de Justiça.'}];
  let [open1, setOpen1] = React.useState(), [open2, setOpen2] = React.useState(), [open3, setOpen3] = React.useState(), [open4, setOpen4] = React.useState(), allClosed = true;
    if(open1 || open2 || open3 || open4){allClosed = false}
    else{allClosed = true};
  return (
    <div className='mt-20 lg:p-10 lg:mt-36 lg:text-2xl' style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,230,140,1) 100%)'}}>
        <h1 className='text-center font-bold lg:text-4xl'>PROGRAMA DE QUALIFICAÇÃO PROFISSIONAL ÀS PESSOAS PRIVADAS DE LIBERDADE</h1>
        <div className='flex mt-10 text-sm text-center lg:text-lg'>
            <div className='flex justify-between min-h-20 flex-col items-center w-1/4'>
            <img src={slideImg1} alt='' className='lg:w-2/3 hover:w-3/4 h-fit'/>
            <p>Reconstruindo a vida!</p>
            <button onClick={() => { allClosed ? setOpen1(true) : open1 ? setOpen1(false) : setTimeout(function(){setOpen1(true)}, 450); 
            setOpen2(false);setOpen3(false);setOpen4(false);}}
            className='bg-blue-600 items-center self-center lg:w-fit pl-2 pr-2 justify-center text-white h-fit lg:text-base flex rounded-xl text-xs hover:bg-green-600 transition-colors'>SAIBA &nbsp;<p className='text-xl'>+</p></button>
            </div>
            <div className='flex justify-between min-h-20 flex-col items-center w-1/4'>
            <img src={slideImg2} alt='' className='lg:w-2/3 hover:w-3/4 h-fit'/>
            <p>Educação para todos!</p>
            <button onClick={() => { allClosed ? setOpen2(true) : open2 ? setOpen2(false) : setTimeout(function(){setOpen2(true)}, 450); 
            setOpen1(false);setOpen3(false);setOpen4(false);}}  
            className='bg-blue-600 items-center self-center lg:w-fit pl-2 pr-2 justify-center text-white h-fit lg:text-base flex rounded-xl text-xs hover:bg-green-600 transition-colors'>SAIBA &nbsp;<p className='text-xl'>+</p></button>
            </div>
            <div className='flex justify-between min-h-20 flex-col items-center w-1/4'>
            <img src={slideImg3} alt='' className='lg:w-2/3 hover:w-3/4 h-fit'/>
            <p>Formação profissional!</p>
            <button onClick={() => { allClosed ? setOpen3(true) : open3 ? setOpen3(false) : setTimeout(function(){setOpen3(true)}, 450); 
            setOpen1(false);setOpen2(false);setOpen4(false);}}  
            className='bg-blue-600 items-center self-center lg:w-fit pl-2 pr-2 justify-center text-white h-fit lg:text-base flex rounded-xl text-xs hover:bg-green-600 transition-colors'>SAIBA &nbsp;<p className='text-xl'>+</p></button>
            </div>
            <div className='flex justify-between min-h-20 flex-col items-center w-1/4' >
            <img src={slideImg4} alt='' className='lg:w-2/3 hover:w-3/4 h-fit'/>
            <p>Remição da pena pelo estudo</p>
            <button onClick={() => { allClosed ? setOpen4(true) : open4 ? setOpen4(false) : setTimeout(function(){setOpen4(true)}, 450); 
            setOpen2(false);setOpen3(false);setOpen1(false);}}  
            className='bg-blue-600 items-center self-center lg:w-fit pl-2 pr-2 justify-center text-white h-fit lg:text-base flex rounded-xl text-xs hover:bg-green-600 transition-colors'>SAIBA &nbsp;<p className='text-xl'>+</p></button>
            </div>
        </div>
        <Collapse isOpened={open1}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText1.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open2}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText2.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open3}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText3.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open4}>
          <Accordion className='p-4 border-2 border-black mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText4.map((item, key)=>{return <li>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
    </div>
  )
}