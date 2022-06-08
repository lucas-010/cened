import React, {useEffect} from 'react'
import BoxContact from '../components/BoxContact'
import Instructions from '../components/Instructions'
import Title from '../components/Title'

export default function WorkWithUs() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='absolute w-screen'>
			<Title text={'TRABALHE CONOSCO!'}/>
			<Instructions/>
			<BoxContact/>
    </div>
  )
}
