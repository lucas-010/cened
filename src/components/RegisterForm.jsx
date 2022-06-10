import React from 'react'
import './RegisterForm.css';
import TextField from '@mui/material/TextField';

export default function RegisterForm(){
    return(
         <div className='absolute'>
            <form className='text-xl ml-10 flex flex-col'>
                    <h1 className='titles'> 1 - DADOS DO REEDUCANDO</h1>
                    <div id='Form1'>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nomeAluno'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='SexoAluno'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='CPF' className='inputs' id='cpfAluno'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Identidade' className='inputs' id='IdentidadeAluno'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Data Nascimento' className='inputs' id='DataNascimento'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='UF Naturalidade' className='inputs' id='ufNaturalidade'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Endereço Residencial' className='EnderecoResidencial' id='EnderecoResidencial'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' id='CEP'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
                    </div>
                    <h2 className='titles'>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
                    <div id='Form2'>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Nome do Responsável (seu nome)' className='nome' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Vínculo' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='CPF' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='RG' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Celular' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Fone Residencial' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Fone Trabalho' className='inputs' id='ufTrabalho'></TextField>
                        <TextField style={{margin:'1%'}} variant="outlined" label='Email' className='email' id='ufTrabalho'></TextField>  
                    </div>
                    <h3 className='titles'>3 - DADOS PRISIONAIS</h3>
                    <div id='Form3'>
                    <TextField style={{margin:'1%'}} variant="outlined" label='INFOPEN' className='inputs' id='infopen'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufTrabalho'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Penitenciária' className='penitenciaria' id='ufTrabalho'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Bloco' className='line5' id='ufTrabalho'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Ala' className='line5' id='ufTrabalho'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Cela' className='line5' id='ufTrabalho'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Condição' className='line5' id='ufTrabalho'></TextField>  
                        <TextField style={{margin:'1%'}} variant="outlined" label='Regime' className='line5' id='ufTrabalho'></TextField>  
                    </div>
                    <h4 className='titles'>4 - DADOS GERAIS</h4>
                        <div id='outterForm4'>
                        <h1 className='flex'>Crie a senha para acessar a Área do Aluno</h1>
                        <div id='Form4'>
                            <TextField style={{margin:'1%'}} variant="outlined" type='password' id='senha' label='Senha' className='lg:w-1/5'></TextField>
                            <TextField style={{margin:'1%'}} variant="outlined" type='password' id='confirmaSenha' label='Confirmar senha' className='lg:w-1/5'></TextField>
                        </div>
                    </div>
            </form>
        </div>
    )
}