import React from 'react'
import { useState } from 'react'
import BoxInfoContact from './BoxInfoContact'

export default function Form() {
	
	const [valueCpf, setValueCpf] = useState('')
	const [valuePhone, setValuePhone] = useState('')
	const [valueSmartPhone, setValueSmartPhone] = useState('')
	const [valueEmail, setValueEmail] = useState('')
	const [message, setMessage] = useState('')
	const [uf, setUf] = useState('')
	function cpfFormat(cpf){
		cpf = cpf.replace(/[^\d]/g, "");
		setValueCpf(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
	}

	function phoneFormat(phone){
		setValuePhone(phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1)$2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+?$/, '$1'))
	}

	function smartPhoneFormat(phone){
		setValueSmartPhone(phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1)$2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+?$/, '$1'))
	}


	function clearElements(){
		setValueCpf('')
		setValuePhone('')
		setValueSmartPhone('')
		setValueEmail('')
		setMessage('')
	}

	function submitForm(){
		if(valueCpf !== '' && valuePhone || valueSmartPhone !== '' && valueEmail !== '' &&  message !== ''){
			alert(`CPF: ${valueCpf}`)
		}else{
			alert('Itens Incompletos')
		}
	}
  return (
		<div className='w-11/12 flex flex-col lg:flex-row font-bold lg:w-3/4 mt-10 m-auto p-6 border-4 border-gray-400 rounded-xl'>
			<form autoComplete='off'>
				<div className='w-full max-w-full p-2 flex flex-wrap'>
					<div className='flex w-full justify-between flex-wrap items-center'>
						<div className='flex flex-col w-full md:w-4/5 lg:w-3/4'>
							<label htmlFor="name-form">
								Nome
							</label>
							<input id='name-form' type="text" className='border-4 p-2 rounded-md outline-none border-gray-400'/>
						</div>
						<div className='flex flex-col mt-5 lg:mt-0'>
							<label htmlFor="uf-form">UF</label>
							<select onChange={(e)=> setUf(e.target.value)} value={uf} id="uf-form" className='border-gray-400 border-4 p-2 text-lg rounded-md' name="uf-form">
								<option value="AC">Acre</option>
								<option value="AL">Alagoas</option>
								<option value="AP">Amapá</option>
								<option value="AM">Amazonas</option>
								<option value="BA">Bahia</option>
								<option value="CE">Ceará</option>
								<option value="DF">Distrito Federal</option>
								<option value="ES">Espírito Santo</option>
								<option value="GO">Goiás</option>
								<option value="MA">Maranhão</option>
								<option value="MT">Mato Grosso</option>
								<option value="MS">Mato Grosso do Sul</option>
								<option value="MG">Minas Gerais</option>
								<option value="PA">Pará</option>
								<option value="PB">Paraíba</option>
								<option value="PR">Paraná</option>
								<option value="PE">Pernambuco</option>
								<option value="PI">Piauí</option>
								<option value="RJ">Rio de Janeiro</option>
								<option value="RN">Rio Grande do Norte</option>
								<option value="RS">Rio Grande do Sul</option>
								<option value="RO">Rondônia</option>
								<option value="RR">Roraima</option>
								<option value="SC">Santa Catarina</option>
								<option value="SP">São Paulo</option>
								<option value="SE">Sergipe</option>
								<option value="TO">Tocantins</option>
							</select>
						</div>
					</div>

					<div className='flex w-4/5 justify-between flex-wrap ml-0 m-5'>
						<div className='flex flex-col mt-5'>
							<label htmlFor="cpf-form">CPF</label>
							<input type='text' id='cpf-form' onChange={(e)=> cpfFormat(e.target.value)} value={valueCpf} maxLength={14} className='border-4 p-2 rounded-md outline-none border-gray-400' />
						</div>
						
						<div className='flex flex-col mt-5'>
							<label htmlFor="tel-form">Telefone Fixo</label>
							<input value={valuePhone} onChange={(e)=> phoneFormat(e.target.value)} maxLength={14} type="text" id='tel-form' className='border-4 p-2 rounded-md outline-none border-gray-400'/>
						</div>

						<div className='flex flex-col mt-5'>
							<label htmlFor="smart-form">Celular</label>
							<input type="text" value={valueSmartPhone} onChange={(e)=> {smartPhoneFormat(e.target.value)}} maxLength={14} id='smart-form' className='border-4 p-2 rounded-md outline-none border-gray-400'/>
						</div>

					</div>
					<div  className='flex flex-col mt-2 w-11/12'>
						<label htmlFor="email-form">E-mail</label>
						<input value={valueEmail} onChange={(e)=> setValueEmail(e.target.value)} type="email" id="email-form" className='border-4 p-2 rounded-md outline-none border-gray-400'/>
					</div>

					<div className='flex w-full flex-col mt-5'>
						<label htmlFor="msg-form">Mensagem</label>
						<textarea value={message} onChange={(e)=> setMessage(e.target.value)} name="msg-form" id="msg-form" cols="30" rows="10" className='border-4 border-gray-400 resize-none rounded-xl p-2 text-lg outline-none w-full'></textarea>
					</div>

					<div className='py-4 flex w-full justify-around flex-wrap'>
						<button type='reset' className='bg-red-600 hover:bg-red-700 transition-colors font-bold text-white p-4 rounded-lg text-xl' 
						onClick={()=>clearElements()}>Limpar</button>

						<button type='button' onClick={()=> submitForm()} className='bg-green-600 hover:bg-green-700 transition-colors ml-0 mt-5 lg:mt-0 md:mt-0 md:ml-5 lg:ml-5 font-bold text-white p-4 rounded-lg text-xl'>ENVIAR MENSAGEM</button>
						
					</div>
				</div>
			</form>
			<BoxInfoContact/>
			
		</div>
	)
}
