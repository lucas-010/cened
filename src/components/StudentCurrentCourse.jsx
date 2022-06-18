import React from 'react'

export default function StudentCurrentCourse(){
    return(
        <div className='lg:w-5/6'>
            <h1 className='flex h-1/6 justify-center items-center text-2xl font-bold'>Curso atual</h1>
            <div className='w-full h-5/6 flex flex-col lg:flex-row border-8 border-white rounded-xl flex-wrap'>
                <div className='text-xl lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto border-2 border-black text-center font-bold'>Trâmite do Curso</div>
                <div className='text-xl lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto border-2 lg:border-l-0 border-black text-center font-bold'>Trâmite da Prova Final</div>
            </div>
        </div>
    )
}