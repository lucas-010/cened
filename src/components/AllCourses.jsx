import React from 'react';

export default function AllCourses({data}){
    let dateInitCourse = '', calcDays='',oldDate='',testDate='';
    let date = new Date(data.dataMatricula).toLocaleDateString('pt-BR');
    let datePayment = '', dateFinalTest = '', testGrade ='', testResult='';
    if(data.statusCurso === 4 || data.statusCurso === 7){testResult = `${data.statusCursoDescricao}. Fará 2ª Prova.`}
    else{testResult=data.statusCursoDescricao}
    if(data.dataPagamento){datePayment = new Date(data.dataPagamento).toLocaleDateString('pt-BR');}
    if(data.inicioCurso) {dateInitCourse = new Date(data.inicioCurso).toLocaleDateString('pt-BR');
    calcDays = (data.curso.cargaHoraria/4); oldDate = new Date(data.inicioCurso.toString());
    testDate= new Date(oldDate.getFullYear(),oldDate.getMonth(),oldDate.getDate()+calcDays).toLocaleDateString('pt-BR');}
    if(data.ultimaProvaRealizada)
    {dateFinalTest = new Date(data.ultimaProvaRealizada.dataRecebidaProva).toLocaleDateString('pt-Br');
    testGrade = data.ultimaProvaRealizada.nota}

    return(
    <div className='lg:w-5/6 h-full'>
            <h1 className='flex p-10 justify-center items-center text-2xl font-bold'>Todos os cursos</h1>
            <div className='p-2 border-gray-400'>
            {data.map(item=>
            <div className='flex flex-col lg:p-1 border-t-2 border-gray-400'>
                <ul className='flex flex-col lg:flex-row lg:gap-6'><li>Curso: <b>{item.curso.codigo}</b> - {item.curso.nome}</li> <li>CargaHorária: <b>{item.curso.cargaHoraria}</b></li></ul>
                <ul className='flex flex-col lg:flex-row lg:gap-6'><li>Matrícula: <b>{item.numeroMatricula ? item.numeroMatricula : 'N/D'}</b></li><li>Início do Curso: <b>{item.inicioCurso ? new Date(item.inicioCurso).toLocaleDateString('pt-BR'):'Aguardando'}</b></li>
                <li>Término: <b>{item.terminoCurso ? new Date(item.terminoCurso).toLocaleDateString('pt-BR') : 'Indefinido'}</b></li><li>Financeiro: <b>{item.statusFinanceiroDescricao}</b></li>
                <li>Situação: <b>{item.statusCursoDescricao}</b></li>
                </ul>
            </div>
            )}
            </div>
        </div>
    )
}