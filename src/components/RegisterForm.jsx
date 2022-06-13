import React from 'react'
import './RegisterForm.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Checkbox, MenuItem } from '@mui/material';
import { FormControl } from '@mui/material'
import InputMask from 'react-input-mask';
import {Link} from 'react-router-dom';

export default function RegisterForm(){
    let [data, setData] = useState([{"valueNomeAluno": '', "valueCpfAluno": '', "valueAtuacaoAluno": '', "valueAla": '', "valueBairroAluno": '', "valueBloco": '', "valueCela": '', "valueCelularResp": '', "valueCepAluno": '', "valueCidadeAluno": '', "valueCondicao": '', "valueCpfResp": '', "valueDtNascAluno": '', "valueEmail": '', "valueEnderAluno": '', "valueFoneResidResp": '', "valueFoneTrabResp": '', "valueGrauInstAluno": '', "valueIdentidadeAluno": '', "valueInfopen": '', "valueMaeAluno": '', "valueNacionAluno": '', "valueNaturAluno": '', "valueNomeResp": '', "valueOrgExpAluno": '', "valueOrgExpResp": '', "valuePaiAluno": '', "valuePenitenciaria": '', "valueProfAluno": '', "valueRegime": '', "valueRgResp": '', "valueSexoAluno": '', "valueSexoResp": '', "valueUfNaturAluno": '', "valueUfPris": '', "valueUfResidAluno": '', "senha": '', "confirmaSenha": ''}]);
    let [generalClauses, setGeneralClauses] = useState(false),
    valueElements = Object.keys(data[0]),
    listElements = Object.assign(data[0]),
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
        setData([{"valueNomeAluno": '', "valueCpfAluno": '', "valueAtuacaoAluno": '', "valueAla": '', "valueBairroAluno": '', "valueBloco": '', "valueCela": '', "valueCelularResp": '', "valueCepAluno": '', "valueCidadeAluno": '', "valueCondicao": '', "valueCpfResp": '', "valueDtNascAluno": '', "valueEmail": '', "valueEnderAluno": '', "valueFoneResidResp": '', "valueFoneTrabResp": '', "valueGrauInstAluno": '', "valueIdentidadeAluno": '', "valueInfopen": '', "valueMaeAluno": '', "valueNacionAluno": '', "valueNaturAluno": '', "valueNomeResp": '', "valueOrgExpAluno": '', "valueOrgExpResp": '', "valuePaiAluno": '', "valuePenitenciaria": '', "valueProfAluno": '', "valueRegime": '', "valueRgResp": '', "valueSexoAluno": '', "valueSexoResp": '', "valueUfNaturAluno": '', "valueUfPris": '', "valueUfResidAluno": '', "senha": '', "confirmaSenha": ''}]);
    }
    function Submit(){
        let confirmaSenha = data[0].senha === data[0].confirmaSenha;
        if(!confirmaSenha){
            alert('As senhas não coincidem!')
        }
        if(confirmaSenha && !emptyElements.length > 0 && generalClauses){
            setTimeout(function(){alert('Registrado com sucesso!')}, 1000)
        }
        if(emptyElements.length > 0){
            alert(`Itens incompletos: ${emptyElements}`);
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
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueNomeAluno':e.target.value.toUpperCase()}])} value={data[0].valueNomeAluno} style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nomeAluno'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueSexoAluno':e.target.value.toUpperCase()}])} value={data[0].valueSexoAluno} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='SexoAluno'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <InputMask mask="999.999.999-99" maskChar={null} onChange={(e) => setData((data)=>[{...data[0],'valueCpfAluno':e.target.value}])} value={data[0].valueCpfAluno} id='cpfAluno' >{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'/>}</InputMask>
                        <InputMask mask="999999999999999" maskChar={null} onChange={(e) => setData((data)=>[{...data[0],'valueIdentidadeAluno':e.target.value.toUpperCase()}])} value={data[0].valueIdentidadeAluno} id='IdentidadeAluno'>{() => <TextField style={{margin:'1%'}} label='Identidade' className='inputs'  />}</InputMask>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueOrgExpAluno':e.target.value.toUpperCase()}])} value={data[0].valueOrgExpAluno} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>

                        <InputMask mask='dD/mM/YYYY' maskChar={null} formatChars={formatCharsYear} onChange={(e) => setData((data)=>[{...data[0],'valueDtNascAluno':e.target.value.toUpperCase()}])} value={data[0].valueDtNascAluno} id='DataNascimento'>{() => <TextField label='Data Nascimento' className='inputs' style={{margin:'1%'}} />}</InputMask>
                        
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueNaturAluno':e.target.value.toUpperCase()}])} value={data[0].valueNaturAluno} style={{margin:'1%'}} variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueUfNaturAluno':e.target.value}])} value={data[0].valueUfNaturAluno} select style={{margin:'1%'}} variant="outlined" label="UF Naturalidade" className='inputs' id='ufNaturalidade'>
                            <MenuItem value="AC">Acre</MenuItem><MenuItem value="AL">Alagoas</MenuItem><MenuItem value="AP">Amapá</MenuItem><MenuItem value="AM">Amazonas</MenuItem><MenuItem value="BA">Bahia</MenuItem><MenuItem value="CE">Ceará</MenuItem><MenuItem value="DF">Distrito Federal</MenuItem><MenuItem value="ES">Espírito Santo</MenuItem><MenuItem value="GO">Goiás</MenuItem><MenuItem value="MA">Maranhão</MenuItem><MenuItem value="MT">Mato Grosso</MenuItem><MenuItem value="MS">Mato Grosso do Sul</MenuItem><MenuItem value="MG">Minas Gerais</MenuItem><MenuItem value="PA">Pará</MenuItem><MenuItem value="PB">Paraíba</MenuItem><MenuItem value="PR">Paraná</MenuItem><MenuItem value="PE">Pernambuco</MenuItem><MenuItem value="PI">Piauí</MenuItem><MenuItem value="RJ">Rio de Janeiro</MenuItem><MenuItem value="RN">Rio Grande do Norte</MenuItem><MenuItem value="RS">Rio Grande do Sul</MenuItem><MenuItem value="RO">Rondônia</MenuItem><MenuItem value="RR">Roraima</MenuItem><MenuItem value="SC">Santa Catarina</MenuItem><MenuItem value="SP">São Paulo</MenuItem><MenuItem value="SE">Sergipe</MenuItem><MenuItem value="TO">Tocantins</MenuItem></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueNacionAluno':e.target.value.toUpperCase()}])} value={data[0].valueNacionAluno} style={{margin:'1%'}} variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueEnderAluno':e.target.value.toUpperCase()}])} value={data[0].valueEnderAluno} style={{margin:'1%'}} variant="outlined" label='Endereço Residencial' className='EnderecoResidencial' id='EnderecoResidencial'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueBairroAluno':e.target.value.toUpperCase()}])} value={data[0].valueBairroAluno} style={{margin:'1%'}} variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueCidadeAluno':e.target.value.toUpperCase()}])} value={data[0].valueCidadeAluno} style={{margin:'1%'}} variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueUfResidAluno':e.target.value}])} value={data[0].valueUfResidAluno} select style={{margin:'1%'}} variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'>
                            <MenuItem value="AC">Acre</MenuItem><MenuItem value="AL">Alagoas</MenuItem><MenuItem value="AP">Amapá</MenuItem><MenuItem value="AM">Amazonas</MenuItem><MenuItem value="BA">Bahia</MenuItem><MenuItem value="CE">Ceará</MenuItem><MenuItem value="DF">Distrito Federal</MenuItem><MenuItem value="ES">Espírito Santo</MenuItem><MenuItem value="GO">Goiás</MenuItem><MenuItem value="MA">Maranhão</MenuItem><MenuItem value="MT">Mato Grosso</MenuItem><MenuItem value="MS">Mato Grosso do Sul</MenuItem><MenuItem value="MG">Minas Gerais</MenuItem><MenuItem value="PA">Pará</MenuItem><MenuItem value="PB">Paraíba</MenuItem><MenuItem value="PR">Paraná</MenuItem><MenuItem value="PE">Pernambuco</MenuItem><MenuItem value="PI">Piauí</MenuItem><MenuItem value="RJ">Rio de Janeiro</MenuItem><MenuItem value="RN">Rio Grande do Norte</MenuItem><MenuItem value="RS">Rio Grande do Sul</MenuItem><MenuItem value="RO">Rondônia</MenuItem><MenuItem value="RR">Roraima</MenuItem><MenuItem value="SC">Santa Catarina</MenuItem><MenuItem value="SP">São Paulo</MenuItem><MenuItem value="SE">Sergipe</MenuItem><MenuItem value="TO">Tocantins</MenuItem></TextField>
                        <InputMask mask="99999-999" maskChar={null} onChange={(e) => setData((data)=>[{...data[0],'valueCepAluno':e.target.value.toUpperCase()}])} value={data[0].valueCepAluno} id='CEP' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' />}</InputMask>          
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueGrauInstAluno':e.target.value.toUpperCase()}])} value={data[0].valueGrauInstAluno} style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueProfAluno':e.target.value.toUpperCase()}])} value={data[0].valueProfAluno} style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueAtuacaoAluno':e.target.value.toUpperCase()}])} value={data[0].valueAtuacaoAluno} style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valuePaiAluno':e.target.value.toUpperCase()}])} value={data[0].valuePaiAluno} style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueMaeAluno':e.target.value.toUpperCase()}])} value={data[0].valueMaeAluno} style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
                    </div>
                    <h2 className='titles'>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
                    <div id='Form2'>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueNomeResp':e.target.value.toUpperCase()}])} value={data[0].valueNomeResp} style={{margin:'1%'}} variant="outlined" label='Nome do Responsável (seu nome)' className='nome' id='nomeResp'></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueSexoResp':e.target.value.toUpperCase()}])} value={data[0].valueSexoResp} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='sexoResp'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueVinculo':e.target.value}])} select value={data[0].valueVinculoResp} style={{margin:'1%'}} variant="outlined" label='Vínculo' className='inputs' id='vinculoResp'>
                            <MenuItem value='FAMILIAR'>Familiar</MenuItem><MenuItem value='ADVOGADO'>Advogado</MenuItem><MenuItem value='VISITANTE'>Visitante</MenuItem><MenuItem value='NÚCLEO DE ENSINO PENITENCIÁRIO'>Núcleo de Ensino Penitenciário</MenuItem><MenuItem value='AGENTE PENITENCIÁRIO'>Agente Penitenciário</MenuItem><MenuItem value='PEDAGOOG PENITENCIÁRIO'>Pedagogo Penitenciário</MenuItem></TextField>
                        <InputMask mask='999.999.999-99' maskChar={null} onChange={(e) => setData((data)=>[{...data[0],'valueCpfResp':e.target.value}])} value={data[0].valueCpfResp} id='cpfResp'>{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'  />}</InputMask>
                        <InputMask mask="999999999999999" maskChar={null} onChange={(e) => setData((data)=>[{...data[0],'valueRgResp':e.target.value.toUpperCase()}])} value={data[0].valueRgResp}  d='rgResp'>{() => <TextField variant="outlined" label='RG' className='inputs' style={{margin:'1%'}}/>}</InputMask>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueOrgExpResp':e.target.value.toUpperCase()}])} value={data[0].valueOrgExpResp} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgExpResp'></TextField>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>[{...data[0],'valueCelularResp':e.target.value}])} value={data[0].valueCelularResp} maskChar={null} id='celularResp' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Celular' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>[{...data[0],'valueFoneResidResp':e.target.value}])} value={data[0].valueFoneResidResp} maskChar={null} id='foneResidResp' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Residencial' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>[{...data[0],'valueFoneTrabResp':e.target.value.toUpperCase()}])} value={data[0].valueFoneTrabResp} maskChar={null} id='foneTrapResp'>{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Trabalho' className='inputs'/>}</InputMask>

                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueEmail':e.target.value.toUpperCase()}])} value={data[0].valueEmail} type='email' placeholder="email@example.com" style={{margin:'1%'}} variant="outlined" label='Email' className='email' id='emailResp'></TextField>  
                    </div>
                    <h3 className='titles'>3 - DADOS PRISIONAIS</h3>
                    <div id='Form3'>
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueInfopen':e.target.value.toUpperCase()}])} value={data[0].valueInfopen} style={{margin:'1%'}} variant="outlined" label='INFOPEN' className='inputs' id='infopen'></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueUfPris':e.target.value}])} value={data[0].valueUfPris} select style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufPris'>
                            <MenuItem value="AC">Acre</MenuItem><MenuItem value="AL">Alagoas</MenuItem><MenuItem value="AP">Amapá</MenuItem><MenuItem value="AM">Amazonas</MenuItem><MenuItem value="BA">Bahia</MenuItem><MenuItem value="CE">Ceará</MenuItem><MenuItem value="DF">Distrito Federal</MenuItem><MenuItem value="ES">Espírito Santo</MenuItem><MenuItem value="GO">Goiás</MenuItem><MenuItem value="MA">Maranhão</MenuItem><MenuItem value="MT">Mato Grosso</MenuItem><MenuItem value="MS">Mato Grosso do Sul</MenuItem><MenuItem value="MG">Minas Gerais</MenuItem><MenuItem value="PA">Pará</MenuItem><MenuItem value="PB">Paraíba</MenuItem><MenuItem value="PR">Paraná</MenuItem><MenuItem value="PE">Pernambuco</MenuItem><MenuItem value="PI">Piauí</MenuItem><MenuItem value="RJ">Rio de Janeiro</MenuItem><MenuItem value="RN">Rio Grande do Norte</MenuItem><MenuItem value="RS">Rio Grande do Sul</MenuItem><MenuItem value="RO">Rondônia</MenuItem><MenuItem value="RR">Roraima</MenuItem><MenuItem value="SC">Santa Catarina</MenuItem><MenuItem value="SP">São Paulo</MenuItem><MenuItem value="SE">Sergipe</MenuItem><MenuItem value="TO">Tocantins</MenuItem></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valuePenitenciaria':e.target.value.toUpperCase()}])} value={data[0].valuePenitenciaria} style={{margin:'1%'}} variant="outlined" label='Penitenciária' className='penitenciaria' id='penitenciaria'></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueBloco':e.target.value.toUpperCase()}])} value={data[0].valueBloco} style={{margin:'1%'}} variant="outlined" label='Bloco' className='line5' id='bloco'></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueAla':e.target.value.toUpperCase()}])} value={data[0].valueAla} style={{margin:'1%'}} variant="outlined" label='Ala' className='line5' id='ala'></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueCela':e.target.value.toUpperCase()}])} value={data[0].valueCela} style={{margin:'1%'}} variant="outlined" label='Cela' className='line5' id='cela'></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueCondicao':e.target.value}])} value={data[0].valueCondicao} select style={{margin:'1%'}} variant="outlined" label='Condição' className='line5' id='condicao'><MenuItem value="SENTENCIADO">Sentenciado</MenuItem><MenuItem value="AGUARDANDO SENTENÇA">Aguardando Sentença</MenuItem></TextField>  
                        <TextField onChange={(e) => setData((data)=>[{...data[0],'valueRegime':e.target.value}])} value={data[0].valueRegime} select style={{margin:'1%'}} variant="outlined" label='Regime' className='line5' id='regime'><MenuItem value="FECHADO">Fechado</MenuItem><MenuItem value="SEMIABERTO">Semiaberto</MenuItem><MenuItem value="ABERTO">Aberto</MenuItem></TextField>  
                    </div>
                    <h4 className='titles'>4 - DADOS GERAIS</h4>
                        <div className='flex flex-col w-5/6 p-10'>
                            <div className='text-gray-600 lg:ml-10 flex justify-between'>
                                <div className='text-xl'>
                                    <div id='outterForm4'>
                                    <p>Crie a senha para acessar a Área do Aluno</p>
                                    <div id='Form4'>
                                        <TextField onChange={(e) => setData((data)=>[{...data[0],'senha':e.target.value.toUpperCase()}])} style={{margin:'1%'}} variant="outlined" type='password' value={data.senha} id='senha' label='Senha' className='lg:w-2/5'></TextField>
                                        <TextField onChange={(e) => setData((data)=>[{...data[0],'confirmaSenha':e.target.value.toUpperCase()}])} style={{margin:'1%'}} variant="outlined" type='password' value={data.confirmaSenha} id='confirmaSenha' label='Confirmar senha' className='lg:w-2/5'></TextField>
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