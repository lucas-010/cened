import React from 'react'
import Form from '../components/Form'
import Title from '../components/Title'

export default function Contact() {
  return (
    <div className='absolute pb-4 mt-10 w-screen'>
			<Title text={'CONTATO ESCOLA CENED'}>
        PREENCHA O FORMULÁRIO ABAIXO PARA ENVIAR MENSAGEM A ESCOLA, OU LIGUE EM UM DOS TELEFONES INFORMADOS.
			</Title>
      <Form/>
    </div>
  )
}
