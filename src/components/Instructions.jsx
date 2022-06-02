import React from 'react'

export default function Instructions() {
	const listContent = [
		'Assunto: Proposta de parceria.',
		'Nome Completo.',
		'Município e estado onde reside.',
		'Contatos telefônicos: celular e residencial.',
		'Profissão ou trabalho que exerce atualmente.',
		'Qual a forma que propõe, na condição de parceiro, para contribuir no marketing e divulgação do nosso Programa de Educação nas Penitenciárias dos estados.'
	]
  return (
    <div className='border-2 border-black w-11/12 p-4 rounded-xl mt-0 m-auto'>
      <span className='font-semibold text-lg'>Amigo(a) interessado(a),</span>
			<p className='text-base mt-5'>Seja você pessoa FÍSICA ou JURÍDICA, convidamos-lhe a trabalhar conosco como parceiro no marketing e divulgação do nosso Programa de Qualificação Profissional aos Internos do Sistema Prisional Brasileiro, aplicado nos estados. Faça contato, por telefone ou via e-mail. No e-mail, escreva:</p>
			<ol className='mt-5 text-2xl'>
				{listContent.map((text, key)=>{
					return(
						<li key={key} className='mt-3'>{key+1}. {text}</li>
					)
				})}
			</ol>
    </div>
  )
}
