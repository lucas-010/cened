import React, { useEffect } from 'react'
import './RegisterForm.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Checkbox, MenuItem } from '@mui/material';
import { FormControl, Collapse, Alert } from '@mui/material'
import InputMask from 'react-input-mask';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function RegisterForm(){
    let api = process.env.REACT_APP_API_KEY
    let [alert, setAlert] = useState(false),
    [alertTxt, setAlertTxt] = useState(''),
    [data, setData] = useState({aluno:{
    nome: '', sexo: '',
    cpf: '',rg: '', orgaoExpedidor: '',
    dataNascimento: '', naturalidade: '',
    ufNaturalidade: '',nacionalidade: '',
    endereco: '', bairro: '',
    cidade: '', ufResidencial: '',
    cep: '', senha: '', confirmarSenha: '',
    celular: '', foneResidencial: '', 
    foneComercial: '',email: '', 
    nomePreposto: '', vinculo :'',
    sexoPreposto: '', cpfPreposto: '',
    rgPreposto: '', orgaoExpedidorPreposto: '',
    grauInstrucao: '', atuacaoHabilitacao: '',
    profissao: '', idPenitenciaria: '',
    bloco: '', ala: '',  cela: '',
    condicaoPreso: '', regime: '',
    infopen: '', mae: '', pai: ''}, 
    penitenciaria:{idPenitenciaria:'', uf: ''}});
    let uf = [{value:"1"}, {txt:'Acre'}, {value:"2"}, {txt:'Alagoas'}, {value:"3"}, {txt:'Amapá'}, {value:"4"}, {txt:'Amazonas'}, {value:"5"}, {txt:'Bahia'}, {value:"6"}, {txt:'Ceará'}, {value:"7"}, {txt:'Distrito Federal'}, {value:"8"}, {txt:'Espírito Santo'}, {value:"9"}, {txt:'Goiás'}, {value:"10"}, {txt:'Maranhão'}, {value:"11"}, {txt:'Mato Grosso'}, {value:"12"}, {txt:'Mato Grosso do Sul'}, {value:"13"}, {txt:'Minas Gerais'}, {value:"14"}, {txt:'Pará'}, {value:"15"}, {txt:'Paraíba'}, {value:"16"}, {txt:'Paraná'}, {value:"17"}, {txt:'Pernambuco'}, {value:"18"}, {txt:'Piauí'}, {value:"19"}, {txt:'Rio de Janeiro'}, {value:"20"}, {txt:'Rio Grande do Norte'}, {value:"21"}, {txt:'Rio Grande do Sul'}, {value:"22"}, {txt:'Rondônia'}, {value:"23"}, {txt:'Roraima'}, {value:"24"}, {txt:'Santa Catarina'}, {value:"25"}, {txt:'São Paulo'}, {value:"26"}, {txt:'Sergipe'}, {value:"27"}, {txt:'Tocantins'}]


    let [generalClauses, setGeneralClauses] = useState(false),
    valueElements = Object.keys(data.aluno);
    let [listElements, setListElements] = useState({});
    let emptyElements = [],
    formatCharsYear = {'Y': '[0-9]','m': '[0-1]','M': '[0-9]','d': '[0-3]','D': '[0-9]'};
    useEffect(()=>{setListElements(Object.assign(data))},[])
    useEffect(()=>{valueElements.forEach(vl=>{if(data.aluno[vl] === '' || data.penitenciaria[vl]){emptyElements.push(vl.replace(/([A-Z])/g, ' $1'));}})},[data])
    
    function clearElements(){valueElements.forEach(vl=>{setData(listElements)})}
        
    console.log(data);

    function Submit(){
        let confirmarSenha = data.aluno.senha === data.aluno.confirmarSenha;



        if(confirmarSenha && !emptyElements.length > 0 && generalClauses){
            //setData((data)=>({...data, penitenciaria:{res.data}}))
            //axios.post(`${apialunos`,data)
            setTimeout(function(){alert('Registrado com sucesso!')}, 500)}
            window.location.href=`login`;
            
            
            
            if(emptyElements.length > 0){
            setAlert(true);
            setAlertTxt(`Itens incompletos: ${emptyElements}`)}
        if(!confirmarSenha && !emptyElements.length > 0){
            setAlert(true);
            setAlertTxt('As senhas não coincidem!');}
        if(!emptyElements.length > 0 && !generalClauses){
            setAlert(true);
            setAlertTxt('Você deve aceitar as cláusulas gerais para continuar');}}
    return(
         <div className='flex flex-col mt-10'>
            <FormControl style={{fontSize:'20px', marginLeft:'40px'}}>
                    <h1 className='titles'> 1 - DADOS DO REEDUCANDO</h1>
                    <div id='Form1'>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'nome':e.target.value.toUpperCase()}}))} value={data.aluno.nome} style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nome'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'sexo':e.target.value.toUpperCase()}}))} value={data.aluno.sexo} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='Sexo'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
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
                        <InputMask mask="99999-999" maskChar={''} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'Cep':e.target.value.toUpperCase()}}))} value={data.aluno.Cep} id='CEP' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' />}</InputMask>          
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'grauInstrucao':e.target.value.toUpperCase()}}))} value={data.aluno.grauInstrucao} style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'profissao':e.target.value.toUpperCase()}}))} value={data.aluno.profissao} style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'atuacaoHabilitacao':e.target.value.toUpperCase()}}))} value={data.aluno.atuacaoHabilitacao} style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'pai':e.target.value.toUpperCase()}}))} value={data.aluno.pai} style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'mae':e.target.value.toUpperCase()}}))} value={data.aluno.mae} style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
                    </div>
                    <h2 className='titles'>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
                    <div id='Form2'>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'nomePreposto':e.target.value.toUpperCase()}}))} value={data.aluno.nomePreposto} style={{margin:'1%'}} variant="outlined" label='Nome do Responsável (seu nome)' className='nome' id='nomePreposto'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'sexoPreposto':e.target.value.toUpperCase()}}))} value={data.aluno.sexoPreposto} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='sexoPreposto'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'vinculo':e.target.value}}))} select value={data.aluno.vinculo} style={{margin:'1%'}} variant="outlined" label='Vínculo' className='inputs' id='vinculoPreposto'>
                            <MenuItem value='FAMILIAR'>Familiar</MenuItem><MenuItem value='ADVOGADO'>Advogado</MenuItem><MenuItem value='VISITANTE'>Visitante</MenuItem><MenuItem value='NÚCLEO DE ENSINO PENITENCIÁRIO'>Núcleo de Ensino Penitenciário</MenuItem><MenuItem value='AGENTE PENITENCIÁRIO'>Agente Penitenciário</MenuItem><MenuItem value='PEDAGOOG PENITENCIÁRIO'>Pedagogo Penitenciário</MenuItem></TextField>
                        <InputMask mask='999.999.999-99' maskChar={''} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'cpfPreposto':e.target.value}}))} value={data.aluno.cpfPreposto} id='cpfPreposto'>{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'  />}</InputMask>
                        <InputMask mask="999999999999999" maskChar={''} onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'rgPreposto':e.target.value.toUpperCase()}}))} value={data.aluno.RgPreposto}  id='rgPreposto'>{() => <TextField variant="outlined" label='RG' className='inputs' style={{margin:'1%'}}/>}</InputMask>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'orgaoExpedidorPreposto':e.target.value.toUpperCase()}}))} value={data.aluno.orgaoExpedidorPreposto} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgExpPreposto'></TextField>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'celular':e.target.value}}))} value={data.aluno.celular} maskChar={''} id='celular' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Celular' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'foneResidencial':e.target.value}}))} value={data.aluno.foneResidencial} maskChar={''} id='foneResidPreposto' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Residencial' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'foneComercial':e.target.value.toUpperCase()}}))} value={data.aluno.foneComercial} maskChar={''} id='foneTrapPreposto'>{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Trabalho' className='inputs'/>}</InputMask>

                        <TextField refs='email' type='email' onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'email':e.target.value.toUpperCase()}}))} value={data.aluno.email} placeholder="email@example.com" style={{margin:'1%'}} variant="outlined" label='Email' className='email' id='emailPreposto'></TextField>  
                    </div>
                    <h3 className='titles'>3 - DADOS PRISIONAIS</h3>
                    <div id='Form3'>
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'infopen':e.target.value.toUpperCase()}}))} value={data.aluno.infopen} style={{margin:'1%'}} variant="outlined" label='INFOPEN' className='inputs' id='infopen'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'uf':e.target.value}}))} value={data.penitenciaria.uf} select style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufPris'>
                        {uf.map(item=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'idPenitenciaria':e.target.value}}))} type='number' value={data.penitenciaria.idPenitenciaria} style={{margin:'1%'}} variant="outlined" label='Penitenciária' className='penitenciaria' id='penitenciaria'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'bloco':e.target.value.toUpperCase()}}))} value={data.aluno.bloco} style={{margin:'1%'}} variant="outlined" label='Bloco' className='line5' id='bloco'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'ala':e.target.value.toUpperCase()}}))} value={data.aluno.ala} style={{margin:'1%'}} variant="outlined" label='Ala' className='line5' id='ala'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'cela':e.target.value.toUpperCase()}}))} value={data.aluno.cela} style={{margin:'1%'}} variant="outlined" label='Cela' className='line5' id='cela'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'condicao':e.target.value}}))} value={data.aluno.condicao} select style={{margin:'1%'}} variant="outlined" label='Condição' className='line5' id='condicao'><MenuItem value="SENTENCIADO">Sentenciado</MenuItem><MenuItem value="AGUARDANDO SENTENÇA">Aguardando Sentença</MenuItem></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'regime':e.target.value}}))} value={data.aluno.regime} select style={{margin:'1%'}} variant="outlined" label='Regime' className='line5' id='regime'><MenuItem value="FECHADO">Fechado</MenuItem><MenuItem value="SEMIABERTO">Semiaberto</MenuItem><MenuItem value="ABERTO">Aberto</MenuItem></TextField>  
                    </div>
                    <h4 className='titles'>4 - DADOS GERAIS</h4>
                        <div className='flex flex-col w-5/6 p-10'>
                            <div className='text-gray-600 lg:ml-10 flex justify-between'>
                                <div className='text-xl'>
                                    <div id='outterForm4'>
                                    <p>Crie a senha para acessar a Área doAluno</p>
                                    <div id='Form4'>
                                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'senha':e.target.value.toUpperCase()}}))} style={{margin:'1%'}} variant="outlined" type='password' value={data.aluno.senha} id='senha' label='Senha' className='lg:w-2/5'></TextField>
                                        <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'confirmarSenha':e.target.value.toUpperCase()}}))} style={{margin:'1%'}} variant="outlined" type='password' value={data.aluno.confirmarSenha} id='confirmarSenha' label='Confirmar senha' className='lg:w-2/5'></TextField>
                                    </div>
                                    </div>
                                </div>
                                <div className='lg:flex hidden flex-col max-w-md'>
                                    <div className='flex font-bold text-2xl items-center'>
                                    <Checkbox onChange={()=> {!generalClauses ? setGeneralClauses(true) : setGeneralClauses(false)}} ></Checkbox>
                                    Cláusulas Gerais
                                    </div>
                                    <div className='flex'>
                                    <h3 className='text-base'>O cursista e/ou preposto declara(m) estar ciente(s) e concorda(m) com as <a className='text-blue-600 font-bold' href='https://google.com'>CLÁUSULAS GERAIS</a> que integram o presente Contrato de Prestação de Serviços Educacionais.</h3>
                                    </div>  
                                </div>
                            </div>
                            <div className='lg:hidden flex flex-col max-w-md'>
                                <div className='flex font-bold text-xl items-center'>
                                <Checkbox onChange={()=> {!generalClauses ? setGeneralClauses(true) : setGeneralClauses(false)}} ></Checkbox>
                                Cláusulas Gerais
                                </div>
                                    <div className='flex'>
                                    <h3 className='text-base'>O cursista e/ou preposto declara(m) estar ciente(s) e concorda(m) com as <a className='text-blue-600 font-bold' href='https://google.com'>CLÁUSULAS GERAIS</a> que integram o presente Contrato de Prestação de Serviços Educacionais.</h3>
                                    </div>  
                                </div>
                        </div>
            </FormControl>
                        <Collapse in={alert} >
                            <div className='flex justify-center'>
                            <Alert className='flex lg:w-1/2 mb-10' severity='error' onClose={() => {setAlert(false)}}>{alertTxt}</Alert>
                            </div>
                        </Collapse>
            <div className='w-full flex self-center lg:w-1/2 h-20 justify-around'>
            <button className='lg:w-1/3 h-fit p-2 rounded-sm bg-red-600 text-white font-bold' onClick={()=> clearElements()}>LIMPAR</button>
            
            <button type='submit' className='lg:w-80 h-fit p-2 rounded-sm text-white font-bold bg-green-500' onClick={()=> Submit()}>CONCLUIR CADASTRO</button>
            
            </div>
        </div>
    )
}