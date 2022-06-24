import React from 'react'
import Card from 'react-animated-3d-card'

export default function Instructions() {
  return (
    <div className='w-11/12 p-4 rounded-xl mt-0 m-auto'>
      <span className='font-semibold text-xl'>Amigo(a) interessado(a),</span>
			<p className='text-xl mt-5'>Seja você pessoa FÍSICA ou JURÍDICA, convidamos-lhe a trabalhar conosco como parceiro no marketing e divulgação do nosso Programa de Qualificação Profissional as Pessoas Privadas de Liberdade, aplicado nos estados. Faça contato, por telefone ou via e-mail. No e-mail, escreva:</p>
			<div className='flex lg:flex-row flex-col justify-between'>
			<div className='outterCard'>
				<Card style={{width: '20vw', marginTop: '20px',padding: '10px', backgroundColor: '#E5E7EB', border: '1px black solid',display: 'flex', flexDirection: 'column', justify: 'space-betewenn'}}>
					<p>1.Assunto: Proposta de parceria.</p>
					<p className='mt-5'>2.Nome Completo.</p>
				</Card>
			</div>

			<div className='outterCard'>
				<Card style={{width: '20vw', marginTop: '20px',padding: '10px', backgroundColor: '#E5E7EB', border: '1px black solid',display: 'flex', flexDirection: 'column', justify: 'space-betewenn'}}>
					<p>3.Município e estado onde reside.</p>
					<p className='mt-5'>4.Contatos telefônicos: celular e residencial.</p>
				</Card>
			</div>

			<div className='outterCard'>
				<Card style={{width: '20vw', marginTop: '20px',padding: '10px', backgroundColor: '#E5E7EB', border: '1px black solid',display: 'flex', flexDirection: 'column', justify: 'space-betewenn'}}>
					<p>5.Profissão ou trabalho que exerce atualmente.</p>
					<p className='mt-5'>6.Descreva a sua proposta.</p>
				</Card>
			</div>
			</div>
    </div>
  )
}
