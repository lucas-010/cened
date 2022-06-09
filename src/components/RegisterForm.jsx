import React from 'react'
import './RegisterForm.css';
import TextField from '@mui/material/TextField';

export default function RegisterForm(){
    return(
         <div className='absolute'>
            <form className='text-xl ml-10 flex flex-col'>
                    <h1 className='font-bold'> 1 - DADOS DO INTERNO</h1>
                    <div id='Form1'>
                        <TextField variant="outlined" label='Nome' className='inputs' id='nomeAluno'></TextField>
                        <TextField variant="outlined" label='Sexo' className='inputs' id='SexoAluno'></TextField>
                        <TextField variant="outlined" label='CPF' className='inputs' id='cpfAluno'></TextField>
                        <TextField variant="outlined" label='Identidade' className='inputs' id='IdentidadeAluno'></TextField>
                        <TextField variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>
                        <TextField variant="outlined" label='Data Nascimento' className='inputs' id='DataNascimento'></TextField>
                        <TextField variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField variant="outlined" label='UF Naturalidade' className='inputs' id='ufNaturalidade'></TextField>
                        <TextField variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField variant="outlined" label='Endereço Residencial' className='inputs' id='EnderecoResidencial'></TextField>
                        <TextField variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'></TextField>
                        <TextField variant="outlined" label='CEP' className='inputs' id='CEP'></TextField>
                        <TextField variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField variant="outlined" label='Local de Trabalho' className='inputs' id='localTrabalho'></TextField>
                        <TextField variant="outlined" label='Cidade de Trabalho' className='inputs' id='cidadeTrabalho'></TextField>
                        <TextField variant="outlined" label='UF de Trabalho' className='inputs' id='ufTrabalho'></TextField>
                    </div>
                    <h2 className='font-bold'>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
                    <div id='Form2'>
                
                        <TextField variant="outlined" label='Nome do Responsável (seu nome)' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Sexo' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Vínculo' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='CPF' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='RG' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Órgão Expedidor' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Celular' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Fone Residencial' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Fone Trabalho' className='inputs' id='ufTrabalho'></TextField>
                        <TextField variant="outlined" label='Email' className='inputs' id='ufTrabalho'></TextField>  
                    </div>
                    <h3 className='font-bold'>3 - DADOS PRISIONAIS</h3>
                    <div id='Form3'>
                    
                        <TextField variant="outlined" label='UF' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField variant="outlined" label='Penitenciária' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField variant="outlined" label='Bloco' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField variant="outlined" label='Ala' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField variant="outlined" label='Cela' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField variant="outlined" label='Condição' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField variant="outlined" label='Regime' className='inputs' id='ufTrabalho'></TextField>  
                    </div>
                    <h4 className='font-bold'>4 - DADOS GERAIS</h4>
                        <div id='outterForm4'>
                        <h1 className='flex'>Crie a senha para acessar a Área do Aluno</h1>
                        <div id='Form4'>
                            <TextField variant="outlined" type='password' id='senha' label='Senha' className='lg:w-1/5' style={{marginRight:'10px'}}></TextField>
                            <TextField variant="outlined" type='password' id='confirmaSenha' label='Confirmar senha' className='lg:w-1/5'></TextField>
                        </div>
                    </div>
            </form>
        </div>
    )
}