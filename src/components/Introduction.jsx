import React from 'react';
import slideImg1 from '../images/slideIMG1.png'
import slideImg2 from '../images/slideIMG2.png'
import slideImg3 from '../images/slideIMG3.png'
import slideImg4 from '../images/slideIMG4.png'
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
    {text: 'Possibilitar a recuperação da autoestima do REEDUCANDO por meio dos estudos que o qualificarão para o exercício de uma profissão útil à sociedade.'}],
  listText4 = [
    {text: 'Possibilitar aos REEDUCANDOS a pleitear o benefício de remição da pena pelo estudo, previsto no art. 126 da Lei nº 7.210/84 (Lei de Execução Penal) e regulamentado pela Resolução nº 391/2021, do Conselho Nacional de Justiça.'}];
  let [open1, setOpen1] = React.useState(), [open2, setOpen2] = React.useState(), [open3, setOpen3] = React.useState(), [open4, setOpen4] = React.useState(), allClosed = true;
    if(open1 || open2 || open3 || open4){allClosed = false}
    else{allClosed = true};
  return (
    <div className='p-6 md:p-10 lg:mt-14 md:text-2xl min-h-screen'>
        <h1 className='text-center font-bold md:text-4xl'>Programa de Qualificação Profissional às Pessoas Privadas de Liberdade</h1>
        <div className='flex md:mt-10 mt-4 text-xs text-center md:text-xl md:font-bold'>
            <div className='flex flex-col justify-evenly lg:justify-between items-center w-1/2 md:w-1/4 xs:h-48 md:h-96'>
            <p>Projeto de vida!</p>
            <button className='w-2/3 hover:w-3/4 hover:md:transition-all h-fit flex flex-col' onClick={() => { allClosed ? setOpen1(true) : open1 ? setOpen1(false) : setTimeout(function(){setOpen1(true)}, 450); 
            setOpen2(false);setOpen3(false);setOpen4(false);}}><img src={slideImg1} alt='' /><p className='text-white mt-2 text-xs md:text-base hover:bg-green-500 hover:md:transition-colors rounded-xl pl-2 pr-2 bg-blue-800 w-fit place-self-center'>SAIBA +</p></button>
            </div>
            <div className='flex flex-col justify-evenly lg:justify-between items-center xs:h-48 md:h-96 w-1/2 md:w-1/4'>
            <p>Educação para todos!</p>
            <button className='w-2/3 hover:w-3/4 hover:md:transition-all h-fit flex flex-col' onClick={() => { allClosed ? setOpen2(true) : open2 ? setOpen2(false) : setTimeout(function(){setOpen2(true)}, 450); 
            setOpen1(false);setOpen3(false);setOpen4(false);}}> <img src={slideImg2} alt='' /><p className='text-white mt-2 text-xs md:text-base hover:bg-green-500 hover:md:transition-colors rounded-xl pl-2 pr-2 bg-blue-800 w-fit place-self-center'>SAIBA +</p></button> 
            </div>
            <div className='hidden md:flex flex-col justify-evenly lg:justify-between items-center h-96 w-1/4'>
            <p>Formação profissional!</p>
            <button className='w-2/3 hover:w-3/4 hover:transition-all h-fit flex flex-col' onClick={() => { allClosed ? setOpen3(true) : open3 ? setOpen3(false) : setTimeout(function(){setOpen3(true)}, 450); 
            setOpen1(false);setOpen2(false);setOpen4(false);}}> <img src={slideImg3} alt='' /><p className='text-white mt-2 text-base hover:bg-green-500 hover:transition-colors rounded-xl pl-2 pr-2 bg-blue-800 w-fit place-self-center'>SAIBA +</p></button>
            </div>
            <div className='hidden md:flex flex-col justify-evenly lg:justify-between items-center h-96 w-1/4'>
            <p>Remição da pena pelo estudo</p>
            <button className='w-2/3 hover:w-3/4 hover:transition-all h-fit flex flex-col' onClick={() => { allClosed ? setOpen4(true) : open4 ? setOpen4(false) : setTimeout(function(){setOpen4(true)}, 450); 
            setOpen2(false);setOpen3(false);setOpen1(false);}}><img src={slideImg4} alt='' className='rounded-xl' /><p className='text-white mt-2 hover:bg-green-500 hover:transition-colors text-base rounded-xl pl-2 pr-2 bg-blue-800 w-fit place-self-center'>SAIBA +</p></button>
            </div>
        </div>
        <div className='md:hidden flex mt-4 text-xs text-center'>
        <div className='flex flex-col justify-evenly items-center h-48 w-1/2'>
            <p>Formação profissional!</p>
            <button className='w-2/3 hover:w-3/4 h-fit flex flex-col' onClick={() => { allClosed ? setOpen3(true) : open3 ? setOpen3(false) : setTimeout(function(){setOpen3(true)}, 450); 
            setOpen1(false);setOpen2(false);setOpen4(false);}}> <img src={slideImg3} alt='' /><p className='text-white mt-2 text-xs hover:bg-green-500 rounded-xl pl-2 pr-2 bg-blue-800 w-fit place-self-center'>SAIBA +</p></button>
            </div>
            <div className='flex flex-col justify-evenly items-center h-48 w-1/2'>
            <p>Remição da pena pelo estudo</p>
            <button className='w-2/3 hover:w-3/4 h-fit flex flex-col' onClick={() => { allClosed ? setOpen4(true) : open4 ? setOpen4(false) : setTimeout(function(){setOpen4(true)}, 450); 
            setOpen2(false);setOpen3(false);setOpen1(false);}}><img src={slideImg4} alt='' /><p className='text-white mt-2 text-xs hover:bg-green-500 rounded-xl pl-2 pr-2 bg-blue-800 w-fit place-self-center'>SAIBA +</p></button>
            </div>
        </div>
        <Collapse isOpened={open1}>
          <Accordion className='p-4 border-4 border-gray-400 mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText1.map((item, key)=>{return <li key={key}>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open2}>
          <Accordion className='p-4 border-4 border-gray-400 mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText2.map((item, key)=>{return <li key={key}>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open3}>
          <Accordion className='p-4 border-4 border-gray-400 mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText3.map((item, key)=>{return <li key={key}>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
        <Collapse isOpened={open4}>
          <Accordion className='p-4 border-4 border-gray-400 mt-2 max-w-5xl'>
          <AccordionDetails className='text-lg mt-2'>{listText4.map((item, key)=>{return <li key={key}>{item.text}</li>})}
          </AccordionDetails>
          </Accordion>
        </Collapse>
    </div>
  )
}