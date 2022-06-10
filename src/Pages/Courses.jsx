import React, {useEffect} from 'react'
import Title from '../components/Title'
import Flags from '../components/Flags'
import Footer from '../components/Footer'

export default function Courses() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	  }, [])
  return (
    <div className='absolute bg-[#EBECF0] mt-10 w-screen min-h-screen'>
			<Title text={'CURSOS SUGERIDOS POR ESTADO'}>
				SELECIONE O ESTADO ONDE LOCALIZA-SE A PENITENCIÁRIA DO INTERNO/CUSTODIADO.
			</Title>
			<Flags/>
			<Footer/>
	</div>
  )
}
