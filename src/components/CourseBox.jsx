import React, { useState } from 'react'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import {MdOutlineCheckBox} from 'react-icons/md'

export default function CourseBox({id, image ,title, time, price}) {
    const [selectBox, setSelectBox] = useState(false)
  return (
    <div className='flex lg:flex-row flex-col mt-10 items-center bg-gray-300 rounded-xl p-4'>
        <div className='w-11/12 flex justify-center md:w-1/6 lg:w-1/6'>
            <img src={image} className='rounded-xl' alt="" />
        </div>
        <div className='flex flex-col lg:text-left text-center p-4'>
        <h1 className='text-xl font-bold'>{id} - {title}</h1>

        <div className='font-bold text-xl'>
            <h2>Carga horária: {time} h</h2>
            <h2>Investimento: R${price},00</h2>
        </div>
            <div className='flex mt-2 text-white lg:flex-row flex-col'>
                <button className='text-xl font-bold bg-blue-500 hover:bg-blue-600 transition-colors p-2 text-white rounded-lg'>Saiba Mais</button>
                <button onClick={()=> setSelectBox(!selectBox)} className='flex mt-2 lg:mt-0 lg:flex-row flex-col ml-0 bg-[#0D9F16] text-white p-2 rounded-lg lg:ml-5 items-center text-xl font-bold'>Selecione aqui {selectBox ? <MdOutlineCheckBox color='#fff' className='ml-2' size={50}/> : <MdOutlineCheckBoxOutlineBlank color='white' className='ml-2' size={50}/>}</button>
            </div>
        </div>
    </div>
  )
}
