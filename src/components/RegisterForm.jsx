import React from 'react'
import './RegisterForm.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Checkbox, MenuItem } from '@mui/material';
import { FormControl } from '@mui/material'

function UF(value){
    return(
        <div>
        </div>
    )
}

export default function RegisterForm(){
    const [valueNomeAluno, setValueNomeAluno] = useState(''),
    [valueCpfAluno, setValueCpfAluno] = useState(''),
    [valueIdentidadeAluno, setValueIdentidadeAluno] = useState(''),
    [valueOrgExpAluno, setValueOrgExpAluno] = useState(''),
    [valueDtNascAluno, setValueDtNascAluno] = useState(''),
    [valueNaturAluno, setValueNaturAluno] = useState(''),
    [valueUfNaturAluno, setValueUfNaturAluno] = useState(''),
    [valueNacionAluno, setValueNacionAluno] = useState(''),
    [valueEnderAluno, setValueEnderAluno] = useState(''),
    [valueBairroAluno, setValueBairroAluno] = useState(''),
    [valueCidadeAluno, setValueCidadeAluno] = useState(''),
    [valueUfResidAluno, setValueUfResidAluno] = useState(''),
    [valueCepAluno, setValueCepAluno] = useState(''),
    [valueGrauInstAluno, setValueGrauInstAluno] = useState(''),
    [valueProfAluno, setValueProfAluno] = useState(''),
    [valueAtuacaoAluno, setValueAtuacaoAluno] = useState(''),
    [valuePaiAluno, setValuePaiAluno] = useState(''),
    [valueMaeAluno, setValueMaeAluno] = useState(''),
    [valueNomeResp, setValueNomeResp] = useState(''),
    [valueSexoResp, setValueSexoResp] = useState(''),
    [valueVinculoResp, setValueVinculoResp] = useState(''),
    [valueCpfResp, setValueCpfResp] = useState(''),
    [valueRgResp, setValueRgResp] = useState(''),
    [valueOrgExpResp, setValueOrgExpResp] = useState(''),
    [valueCelularResp, setValueCelularResp] = useState(''),
    [valueFoneResidResp, setValueFoneResidResp] = useState(''),
    [valueFoneTrabResp, setValueFoneTrabResp] = useState(''),
	[valueEmail, setValueEmail] = useState(''),
	[valueSexoAluno, setValueSexoAluno] = useState(''),
	[valueInfoPen, setValueInfoPen] = useState(''),
	[valueUfPris, setValueUfPris] = useState(''),
	[valuePenitenciaria, setValuePenitenciaria] = useState(''),
	[valueBloco, setValueBloco] = useState(''),
	[valueAla, setValueAla] = useState(''),
	[valueCela, setValueCela] = useState(''),
	[valueCondicao, setValueCondicao] = useState(''),
	[valueRegime, setValueRegime] = useState(''),
    [generalClauses, setGeneralClauses] = useState(false);

    function clearElements(){
        setValueNomeAluno(''); setValueCpfAluno(''); setValueAtuacaoAluno(''); setValueAla(''); setValueBairroAluno(''); setValueBloco(''); setValueCela(''); setValueCelularResp(''); setValueCepAluno(''); setValueCidadeAluno(''); setValueCondicao(''); setValueCpfResp(''); setValueDtNascAluno(''); setValueEmail(''); setValueEnderAluno(''); setValueFoneResidResp(''); setValueFoneTrabResp(''); setValueGrauInstAluno(''); setValueIdentidadeAluno(''); setValueInfoPen(''); setValueMaeAluno(''); setValueNacionAluno(''); setValueNaturAluno(''); setValueNomeResp(''); setValueOrgExpAluno(''); setValueOrgExpResp(''); setValuePaiAluno(''); setValuePenitenciaria(''); setValueProfAluno(''); setValueRegime(''); setValueRgResp(''); setValueSexoAluno(''); setValueSexoResp(''); setValueUfNaturAluno(''); setValueUfPris(''); setValueUfResidAluno(''); setValueVinculoResp('');
	}

	function cpfAlunoFormat(cpf){
		cpf = cpf.replace(/[^\d]/g, "");
		setValueCpfAluno(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
	}
	function cpfRespFormat(cpf){
		cpf = cpf.replace(/[^\d]/g, "");
		setValueCpfResp(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
	}
	function phoneResidRespFormat(phone){
		setValueFoneResidResp(phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1)$2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+?$/, '$1'))
	}
	function phoneTrabRespFormat(phone){
		setValueFoneTrabResp(phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1)$2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+?$/, '$1'))
	}
	function phoneCelularRespFormat(phone){
		setValueCelularResp(phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1)$2').replace(/(\d{4})(\d)/, '$1-$2').replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3').replace(/(-\d{4})\d+?$/, '$1'))
	}
    return(
         <div className='flex flex-col mt-10'>
            <FormControl style={{fontSize:'20px', marginLeft:'40px'}}>
                    <h1 className='titles'> 1 - DADOS DO REEDUCANDO</h1>
                    <div id='Form1'>
                        <TextField onChange={(e) => setValueNomeAluno(e.target.value)} value={valueNomeAluno} style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nomeAluno'></TextField>
                        <TextField onChange={(e) => setValueSexoAluno(e.target.value)} value={valueSexoAluno} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='SexoAluno'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <TextField onChange={(e)=>  cpfAlunoFormat(e.target.value)} value={valueCpfAluno} inputProps={{ maxLength: 14 }} style={{margin:'1%'}} variant="outlined" label='CPF' className='inputs' id='cpfAluno'></TextField>
                        <TextField onChange={(e) => setValueIdentidadeAluno(e.target.value)} value={valueIdentidadeAluno} style={{margin:'1%'}} variant="outlined" label='Identidade' className='inputs' id='IdentidadeAluno'></TextField>
                        <TextField onChange={(e) => setValueOrgExpAluno(e.target.value)} value={valueOrgExpAluno} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>
                        <TextField onChange={(e) => setValueDtNascAluno(e.target.value)} value={valueDtNascAluno} style={{margin:'1%'}} variant="outlined" label='Data Nascimento' className='inputs' id='DataNascimento'></TextField>
                        <TextField onChange={(e) => setValueNaturAluno(e.target.value)} value={valueNaturAluno} style={{margin:'1%'}} variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField onChange={(e) => setValueUfNaturAluno(e.target.value)} value={valueUfNaturAluno} select style={{margin:'1%'}} variant="outlined" label="UF Naturalidade" className='inputs' id='ufNaturalidade'>
                            <MenuItem value="AC">Acre</MenuItem>
                            <MenuItem value="AL">Alagoas</MenuItem>
                            <MenuItem value="AP">Amapá</MenuItem>
                            <MenuItem value="AM">Amazonas</MenuItem>
                            <MenuItem value="BA">Bahia</MenuItem>
                            <MenuItem value="CE">Ceará</MenuItem>
                            <MenuItem value="DF">Distrito Federal</MenuItem>
                            <MenuItem value="ES">Espírito Santo</MenuItem>
                            <MenuItem value="GO">Goiás</MenuItem>
                            <MenuItem value="MA">Maranhão</MenuItem>
                            <MenuItem value="MT">Mato Grosso</MenuItem>
                            <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                            <MenuItem value="MG">Minas Gerais</MenuItem>
                            <MenuItem value="PA">Pará</MenuItem>
                            <MenuItem value="PB">Paraíba</MenuItem>
                            <MenuItem value="PR">Paraná</MenuItem>
                            <MenuItem value="PE">Pernambuco</MenuItem>
                            <MenuItem value="PI">Piauí</MenuItem>
                            <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                            <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                            <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                            <MenuItem value="RO">Rondônia</MenuItem>
                            <MenuItem value="RR">Roraima</MenuItem>
                            <MenuItem value="SC">Santa Catarina</MenuItem>
                            <MenuItem value="SP">São Paulo</MenuItem>
                            <MenuItem value="SE">Sergipe</MenuItem>
                            <MenuItem value="TO">Tocantins</MenuItem></TextField>
                        <TextField onChange={(e) => setValueNacionAluno(e.target.value)} value={valueNacionAluno} style={{margin:'1%'}} variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField onChange={(e) => setValueEnderAluno(e.target.value)} value={valueEnderAluno} style={{margin:'1%'}} variant="outlined" label='Endereço Residencial' className='EnderecoResidencial' id='EnderecoResidencial'></TextField>
                        <TextField onChange={(e) => setValueBairroAluno(e.target.value)} value={valueBairroAluno} style={{margin:'1%'}} variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField onChange={(e) => setValueCidadeAluno(e.target.value)} value={valueCidadeAluno} style={{margin:'1%'}} variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField onChange={(e) => setValueUfResidAluno(e.target.value)} value={valueUfResidAluno} style={{margin:'1%'}} variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'>
                            <MenuItem value="AC">Acre</MenuItem>
                            <MenuItem value="AL">Alagoas</MenuItem>
                            <MenuItem value="AP">Amapá</MenuItem>
                            <MenuItem value="AM">Amazonas</MenuItem>
                            <MenuItem value="BA">Bahia</MenuItem>
                            <MenuItem value="CE">Ceará</MenuItem>
                            <MenuItem value="DF">Distrito Federal</MenuItem>
                            <MenuItem value="ES">Espírito Santo</MenuItem>
                            <MenuItem value="GO">Goiás</MenuItem>
                            <MenuItem value="MA">Maranhão</MenuItem>
                            <MenuItem value="MT">Mato Grosso</MenuItem>
                            <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                            <MenuItem value="MG">Minas Gerais</MenuItem>
                            <MenuItem value="PA">Pará</MenuItem>
                            <MenuItem value="PB">Paraíba</MenuItem>
                            <MenuItem value="PR">Paraná</MenuItem>
                            <MenuItem value="PE">Pernambuco</MenuItem>
                            <MenuItem value="PI">Piauí</MenuItem>
                            <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                            <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                            <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                            <MenuItem value="RO">Rondônia</MenuItem>
                            <MenuItem value="RR">Roraima</MenuItem>
                            <MenuItem value="SC">Santa Catarina</MenuItem>
                            <MenuItem value="SP">São Paulo</MenuItem>
                            <MenuItem value="SE">Sergipe</MenuItem>
                            <MenuItem value="TO">Tocantins</MenuItem></TextField>
                        <TextField onChange={(e) => setValueCepAluno(e.target.value)} value={valueCepAluno} style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' id='CEP'></TextField>
                        <TextField onChange={(e) => setValueGrauInstAluno(e.target.value)} value={valueGrauInstAluno} style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField onChange={(e) => setValueProfAluno(e.target.value)} value={valueProfAluno} style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField onChange={(e) => setValueAtuacaoAluno(e.target.value)} value={valueAtuacaoAluno} style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField onChange={(e) => setValuePaiAluno(e.target.value)} value={valuePaiAluno} style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField onChange={(e) => setValueMaeAluno(e.target.value)} value={valueMaeAluno} style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
                    </div>
                    <h2 className='titles'>2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado</h2>
                    <div id='Form2'>
                        <TextField onChange={(e) => setValueNomeResp(e.target.value)} value={valueNomeResp} style={{margin:'1%'}} variant="outlined" label='Nome do Responsável (seu nome)' className='nome' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => setValueSexoResp(e.target.value)} value={valueSexoResp} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='ufTrabalho'><MenuItem value='M'>M</MenuItem><MenuItem value='F'>F</MenuItem></TextField>
                        <TextField onChange={(e) => setValueVinculoResp(e.target.value)} select value={valueVinculoResp} style={{margin:'1%'}} variant="outlined" label='Vínculo' className='inputs' id='ufTrabalho'>
                            <MenuItem value='Familiar'>Familiar</MenuItem>
                            <MenuItem value='Advogado'>Advogado</MenuItem>
                            <MenuItem value='Visitante'>Visitante</MenuItem>
                            <MenuItem value='Núcleo de Ensino Penitenciário'>Núcleo de Ensino Penitenciário</MenuItem>
                            <MenuItem value='Agente Penitenciário'>Agente Penitenciário</MenuItem>
                            <MenuItem value='Pedagogo Penitenciário'>Pedagogo Penitenciário</MenuItem></TextField>
                        <TextField onChange={(e) => cpfRespFormat(e.target.value)} value={valueCpfResp} style={{margin:'1%'}} inputProps={{ maxLength: 14 }} variant="outlined" label='CPF' className='inputs' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => setValueRgResp(e.target.value)} value={valueRgResp} style={{margin:'1%'}} variant="outlined" label='RG' className='inputs' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => setValueOrgExpResp(e.target.value)} value={valueOrgExpResp} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => phoneCelularRespFormat(e.target.value)} value={valueCelularResp} inputProps={{ maxLength: 14 }} style={{margin:'1%'}} variant="outlined" label='Celular' className='inputs' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => phoneResidRespFormat(e.target.value)} value={valueFoneResidResp} inputProps={{ maxLength: 14 }} style={{margin:'1%'}} variant="outlined" label='Fone Residencial' className='inputs' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => phoneTrabRespFormat(e.target.value)} value={valueFoneTrabResp} inputProps={{ maxLength: 14 }} style={{margin:'1%'}} variant="outlined" label='Fone Trabalho' className='inputs' id='ufTrabalho'></TextField>
                        <TextField onChange={(e) => setValueEmail(e.target.value)} value={valueEmail} style={{margin:'1%'}} variant="outlined" label='Email' className='email' id='ufTrabalho'></TextField>  
                    </div>
                    <h3 className='titles'>3 - DADOS PRISIONAIS</h3>
                    <div id='Form3'>
                        <TextField onChange={(e) => setValueInfoPen(e.target.value)} value={valueInfoPen} style={{margin:'1%'}} variant="outlined" label='INFOPEN' className='inputs' id='infopen'></TextField>  
                        <TextField onChange={(e) => setValueUfPris(e.target.value)} value={valueUfPris} select style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufTrabalho'><MenuItem value="AC">Acre</MenuItem>
                            <MenuItem value="AL">Alagoas</MenuItem>
                            <MenuItem value="AP">Amapá</MenuItem>
                            <MenuItem value="AM">Amazonas</MenuItem>
                            <MenuItem value="BA">Bahia</MenuItem>
                            <MenuItem value="CE">Ceará</MenuItem>
                            <MenuItem value="DF">Distrito Federal</MenuItem>
                            <MenuItem value="ES">Espírito Santo</MenuItem>
                            <MenuItem value="GO">Goiás</MenuItem>
                            <MenuItem value="MA">Maranhão</MenuItem>
                            <MenuItem value="MT">Mato Grosso</MenuItem>
                            <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                            <MenuItem value="MG">Minas Gerais</MenuItem>
                            <MenuItem value="PA">Pará</MenuItem>
                            <MenuItem value="PB">Paraíba</MenuItem>
                            <MenuItem value="PR">Paraná</MenuItem>
                            <MenuItem value="PE">Pernambuco</MenuItem>
                            <MenuItem value="PI">Piauí</MenuItem>
                            <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                            <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                            <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                            <MenuItem value="RO">Rondônia</MenuItem>
                            <MenuItem value="RR">Roraima</MenuItem>
                            <MenuItem value="SC">Santa Catarina</MenuItem>
                            <MenuItem value="SP">São Paulo</MenuItem>
                            <MenuItem value="SE">Sergipe</MenuItem>
                            <MenuItem value="TO">Tocantins</MenuItem></TextField>  
                        <TextField onChange={(e) => setValuePenitenciaria(e.target.value)} value={valuePenitenciaria} style={{margin:'1%'}} variant="outlined" label='Penitenciária' className='penitenciaria' id='ufTrabalho'></TextField>  
                        <TextField onChange={(e) => setValueBloco(e.target.value)} value={valueBloco} style={{margin:'1%'}} variant="outlined" label='Bloco' className='line5' id='ufTrabalho'></TextField>  
                        <TextField onChange={(e) => setValueAla(e.target.value)} value={valueAla} style={{margin:'1%'}} variant="outlined" label='Ala' className='line5' id='ufTrabalho'></TextField>  
                        <TextField onChange={(e) => setValueCela(e.target.value)} value={valueCela} style={{margin:'1%'}} variant="outlined" label='Cela' className='line5' id='ufTrabalho'></TextField>  
                        <TextField onChange={(e) => setValueCondicao(e.target.value)} value={valueCondicao} style={{margin:'1%'}} variant="outlined" label='Condição' className='line5' id='ufTrabalho'></TextField>  
                        <TextField onChange={(e) => setValueRegime(e.target.value)} value={valueRegime} style={{margin:'1%'}} variant="outlined" label='Regime' className='line5' id='ufTrabalho'></TextField>  
                    </div>
                    <h4 className='titles'>4 - DADOS GERAIS</h4>
                        <div className='flex flex-col w-5/6 p-10'>
                            <div className='text-3xl text-gray-600 lg:ml-10 flex justify-between'>
                                <div>Crie a senha para acessar a Área do Aluno
                                    <div id='outterForm4'>
                                    <div id='Form4'>
                                        <TextField style={{margin:'1%'}} variant="outlined" type='password' id='senha' label='Senha' className='lg:w-2/5'></TextField>
                                        <TextField style={{margin:'1%'}} variant="outlined" type='password' id='confirmaSenha' label='Confirmar senha' className='lg:w-2/5'></TextField>
                                    </div>
                                    </div>
                                </div>
                                <div className='lg:flex hidden flex-col max-w-md'>Cláusulas Gerais
                                    <div className='flex'>
                                    <Checkbox onChange={()=> {!generalClauses ? setGeneralClauses(true) : setGeneralClauses(false)}} ></Checkbox>
                                    <h3 className='text-base'>O cursista e/ou preposto declara(m) estar ciente(s) e concorda(m) com as CLÁUSULAS GERAIS que integram o presente Contrato de Prestação de Serviços Educacionais.</h3>
                                    </div>  
                                </div>
                            </div>
                            <div className='lg:hidden flex flex-col max-w-md'>Cláusulas Gerais
                                    <div className='flex'>
                                    <Checkbox onChange={()=> {!generalClauses ? setGeneralClauses(true) : setGeneralClauses(false)}} ></Checkbox>
                                    <h3 className='text-base'>O cursista e/ou preposto declara(m) estar ciente(s) e concorda(m) com as CLÁUSULAS GERAIS que integram o presente Contrato de Prestação de Serviços Educacionais.</h3>
                                    </div>  
                                </div>
                        </div>
            </FormControl>
            <div className='w-full flex self-center lg:w-1/2 h-20 justify-around'>
            <button className='lg:w-1/3 h-fit p-2 rounded-sm bg-red-600' onClick={() => clearElements()}>Limpar</button>
            <button type='submit' className='lg:w-1/3 h-fit p-2 rounded-sm bg-green-500' onClick={() => clearElements()}>Concluir Cadastro</button>
            </div>
        </div>
    )
}