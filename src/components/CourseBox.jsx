import React, { useState } from 'react'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'

export default function CourseBox({id, image ,title, time, price, addCourseList, removeCourseList}) {
    const [selectBox, setSelectBox] = useState(false)
    const [visibleContent, setVisibleContent] = useState(false)
  return (
    <div className={`flex flex-col w-11/12 mt-10 items-center transition-all bg-gray-300 rounded-xl p-4`}>
        <div className='flex lg:flex-row flex-col items-center'>
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
                <button onClick={()=> setVisibleContent(!visibleContent)} className='text-xl font-bold bg-blue-500 hover:bg-blue-600 transition-colors p-2 text-white rounded-lg'>Saiba Mais</button>
                <button onClick={()=> {setSelectBox(!selectBox); selectBox ? removeCourseList(id) : addCourseList(id, image ,title, time, price)}} className='flex mt-2 lg:mt-0 lg:flex-row flex-col ml-0 bg-[#0D9F16] text-white p-2 rounded-lg lg:ml-5 items-center text-xl font-bold'>Selecione aqui {selectBox ? <MdCheckBox color='yellow' className='ml-2' size={50}/> : <MdOutlineCheckBoxOutlineBlank color='white' className='ml-2' size={50}/>}</button>
            </div>
        </div>

        <div>
        </div>
        </div>
        <div className={`${visibleContent ? 'flex' : 'hidden h-0'} transition-all justify-between w-full`}>
            <div className='flex justify-between items-center flex-col text-white lg:flex-row w-full h-full'>
                <div className='w-11/12 bg-[#888787] text-base font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2 border-transparent hover:text-black transition-colors'>
                    <span>Objetivo Geral</span>
                </div>

                <div className='w-11/12 bg-[#888787] font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 text-base lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2  border-transparent hover:text-black transition-colors'>
                    <span>Objetivos de Aprendizagem</span>
                </div>

                <div className='w-11/12 bg-[#888787] font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 text-base lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2  border-transparent hover:text-black transition-colors'>
                <span>Conteúdo Programático</span>
                </div>
            </div>
        </div>
    </div>
  )
}
