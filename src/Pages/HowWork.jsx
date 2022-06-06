import React from 'react'
import Card from '../components/Card'
import {BsCheckCircle} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import {MdOutlineMenuBook} from 'react-icons/md'
import {TiEdit} from 'react-icons/ti'
import {AiFillCreditCard} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {IoSchoolOutline} from 'react-icons/io5'
import {AiOutlineArrowDown} from 'react-icons/ai'
import DetailInfo from '../components/DetailInfo'
import Title from '../components/Title'

export default function HowWork() {
  return (
    <div className='absolute mt-10 w-screen'>
      <Title text='COMO FUNCIONA'>
        VEJA O PASSO A PASSO DO FUNCIONAMENTO DO PROGRAMA EDUCACIONAL PARA INTERNOS DO SISTEMA PRISIONAL BRASILEIRO
      </Title>
			<div className='flex justify-center mt-2 p-4 max-w-full flex-wrap items-center flex-col lg:flex-row '>
      <div className='text-black bg-[#EBECF0] mr-0 lg:mr-10 mt-10 rounded-xl h-64 flex flex-col items-center p-6 w-4/5 lg:w-1/4'>
          <h2 className='uppercase text-center font-bold text-xl'>1º - PASSO</h2>
          <BsCheckCircle size={70}/>
          <p className='text-lg text-center p-2'>Solicite a autorização de estudo junto à Unidade Prisional.</p>
          <a target={'_blank'} href="https://www.cenedqualificando.com.br/Arquivos/Requerimento.docx" rel="noreferrer">
            <button className="bg-black hover:bg-transparent border-2 text-white font-semibold hover:text-black py-0 px-2 flex items-center transition-colors hover:border-black rounded">
              BAIXAR REQUERIMENTO <HiDownload size={40}/>
            </button>
          </a>
        </div>
        <Card title={'2º - PASSO'} text={'Escolha um dos Cursos disponíveis no site.'}>
          <MdOutlineMenuBook size={70}/>
        </Card>

        <Card title={'3º - PASSO'} text={'Informe os dados Pessoais do Interno e do Responsável.'}>
          <TiEdit size={70}/>
        </Card>

        <Card title={'4º - PASSO'} text={'Escolha uma de nossas formas de pagamento na ÁREA DO ALUNO.'}>
          <AiFillCreditCard size={70}/>
        </Card>

        <Card title={'5º - PASSO'} text={'Acompanhe o histórico de andamento na ÁREA DO ALUNO.'}>
          <HiOutlineDocumentText size={70}/>
        </Card>

        <Card title={'6º - PASSO'} text={'Após a aprovação será enviado um Certificado impresso.'}>
          <IoSchoolOutline size={70}/>
        </Card>
			</div>

			<div className='flex flex-col lg:flex-row lg:justify-center items-center mt-5 p-2'>
				<div className='border-2 border-black text-center mt-2 flex rounded-xl items-center p-3 text-xl'>INFORMAÇÕES DETALHADAS PARA IMPRESSÃO.<a target={'_blank'} className='text-blue-600' href="https://www.cenedqualificando.com.br/Arquivos/ComoFunciona.pdf" rel="noreferrer">Clique aqui!</a></div>
				<div className='border-2 border-black text-center mt-2 flex rounded-xl items-center p-1 lg:ml-5 text-xl'>INFORMAÇÕES DETALHADAS ABAIXO<AiOutlineArrowDown size={40}/></div>
			</div>

			<DetailInfo/>
    </div>
  )
}
