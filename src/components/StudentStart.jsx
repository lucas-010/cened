import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import {MdMessage, MdPowerSettingsNew} from 'react-icons/md'
import {HiOutlineDocumentSearch} from 'react-icons/hi';
import {IoDocuments} from 'react-icons/io5'
import {GrFormAdd,GrCertificate} from 'react-icons/gr'
import {FiEdit} from 'react-icons/fi'
import {BiBarcodeReader} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'

export default function StudentStart(){
    return(
        <div className='lg:w-5/6'>
            <h1 className='flex h-1/6 justify-center items-center text-2xl font-bold'>Conheça a área do aluno</h1>
            <div className='w-full h-5/6 flex lg:flex-row flex-col flex-wrap text-green-700 '>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>                    
                <p className='flex items-center font-bold'><HiOutlineDocumentSearch/>CURSO ATUAL</p>
                <li className='flex mt-10 h-full'>Visualize o Histórico completo do Curso em Andamento ou Último Curso realizado pelo Aluno</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex text-start items-center font-bold'><IoDocuments/>TODOS OS CURSOS</p>
                <li className='flex mt-10 h-full'>Visualize o Histórico completo do Curso em Andamento ou Último Curso realizado pelo Aluno</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex items-center font-bold'><GrFormAdd/>COMPRAR NOVO CURSO</p>
                <li className='flex mt-10 h-full'>Realize uma nova matrícula para o Aluno, adiquira mais um dos Cursos disponíveis</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex items-center font-bold'><BiBarcodeReader/>BOLETOS</p>
                <li className='flex mt-10 h-full'>Visualize e Imprima Boletos referentes a Matrícula, Compra de Curso, e Despesas Extras</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex items-center font-bold'><MdMessage/>FALE CONOSCO</p>
                <li className='flex mt-10 h-full'>Caixa de Mensagens para comunicação direta com o setor de atendimento</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex items-center font-bold'><RiLockPasswordFill/>ALTERAR SENHA</p>
                <li className='flex mt-10 h-full'>Altere a senha de acesso à Área do Aluno</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex items-center font-bold'><FiEdit/>ATUALIZAR CADASTRO</p>
                <li className='flex mt-10 h-full'>Visualize e Altere os Dados Pessoais do Aluno, Dados Penitenciários e os Dados do Responsável/Preposto</li></div>
                <div className='flex flex-col bg-amber-100 overflow-auto h-72 lg:h-auto lg:w-1/4 border-8 rounded-xl border-cyan-400 p-4'>
                <p className='flex items-center font-bold'><MdPowerSettingsNew/>SAIR</p>
                <li className='flex mt-10 h-full'>Efetue Logoff da Área do Aluno</li></div>
            </div>
        </div>
    )
}