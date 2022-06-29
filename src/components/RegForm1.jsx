import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';


export default function RegForm1({data, setData}){
    let formatCharsYear = {'Y': '[0-9]','m': '[0-1]','M': '[0-9]','d': '[0-3]','D': '[0-9]'};
    let uf = [{value:"1",txt:'Acre'}, 
    {value:"2",txt:'Alagoas'}, {value:"3",txt:'Amapá'}, 
    {value:"4",txt:'Amazonas'}, {value:"5",txt:'Bahia'}, 
    {value:"6",txt:'Ceará'}, {value:"7",txt:'Distrito Federal'}, 
    {value:"8",txt:'Espírito Santo'}, {value:"9",txt:'Goiás'}, 
    {value:"10",txt:'Maranhão'}, {value:"11",txt:'Mato Grosso'}, 
    {value:"12",txt:'Mato Grosso do Sul'}, {value:"13",txt:'Minas Gerais'}, 
    {value:"14",txt:'Minas Gerais'}, {value:"15",txt:'Paraíba'}, {value:"16",txt:'Paraná'}, 
    {value:"17",txt:'Pernambuco'}, {value:"18",txt:'Piauí'}, {value:"19",txt:'Rio de Janeiro'}, 
    {value:"20",txt:'Rio Grande do Norte'}, {value:"21",txt:'Rio Grande do Sul'}, 
    {value:"22",txt:'Rondônia'}, {value:"23",txt:'Roraima'}, {value:"24",txt:'Santa Catarina'}, 
    {value:"25",txt:'São Paulo'}, {value:"26",txt:'Sergipe'}, 
    {value:"27",txt:'Tocantins'}];
    return(
        <div id='Form1'>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'nome':e.target.value.toUpperCase()}}))} value={data.aluno.nome} style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nome'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'sexo':e.target.value.toUpperCase()}}))} value={data.aluno.sexo} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='Sexo'><MenuItem value='1'>M</MenuItem><MenuItem value='2'>F</MenuItem></TextField>
                        <InputMask mask="999.999.999-99" maskChar={''} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'cpf':e.target.value}}))} value={data.aluno.cpf} id='cpf' >{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'/>}</InputMask>
                        <InputMask mask="999999999999999" maskChar={''} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'rg':e.target.value.toUpperCase()}}))} value={data.aluno.rg} id='Identidade'>{() => <TextField style={{margin:'1%'}} label='Identidade' className='inputs'  />}</InputMask>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'orgaoExpedidor':e.target.value.toUpperCase()}}))} value={data.aluno.orgaoExpedidor} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>

                        <InputMask mask='dD/mM/YYYY' maskChar={''} formatChars={formatCharsYear} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'dataNascimento':e.target.value.toUpperCase()}}))} value={data.aluno.dataNascimento} id='dataNascimento'>{() => <TextField label='Data Nascimento' className='inputs' style={{margin:'1%'}} />}</InputMask>
                        
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'naturalidade':e.target.value.toUpperCase()}}))} value={data.aluno.naturalidade} style={{margin:'1%'}} variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'ufNaturalidade':e.target.value}}))} value={data.aluno.ufNaturalidade} select style={{margin:'1%'}} variant="outlined" label="UF Naturalidade" className='inputs' id='ufNaturalidade'>
                        {uf.map((item)=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'nacionalidade':e.target.value.toUpperCase()}}))} value={data.aluno.nacionalidade} style={{margin:'1%'}} variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'endereco':e.target.value.toUpperCase()}}))} value={data.aluno.endereco} style={{margin:'1%'}} variant="outlined" label='Endereço Residencial' className='EnderecoResidencial' id='EnderecoResidencial'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'bairro':e.target.value.toUpperCase()}}))} value={data.aluno.bairro} style={{margin:'1%'}} variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'cidade':e.target.value.toUpperCase()}}))} value={data.aluno.cidade} style={{margin:'1%'}} variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'ufResidencial':e.target.value}}))} value={data.aluno.ufResidencial} select style={{margin:'1%'}} variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'>
                        {uf.map(item=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
                        <InputMask mask="99999-999" maskChar={''} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'cep':e.target.value.toUpperCase()}}))} value={data.aluno.cep} id='CEP' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' />}</InputMask>          
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'grauInstrucao':e.target.value.toUpperCase()}}))} value={data.aluno.grauInstrucao} style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'profissao':e.target.value.toUpperCase()}}))} value={data.aluno.profissao} style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'atuacaoHabilitacao':e.target.value.toUpperCase()}}))} value={data.aluno.atuacaoHabilitacao} style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'pai':e.target.value.toUpperCase()}}))} value={data.aluno.pai} style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'mae':e.target.value.toUpperCase()}}))} value={data.aluno.mae} style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
            </div>
    )
}