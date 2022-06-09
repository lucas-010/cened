import React from 'react'
import './RegisterForm.css';

export default function RegisterForm(){
    return(
    <div>
        <form className='text-xl font-bold'>
            <h1> 1 - DADOS DO INTERNO</h1>
                <div id='Form1'>
                    <input lebeled='Nome do aluno(Interno)' id='nomeAluno'></input>
                    <input lebeled='Sexo'></input>
                    <input lebeled='CPF'></input>
                    <input lebeled='Órgão Expedidor'></input>
                    <input lebeled='Data Nascimento'></input>
                    <input lebeled='Naturalidade'></input>
                    <input lebeled='UF Naturalidade'></input>
                    <input lebeled='Nacionalidade'></input>
                    <input lebeled='Endereço residencial'></input>
                    <input lebeled='Bairro'></input>
                    <input lebeled='Cidade'></input>
                    <input lebeled='UF Residencial'></input>
                    <input lebeled='CEP'></input>
                    <input lebeled='Grau de Instrução'></input>
                    <input lebeled='Profissão/Cargo/Função'></input>
                    <input lebeled='Área de Atuação/Habilitação'></input>
                    <input lebeled='Local de Trabalho'></input>
                    <input lebeled='Cidade de Trabalho'></input>
                    <input lebeled='UF de Trabalho'></input>
                </div>
            <h2>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
            <div id='Form2'>
                    <input lebeled='Nome do aluno(Interno)' id='nomeAluno'></input>
                    <input lebeled='Sexo'></input>
                    <input lebeled='CPF'></input>
                    <input lebeled='Órgão Expedidor'></input>
                    <input lebeled='Data Nascimento'></input>
                    <input lebeled='Naturalidade'></input>
                    <input lebeled='CPF'></input>
                    <input lebeled='CPF'></input>
                    <input lebeled='CPF'></input>
                    <input lebeled='CPF'></input>
                </div>
            <h3>3 - DADOS PRISIONAIS</h3>
            <div id='Form3'>
                    <input lebeled='Nome do aluno(Interno)' id='nomeAluno'></input>
                    <input lebeled='Sexo'></input>
                    <input lebeled='CPF'></input>
                    <input lebeled='Órgão Expedidor'></input>
                    <input lebeled='Data Nascimento'></input>
                    <input lebeled='Naturalidade'></input>
                    <input lebeled='CPF'></input>
            </div>
            <h4>4 - DADOS GERAIS</h4>
            <div id='outterForm4'>
                <h1 className='flex'>Crie a senha para acessar a Área do Aluno</h1>
                <div id='Form4'>
                    <input lebeled='Senha'></input>
                    <input lebeled='Confirmar senha'></input>
                </div>
            </div>
        </form>
    </div>
    )
}