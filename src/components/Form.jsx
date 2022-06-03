import React from 'react'
import { useState } from 'react'
import BoxInfoContact from './BoxInfoContact'

export default function Form() {
	const [valueCpf, setValueCpf] = useState('')
	const [valueTel, setValueTel] = useState('')
	const onlyNumberF = (vl, input)=>{
    if(input === 'cpf'){
			if(!isNaN(vl)){
				console.log(vl)
				setValueCpf(vl)
				if(valueCpf.length === 3){
					setValueCpf(valueCpf.split(' '))
					console.log(valueCpf)
				}
			}
		}else{
			setValueTel(vl)
			console.log(valueTel.split(''))
		}
  }
  return (
		<div className='w-11/12 flex flex-col lg:flex-row font-bold lg:w-3/4 mt-10 m-auto p-6 border-4 border-blue-700 rounded-xl'>
			<form action="POST" autoComplete='off'>
				<div className='w-full max-w-full p-2 flex flex-wrap'>
					<div className='flex w-full justify-between flex-wrap items-center'>
						<div className='flex flex-col w-full md:w-4/5 lg:w-3/4'>
							<label htmlFor="name-form">
								Nome
							</label>
							<input id='name-form' type="text" className='border-4 p-2 rounded-md outline-none border-blue-700'/>
						</div>
						<div className='flex flex-col mt-5 lg:mt-0'>
							<label htmlFor="uf-form">UF</label>
							<select id="uf-form" className='border-blue-700 border-4 p-2 text-lg rounded-md' name="uf-form">
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
							<input type='text' id='cpf-form' onChange={(e)=>{ onlyNumberF(e.target.value, 'cpf') }} value={valueCpf} minLength={11} maxLength={11} className='border-4 p-2 rounded-md outline-none border-blue-700' />
						</div>
						
						<div className='flex flex-col mt-5'>
							<label htmlFor="tel-form">Telefone/Celular</label>
							<input value={valueTel} type="text" id='tel-form' onChange={(e)=> onlyNumberF(e.target.value, 'tel')} className='border-4 p-2 rounded-md outline-none border-blue-700'/>
						</div>

						<div  className='flex flex-col mt-5'>
							<label htmlFor="email-form">E-mail</label>
							<input type="email" id="email-form" className='border-4 p-2 rounded-md outline-none border-blue-700'/>
						</div>
					</div>

					<div className='flex w-full flex-col'>
						<label htmlFor="msg-form">Mensagem</label>
						<textarea name="msg-form" id="msg-form" cols="30" rows="10" className='border-4 border-blue-700 resize-none rounded-xl p-2 text-lg outline-none w-full'></textarea>
					</div>

					<div className='py-4 flex w-full justify-around flex-wrap'>
						<button className='bg-red-600 hover:bg-red-700 transition-colors font-bold text-white p-4 rounded-lg text-xl' onClick={()=>{window.location.href = '/'}}>CANCELAR</button>

						<button type="submit" className='bg-green-600 hover:bg-green-700 transition-colors ml-0 mt-5 lg:mt-0 md:mt-0 md:ml-5 lg:ml-5 font-bold text-white p-4 rounded-lg text-xl'>ENVIAR MENSAGEM</button>
					</div>
				</div>
			</form>
			<BoxInfoContact/>
		</div>
	)
}
