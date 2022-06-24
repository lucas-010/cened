import React, { useState } from 'react';
import {AiFillFileText, AiFillPrinter} from 'react-icons/ai';
import {FaTimesCircle} from 'react-icons/fa'
import {IoIosArrowBack} from 'react-icons/io'
import { IoDocuments } from 'react-icons/io5';

export default function AllCourses({data}){
    let [visCourseDetails ,setVisCourseDetails] = useState(false);
    let [selectedCourse, setSelectedCourse] = useState(false);

    let dateInitCourse = '', calcDays='',oldDate='',testDate='';
    let date = new Date(selectedCourse.dataMatricula).toLocaleDateString('pt-BR');
    let datePayment = '', dateFinalTest = '', testGrade ='', testResult='';
    if(selectedCourse.statusCurso === 4 || selectedCourse.statusCurso === 7){testResult = `${selectedCourse.statusCursoDescricao}. Fará 2ª Prova.`}
    else{testResult=selectedCourse.statusCursoDescricao}
    if(selectedCourse.dataPagamento){datePayment = new Date(selectedCourse.dataPagamento).toLocaleDateString('pt-BR');}
    if(selectedCourse.inicioCurso) {dateInitCourse = new Date(selectedCourse.inicioCurso).toLocaleDateString('pt-BR');
    calcDays = (selectedCourse.curso.cargaHoraria/4); oldDate = new Date(selectedCourse.inicioCurso.toString());
    testDate= new Date(oldDate.getFullYear(),oldDate.getMonth(),oldDate.getDate()+calcDays).toLocaleDateString('pt-BR');}
    if(selectedCourse.ultimaProvaRealizada)
    {dateFinalTest = new Date(selectedCourse.ultimaProvaRealizada.dataRecebidaProva).toLocaleDateString('pt-Br');
    testGrade = selectedCourse.ultimaProvaRealizada.nota}

    if(visCourseDetails===false){
    return(
    <div className='lg:w-5/6 h-full'>
            <h1 className='flex p-10 justify-center items-center text-2xl font-bold'><IoDocuments/>Todos os cursos</h1>
            <div className='p-2 border-gray-400'>
            {data.map(item=>
            <div className='flex justify-between lg:p-1 border-t-2 border-gray-400'>
                <div className='flex flex-col'>
                    <ul className='flex flex-col lg:flex-row lg:gap-6'><li>Curso: <b>{item.curso.codigo}</b> - {item.curso.nome}</li> <li>CargaHorária: <b>{item.curso.cargaHoraria}</b></li></ul>
                    <ul className='flex flex-col lg:flex-row lg:gap-6'><li>Matrícula: <b>{item.numeroMatricula ? item.numeroMatricula : 'N/D'}</b></li><li>Início do Curso: <b>{item.inicioCurso ? new Date(item.inicioCurso).toLocaleDateString('pt-BR'):'Aguardando'}</b></li>
                    <li>Término: <b>{item.terminoCurso ? new Date(item.terminoCurso).toLocaleDateString('pt-BR') : 'Indefinido'}</b></li><li>Financeiro: <b>{item.statusFinanceiroDescricao}</b></li>
                    <li>Situação: <b>{item.statusCursoDescricao}</b></li>
                    </ul>
                </div>
                {item.statusCurso!==1?<div className='flex flex-col lg:flex-row lg:justify-start justify-center items-center'>
                <button onClick={()=>{setVisCourseDetails(true);setSelectedCourse(item)}} className='flex-wrap justify-center lg:justify-start bg-green-500 h-fit rounded-md p-1 text-white flex items-center hover:bg-green-600 transition'><AiFillFileText/>&nbsp;Ver histórico&nbsp;</button></div>
                :<div className='flex flex-col lg:flex-row lg:justify-start justify-center items-center gap-2'><button className='flex-wrap justify-center lg:justify-start flex items-center border border-black rounded-md p-1 text-sm hover:bg-gray-200 transition'><AiFillPrinter/>&nbsp;Imprimir boleto bancário</button>
                <button className='flex-wrap justify-center lg:justify-start bg-red-500 rounded-md p-1 text-white flex items-center hover:bg-red-600 transition'><FaTimesCircle/>&nbsp;Cancelar este curso&nbsp;</button></div>
                }
            </div>
            )}
            </div>
        </div>
    )}
    else{
        return(
            <div className='lg:w-5/6 h-full'>
                <div className='lg:p-10 p-5 flex flex-col items-center'>
                <h1 className='flex items-center text-2xl font-bold'><AiFillFileText/>Histórico de curso</h1>
                <h2 className='text-gray-500 text-center lg:text-start'>Histórico completo de andamento e avaliações do Aluno/Interno</h2>
                <div className='flex flex-col lg:flex-row bg-gray-100 border border-gray-200 p-5 w-full justify-between rounded-md'>
                    <p className='flex flex-col text-sm lg:text-base flex-wrap lg:flex-row items-center'>Histórico do curso:&nbsp;<b>{selectedCourse.curso.codigo} - {selectedCourse.curso.nome}</b></p>
                    <button onClick={()=>{setVisCourseDetails(false)}} className='bg-green-500 transition hover:bg-green-600 rounded-md p-1 flex items-center text-white'><IoIosArrowBack/>&nbsp;Voltar à lista dos cursos&nbsp;</button>
                </div>
                </div>
                <div className='w-full h-5/6 flex flex-col lg:flex-row border-8 border-white rounded-xl flex-wrap'>
                    <div className='lg:w-1/2 p-2 overflow-auto lg:h-auto  border-gray-400'>
                        <p className='text-xl text-center font-bold mb-10'>Trâmites da Matrícula e do Curso</p>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>A pré-matrícula foi recebida/registrada na Escola CENED em: <b>{date}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Pré-matrícula realizada no site por: <b>{selectedCourse.aluno.nomePreposto}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Matrícula efetivada. Pagamento liquidado em: <b>{datePayment}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Início do curso: <b>{dateInitCourse}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Material didático enviado para: <b>{selectedCourse.materialEnviadoParaDescricao}</b></li>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Situação do curso: <b>{selectedCourse.statusCursoDescricao}</b></li>
                        </div>
                    <div className='lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto lg:border-l-2 border-gray-400'>
                        <p className='text-xl text-center font-bold mb-10'>Trâmite da Prova</p>
                        <li className='border-2 list-none p-2 hover:bg-gray-200'>Data prevista para realização da prova na Unidade Prisional: <b>{testDate}</b></li>
                        <li className={`${dateFinalTest === '' ? 'hidden':''} border-2 list-none p-2 hover:bg-gray-200`}>PROVA realizada. Resultado da prova: <b>{testGrade} - {testResult}</b></li>
                        </div>
                </div>
            </div>
        )
    }
}