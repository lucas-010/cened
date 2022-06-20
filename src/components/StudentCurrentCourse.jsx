import React from 'react'

export default function StudentCurrentCourse({studentData}){
    var data = new Date(studentData.dataMatricula).toLocaleDateString();
    return(
        <div className='lg:w-5/6'>
            <h1 className='flex h-1/6 justify-center items-center text-2xl font-bold'>Curso atual</h1>
            <div className='w-full h-5/6 flex flex-col lg:flex-row border-8 border-white rounded-xl flex-wrap'>
                <div className='lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto border-2 border-black'>
                    <p className='text-xl text-center font-bold'>Trâmites da Matrícula e do Curso</p>
                    <h1 className='border-2'>A pré-matrícula foi recebida/registrada na Escola CENED em:<b>{data}</b></h1>
                    </div>
                <div className='text-xl lg:w-1/2 p-2 h-72 overflow-auto lg:h-auto border-2 lg:border-l-0 border-black text-center font-bold'>Trâmite da Prova Final</div>
            </div>
        </div>
    )
}