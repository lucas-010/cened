import React from 'react'
import './RegisterForm.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Checkbox, MenuItem } from '@mui/material';
import { FormControl } from '@mui/material'
import InputMask from 'react-input-mask';
import {Link} from 'react-router-dom';

export default function RegisterForm(){
    let [data, setData] = useState({"valueNomeAluno": '', "valueCpfAluno": '', "valueAtuacaoAluno": '', "valueAla": '', "valueBairroAluno": '', "valueBloco": '', "valueCela": '', "valueCelularResp": '', "valueCepAluno": '', "valueCidadeAluno": '', "valueCondicao": '', "valueCpfResp": '', "valueDtNascAluno": '', "valueEmail": '', "valueEnderAluno": '', "valueFoneResidResp": '', "valueFoneTrabResp": '', "valueGrauInstAluno": '', "valueIdentidadeAluno": '', "valueInfopen": '', "valueMaeAluno": '', "valueNacionAluno": '', "valueNaturAluno": '', "valueNomeResp": '', "valueOrgExpAluno": '', "valueOrgExpResp": '', "valuePaiAluno": '', "valuePenitenciaria": '', "valueProfAluno": '', "valueRegime": '', "valueRgResp": '', "valueSexoAluno": '', "valueSexoResp": '', "valueUfNaturAluno": '', "valueUfPris": '', "valueUfResidAluno": '', "senha": '', "confirmaSenha": ''});
    let [generalClauses, setGeneralClauses] = useState(false),
    valueElements = Object.keys(data),
    listElements = Object.assign(data),
    emptyElements = [],
    formatCharsYear = {'Y': '[0-9]','m': '[0-1]','M': '[0-9]','d': '[0-3]','D': '[0-9]'},
    ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;
    valueElements.forEach(vl=>{
        if(listElements[vl] === ""){
            emptyElements.push(vl.replace(/([A-Z])/g, ' $1').replaceAll(' ', ' do ').replace('value do','').replace('Uf do', 'UF').replace('confirma do', ' confirma').replace('Dt do', 'Dt').replace('Fone do', 'Fone').replace('Grau do', 'Grau').replace('Org do', 'Org'));
        }
    })
    function clearElements(){
        setData({"valueNomeAluno": '', "valueCpfAluno": '', "valueAtuacaoAluno": '', "valueAla": '', "valueBairroAluno": '', "valueBloco": '', "valueCela": '', "valueCelularResp": '', "valueCepAluno": '', "valueCidadeAluno": '', "valueCondicao": '', "valueCpfResp": '', "valueDtNascAluno": '', "valueEmail": '', "valueEnderAluno": '', "valueFoneResidResp": '', "valueFoneTrabResp": '', "valueGrauInstAluno": '', "valueIdentidadeAluno": '', "valueInfopen": '', "valueMaeAluno": '', "valueNacionAluno": '', "valueNaturAluno": '', "valueNomeResp": '', "valueOrgExpAluno": '', "valueOrgExpResp": '', "valuePaiAluno": '', "valuePenitenciaria": '', "valueProfAluno": '', "valueRegime": '', "valueRgResp": '', "valueSexoAluno": '', "valueSexoResp": '', "valueUfNaturAluno": '', "valueUfPris": '', "valueUfResidAluno": '', "senha": '', "confirmaSenha": ''});
    }
    function Submit(){
        let confirmaSenha = data.senha === data.confirmaSenha;
        if(confirmaSenha && !emptyElements.length > 0 && generalClauses){
            setTimeout(function(){alert('Registrado com sucesso!')}, 1000)
        }
        if(emptyElements.length > 0){
            alert(`Itens incompletos: ${emptyElements}`);
        }
        if(!confirmaSenha && !emptyElements.length > 0){
            alert('As senhas não coincidem!');
        }
        if(!emptyElements.length > 0 && !generalClauses){
            alert('Você deve aceitar as cláusulas gerais para continuar');
        }
    }
    return(
         <div className='flex flex-col mt-10'>
            <FormControl style={{fontSize:'20px', marginLeft:'40px'}}>
                    <h1 className='titles'> 1 - DADOS DO REEDUCANDO</h1>
                    <div id='Form1'>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueNomeAluno':e.target.value.toUpperCase()}))} value={data.valueNomeAluno} style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nomeAluno'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueSexoAluno':e.target.value.toUpperCase()}))} value={data.valueSexoAluno} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='SexoAluno'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <InputMask mask="999.999.999-99" maskChar={null} onChange={(e) => setData((data)=>({...data,'valueCpfAluno':e.target.value}))} value={data.valueCpfAluno} id='cpfAluno' >{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'/>}</InputMask>
                        <InputMask mask="999999999999999" maskChar={null} onChange={(e) => setData((data)=>({...data,'valueIdentidadeAluno':e.target.value.toUpperCase()}))} value={data.valueIdentidadeAluno} id='IdentidadeAluno'>{() => <TextField style={{margin:'1%'}} label='Identidade' className='inputs'  />}</InputMask>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueOrgExpAluno':e.target.value.toUpperCase()}))} value={data.valueOrgExpAluno} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>

                        <InputMask mask='dD/mM/YYYY' maskChar={null} formatChars={formatCharsYear} onChange={(e) => setData((data)=>({...data,'valueDtNascAluno':e.target.value.toUpperCase()}))} value={data.valueDtNascAluno} id='DataNascimento'>{() => <TextField label='Data Nascimento' className='inputs' style={{margin:'1%'}} />}</InputMask>
                        
                        <TextField onChange={(e) => setData((data)=>({...data,'valueNaturAluno':e.target.value.toUpperCase()}))} value={data.valueNaturAluno} style={{margin:'1%'}} variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueUfNaturAluno':e.target.value}))} value={data.valueUfNaturAluno} select style={{margin:'1%'}} variant="outlined" label="UF Naturalidade" className='inputs' id='ufNaturalidade'>
                            <MenuItem value="AC">Acre</MenuItem><MenuItem value="AL">Alagoas</MenuItem><MenuItem value="AP">Amapá</MenuItem><MenuItem value="AM">Amazonas</MenuItem><MenuItem value="BA">Bahia</MenuItem><MenuItem value="CE">Ceará</MenuItem><MenuItem value="DF">Distrito Federal</MenuItem><MenuItem value="ES">Espírito Santo</MenuItem><MenuItem value="GO">Goiás</MenuItem><MenuItem value="MA">Maranhão</MenuItem><MenuItem value="MT">Mato Grosso</MenuItem><MenuItem value="MS">Mato Grosso do Sul</MenuItem><MenuItem value="MG">Minas Gerais</MenuItem><MenuItem value="PA">Pará</MenuItem><MenuItem value="PB">Paraíba</MenuItem><MenuItem value="PR">Paraná</MenuItem><MenuItem value="PE">Pernambuco</MenuItem><MenuItem value="PI">Piauí</MenuItem><MenuItem value="RJ">Rio de Janeiro</MenuItem><MenuItem value="RN">Rio Grande do Norte</MenuItem><MenuItem value="RS">Rio Grande do Sul</MenuItem><MenuItem value="RO">Rondônia</MenuItem><MenuItem value="RR">Roraima</MenuItem><MenuItem value="SC">Santa Catarina</MenuItem><MenuItem value="SP">São Paulo</MenuItem><MenuItem value="SE">Sergipe</MenuItem><MenuItem value="TO">Tocantins</MenuItem></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueNacionAluno':e.target.value.toUpperCase()}))} value={data.valueNacionAluno} style={{margin:'1%'}} variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueEnderAluno':e.target.value.toUpperCase()}))} value={data.valueEnderAluno} style={{margin:'1%'}} variant="outlined" label='Endereço Residencial' className='EnderecoResidencial' id='EnderecoResidencial'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueBairroAluno':e.target.value.toUpperCase()}))} value={data.valueBairroAluno} style={{margin:'1%'}} variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueCidadeAluno':e.target.value.toUpperCase()}))} value={data.valueCidadeAluno} style={{margin:'1%'}} variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueUfResidAluno':e.target.value}))} value={data.valueUfResidAluno} select style={{margin:'1%'}} variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'>
                            <MenuItem value="AC">Acre</MenuItem><MenuItem value="AL">Alagoas</MenuItem><MenuItem value="AP">Amapá</MenuItem><MenuItem value="AM">Amazonas</MenuItem><MenuItem value="BA">Bahia</MenuItem><MenuItem value="CE">Ceará</MenuItem><MenuItem value="DF">Distrito Federal</MenuItem><MenuItem value="ES">Espírito Santo</MenuItem><MenuItem value="GO">Goiás</MenuItem><MenuItem value="MA">Maranhão</MenuItem><MenuItem value="MT">Mato Grosso</MenuItem><MenuItem value="MS">Mato Grosso do Sul</MenuItem><MenuItem value="MG">Minas Gerais</MenuItem><MenuItem value="PA">Pará</MenuItem><MenuItem value="PB">Paraíba</MenuItem><MenuItem value="PR">Paraná</MenuItem><MenuItem value="PE">Pernambuco</MenuItem><MenuItem value="PI">Piauí</MenuItem><MenuItem value="RJ">Rio de Janeiro</MenuItem><MenuItem value="RN">Rio Grande do Norte</MenuItem><MenuItem value="RS">Rio Grande do Sul</MenuItem><MenuItem value="RO">Rondônia</MenuItem><MenuItem value="RR">Roraima</MenuItem><MenuItem value="SC">Santa Catarina</MenuItem><MenuItem value="SP">São Paulo</MenuItem><MenuItem value="SE">Sergipe</MenuItem><MenuItem value="TO">Tocantins</MenuItem></TextField>
                        <InputMask mask="99999-999" maskChar={null} onChange={(e) => setData((data)=>({...data,'valueCepAluno':e.target.value.toUpperCase()}))} value={data.valueCepAluno} id='CEP' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' />}</InputMask>          
                        <TextField onChange={(e) => setData((data)=>({...data,'valueGrauInstAluno':e.target.value.toUpperCase()}))} value={data.valueGrauInstAluno} style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueProfAluno':e.target.value.toUpperCase()}))} value={data.valueProfAluno} style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueAtuacaoAluno':e.target.value.toUpperCase()}))} value={data.valueAtuacaoAluno} style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valuePaiAluno':e.target.value.toUpperCase()}))} value={data.valuePaiAluno} style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueMaeAluno':e.target.value.toUpperCase()}))} value={data.valueMaeAluno} style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
                    </div>
                    <h2 className='titles'>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
                    <div id='Form2'>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueNomeResp':e.target.value.toUpperCase()}))} value={data.valueNomeResp} style={{margin:'1%'}} variant="outlined" label='Nome do Responsável (seu nome)' className='nome' id='nomeResp'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueSexoResp':e.target.value.toUpperCase()}))} value={data.valueSexoResp} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='sexoResp'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueVinculo':e.target.value}))} select value={data.valueVinculoResp} style={{margin:'1%'}} variant="outlined" label='Vínculo' className='inputs' id='vinculoResp'>
                            <MenuItem value='FAMILIAR'>Familiar</MenuItem><MenuItem value='ADVOGADO'>Advogado</MenuItem><MenuItem value='VISITANTE'>Visitante</MenuItem><MenuItem value='NÚCLEO DE ENSINO PENITENCIÁRIO'>Núcleo de Ensino Penitenciário</MenuItem><MenuItem value='AGENTE PENITENCIÁRIO'>Agente Penitenciário</MenuItem><MenuItem value='PEDAGOOG PENITENCIÁRIO'>Pedagogo Penitenciário</MenuItem></TextField>
                        <InputMask mask='999.999.999-99' maskChar={null} onChange={(e) => setData((data)=>({...data,'valueCpfResp':e.target.value}))} value={data.valueCpfResp} id='cpfResp'>{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'  />}</InputMask>
                        <InputMask mask="999999999999999" maskChar={null} onChange={(e) => setData((data)=>({...data,'valueRgResp':e.target.value.toUpperCase()}))} value={data.valueRgResp}  d='rgResp'>{() => <TextField variant="outlined" label='RG' className='inputs' style={{margin:'1%'}}/>}</InputMask>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueOrgExpResp':e.target.value.toUpperCase()}))} value={data.valueOrgExpResp} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgExpResp'></TextField>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data,'valueCelularResp':e.target.value}))} value={data.valueCelularResp} maskChar={null} id='celularResp' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Celular' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data,'valueFoneResidResp':e.target.value}))} value={data.valueFoneResidResp} maskChar={null} id='foneResidResp' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Residencial' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data,'valueFoneTrabResp':e.target.value.toUpperCase()}))} value={data.valueFoneTrabResp} maskChar={null} id='foneTrapResp'>{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Trabalho' className='inputs'/>}</InputMask>

                        <TextField onChange={(e) => setData((data)=>({...data,'valueEmail':e.target.value.toUpperCase()}))} value={data.valueEmail} type='email' placeholder="email@example.com" style={{margin:'1%'}} variant="outlined" label='Email' className='email' id='emailResp'></TextField>  
                    </div>
                    <h3 className='titles'>3 - DADOS PRISIONAIS</h3>
                    <div id='Form3'>
                        <TextField onChange={(e) => setData((data)=>({...data,'valueInfopen':e.target.value.toUpperCase()}))} value={data.valueInfopen} style={{margin:'1%'}} variant="outlined" label='INFOPEN' className='inputs' id='infopen'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueUfPris':e.target.value}))} value={data.valueUfPris} select style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufPris'>
                            <MenuItem value="AC">Acre</MenuItem><MenuItem value="AL">Alagoas</MenuItem><MenuItem value="AP">Amapá</MenuItem><MenuItem value="AM">Amazonas</MenuItem><MenuItem value="BA">Bahia</MenuItem><MenuItem value="CE">Ceará</MenuItem><MenuItem value="DF">Distrito Federal</MenuItem><MenuItem value="ES">Espírito Santo</MenuItem><MenuItem value="GO">Goiás</MenuItem><MenuItem value="MA">Maranhão</MenuItem><MenuItem value="MT">Mato Grosso</MenuItem><MenuItem value="MS">Mato Grosso do Sul</MenuItem><MenuItem value="MG">Minas Gerais</MenuItem><MenuItem value="PA">Pará</MenuItem><MenuItem value="PB">Paraíba</MenuItem><MenuItem value="PR">Paraná</MenuItem><MenuItem value="PE">Pernambuco</MenuItem><MenuItem value="PI">Piauí</MenuItem><MenuItem value="RJ">Rio de Janeiro</MenuItem><MenuItem value="RN">Rio Grande do Norte</MenuItem><MenuItem value="RS">Rio Grande do Sul</MenuItem><MenuItem value="RO">Rondônia</MenuItem><MenuItem value="RR">Roraima</MenuItem><MenuItem value="SC">Santa Catarina</MenuItem><MenuItem value="SP">São Paulo</MenuItem><MenuItem value="SE">Sergipe</MenuItem><MenuItem value="TO">Tocantins</MenuItem></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valuePenitenciaria':e.target.value.toUpperCase()}))} value={data.valuePenitenciaria} style={{margin:'1%'}} variant="outlined" label='Penitenciária' className='penitenciaria' id='penitenciaria'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueBloco':e.target.value.toUpperCase()}))} value={data.valueBloco} style={{margin:'1%'}} variant="outlined" label='Bloco' className='line5' id='bloco'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueAla':e.target.value.toUpperCase()}))} value={data.valueAla} style={{margin:'1%'}} variant="outlined" label='Ala' className='line5' id='ala'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueCela':e.target.value.toUpperCase()}))} value={data.valueCela} style={{margin:'1%'}} variant="outlined" label='Cela' className='line5' id='cela'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueCondicao':e.target.value}))} value={data.valueCondicao} select style={{margin:'1%'}} variant="outlined" label='Condição' className='line5' id='condicao'><MenuItem value="SENTENCIADO">Sentenciado</MenuItem><MenuItem value="AGUARDANDO SENTENÇA">Aguardando Sentença</MenuItem></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'valueRegime':e.target.value}))} value={data.valueRegime} select style={{margin:'1%'}} variant="outlined" label='Regime' className='line5' id='regime'><MenuItem value="FECHADO">Fechado</MenuItem><MenuItem value="SEMIABERTO">Semiaberto</MenuItem><MenuItem value="ABERTO">Aberto</MenuItem></TextField>  
                    </div>
                    <h4 className='titles'>4 - DADOS GERAIS</h4>
                        <div className='flex flex-col w-5/6 p-10'>
                            <div className='text-gray-600 lg:ml-10 flex justify-between'>
                                <div className='text-xl'>
                                    <div id='outterForm4'>
                                    <p>Crie a senha para acessar a Área do Aluno</p>
                                    <div id='Form4'>
                                        <TextField onChange={(e) => setData((data)=>({...data,'senha':e.target.value.toUpperCase()}))} style={{margin:'1%'}} variant="outlined" type='password' value={data.senha} id='senha' label='Senha' className='lg:w-2/5'></TextField>
                                        <TextField onChange={(e) => setData((data)=>({...data,'confirmaSenha':e.target.value.toUpperCase()}))} style={{margin:'1%'}} variant="outlined" type='password' value={data.confirmaSenha} id='confirmaSenha' label='Confirmar senha' className='lg:w-2/5'></TextField>
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
            <div className='w-full flex self-center lg:w-1/2 h-20 justify-around'>
            <button className='lg:w-1/3 h-fit p-2 rounded-sm bg-red-600 text-white font-bold' onClick={()=> clearElements()}>LIMPAR</button>
            <ConditionalLink to="/login" condition={!emptyElements.length > 0 && generalClauses}>
            <button type='submit' className='lg:w-80 h-fit p-2 rounded-sm text-white font-bold bg-green-500' onClick={()=> Submit()}>CONCLUIR CADASTRO</button>
            </ConditionalLink>
            </div>
        </div>
    )
}