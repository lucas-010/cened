import React, { useEffect, useState } from 'react'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import './ContentText.css'
import { MdCheckBox } from 'react-icons/md'

export default function CourseBox({id, content, image ,title, time, price, addCourseList, removeCourseList, code, coursesSelected}) {
    const [selectBox, setSelectBox] = useState(false)
    const [visibleContent, setVisibleContent] = useState(false)
    let [buttonId, setButtonId] = useState(1)
    useEffect(()=>{
        if(coursesSelected.length===0){setSelectBox(false);}
    },
    [coursesSelected])
  return (
    <div style={{minWidth:'57vw'}} className={`flex flex-col lg:w-2/3 w-11/12 mt-10 transition-all bg-gray-300 rounded-xl p-4`}>
        <div className='flex lg:flex-row flex-col items-center'>
        <div className='w-11/12 flex justify-center lg:w-1/6'>
            <img src={image} className='rounded-xl' alt="" />
        </div>
        <div className='flex flex-col lg:text-left text-center p-4'>
        <h1 className='text-xl font-bold'>{code} - {title}</h1>

        <div className='font-bold text-xl'>
            <h2>Carga horária: {time} h</h2>
            <h2>Investimento: R${price},00</h2>
        </div>
            <div className='flex mt-2 text-white lg:flex-row flex-col'>
                <button onClick={()=> setVisibleContent(!visibleContent)} className='text-xl font-bold bg-blue-500 hover:bg-blue-600 transition-colors p-2 text-white rounded-lg'>Saiba Mais</button>
                <button onClick={()=> {setSelectBox(!selectBox); selectBox ? removeCourseList(id) : addCourseList(id, image ,title, time, price)}} className='flex mt-2 lg:mt-0 ml-0 bg-[#0D9F16] text-white p-2 rounded-lg lg:ml-5 items-center text-xl justify-center font-bold'>Selecione aqui {selectBox ? <MdCheckBox color='yellow' className='ml-2' size={50}/> : <MdOutlineCheckBoxOutlineBlank color='white' className='ml-2' size={50}/>}</button>
            </div>
        </div>

        <div>
        </div>
        </div>
        <div className={`${visibleContent ? 'flex flex-col' : 'hidden'} transition-all justify-between w-full`}>
            <div className="ContentText mt-10 bg-gray-200 p-4 rounded-lg">
                {content}
            </div>
        </div>
    </div>
  )
}
