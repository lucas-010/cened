import React, { useState } from 'react'
import {MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'

export default function CourseBox({id, image ,title, time, price, addCourseList, removeCourseList}) {
    const [selectBox, setSelectBox] = useState(false)
    const [visibleContent, setVisibleContent] = useState(false)
    let [buttonId, setButtonId] = useState('')
  return (
    <div className={`flex flex-col lg:w-2/3 w-11/12 mt-10 items-center transition-all bg-gray-300 rounded-xl p-4`}>
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
        <div className={`${visibleContent ? 'flex flex-col' : 'hidden'} transition-all justify-between w-full`}>
            <div className='flex justify-between items-center flex-col text-white lg:flex-row w-full h-full'>
                <button onClick={()=>{buttonId===1 ? setButtonId(''): setButtonId(1)}} className={`${buttonId ===1 ? 'bg-transparent border-gray-900 text-black' :'bg-[#888787]'} w-11/12 text-base font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2 border-transparent hover:text-black transition-colors`}>
                    Objetivo Geral  
                </button>

                <button onClick={()=>{buttonId===2 ? setButtonId(''): setButtonId(2)}} className={`${buttonId ===2 ? 'bg-transparent border-gray-900 text-black' :'bg-[#888787]'} w-11/12 text-base font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2 border-transparent hover:text-black transition-colors`}>
                    Objetivos de Aprendizagem   
                </button>

                <button onClick={()=>{buttonId===3 ? setButtonId(''): setButtonId(3)}} className={`${buttonId ===3 ? 'bg-transparent border-gray-900 text-black' :'bg-[#888787]'} w-11/12 text-base font-semibold md:h-1/4 lg:w-1/5 rounded-lg p-4 text-center mt-5 lg:mt-0 lg:mr-4 cursor-pointer hover:border-black hover:bg-transparent border-2 border-transparent hover:text-black transition-colors`}>
                    Conteúdo Programático   
                </button>
            </div>
            <div className={`${buttonId ===1 ? '' : 'hidden'}`}>
                <p className='lg:max-w-5xl lg:text-lg'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className={`${buttonId ===2 ? '' : 'hidden'}`}>
                <p className='lg:max-w-5xl lg:text-lg'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className={`${buttonId ===3 ? '' : 'hidden'}`}>
                <p className='lg:max-w-5xl lg:text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
        </div>
    </div>
  )
}
