import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import Card from './Card.jsx'
import {MdOutlineMenuBook} from 'react-icons/md'
import {TiEdit} from 'react-icons/ti'
import {AiFillCreditCard} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {IoSchoolOutline} from 'react-icons/io5'
import {HiDownload} from 'react-icons/hi'

export default function HowItWorks() {
  return (
    <div className='p-4 w-11/12 mt-10 m-auto'>
      <h2 className='mt-5 text-center text-4xl font-bold'>COMO FUNCIONA</h2>
			<div className='flex justify-center max-w-full flex-wrap items-center flex-col lg:flex-row '>
				<div className='text-black border-2 border-black mr-0 lg:mr-10 mt-10 rounded-xl h-80 flex flex-col items-center p-6 w-4/5 lg:w-1/4'>
          <h2 className='uppercase text-center font-bold text-xl'>1º - Autorização</h2>
          <BsCheckCircle size={70}/>
          <p className='text-lg text-center p-2'>Solicite a autorização de estudo junto à Unidade Prisional.</p>
          <a target={'_blank'} href="https://www.cenedqualificando.com.br/Arquivos/Requerimento.docx" rel="noreferrer">
            <button className="bg-black hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border flex items-center border-white transition-colors hover:border-black rounded">
              BAIXAR REQUERIMENTO <HiDownload size={40}/>
            </button>
          </a>
        </div>
        <Card title={'2º - CURSO'} text={'Escolha um dos Cursos disponíveis no site.'}>
          <MdOutlineMenuBook size={70}/>
        </Card>

        <Card title={'3º - MATRÍCULA'} text={'Informe os dados Pessoais do Interno e do Responsável.'}>
          <TiEdit size={70}/>
        </Card>

        <Card title={'4º - PAGAMENTO'} text={'Escolha uma de nossas formas de pagamento na ÁREA DO ALUNO.'}>
          <AiFillCreditCard size={70}/>
        </Card>

        <Card title={'5º - ANDAMENTO'} text={'Acompanhe o histórico de andamento na ÁREA DO ALUNO.'}>
          <HiOutlineDocumentText size={70}/>
        </Card>

        <Card title={'6º - CONCLUSÃO'} text={'Após a aprovação será enviado um Certificado impresso.'}>
          <IoSchoolOutline size={70}/>
        </Card>
			</div>
    </div>
  )
}
