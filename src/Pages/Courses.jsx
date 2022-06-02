import React from 'react'
import Title from '../Components/Title'
import Flags from '../Components/Flags'

export default function Courses() {
  return (
    <div className='absolute mt-10 pb-4 w-screen'>
			<Title text={'CURSOS SUGERIDOS POR ESTADO'}>
				SELECIONE O ESTADO ONDE LOCALIZA-SE A PENITENCIÁRIA DO INTERNO/CUSTODIADO.
			</Title>
			<Flags/>
		</div>
  )
}
