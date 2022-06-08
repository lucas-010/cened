import React, {useEffect} from 'react'
import Title from '../components/Title'
import Flags from '../components/Flags'

export default function Courses() {
	useEffect(()=>{
		window.scrollTo(0, 0)
	  }, [])
  return (
    <div style={{background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(240,230,140,1) 100%)'}} className='absolute mt-10 pb-4 w-screen'>
			<Title text={'CURSOS SUGERIDOS POR ESTADO'}>
				SELECIONE O ESTADO ONDE LOCALIZA-SE A PENITENCIÁRIA DO INTERNO/CUSTODIADO.
			</Title>
			<Flags/>
		</div>
  )
}
