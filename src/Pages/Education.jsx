import React, {useEffect} from 'react'
import SelectContent from '../components/SelectContent'
import Title from '../components/Title'

export default function Education() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='absolute mt-10 pb-4 w-screen'>
			<Title text={'Programa de Qualificação Profissional às Pessoas Privadas de Liberdade'}>
      </Title>
			<SelectContent/>
    </div>
  )
}
