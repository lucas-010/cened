import { MenuItem, TextField } from '@mui/material';
import React from 'react';

export default function RegForm3({data, setData}){
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
        <div id='Form3'>
            <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'infopen':e.target.value.toUpperCase()}}))} value={data.aluno.infopen} style={{margin:'1%'}} variant="outlined" label='INFOPEN' className='inputs' id='infopen'></TextField>  
            <TextField onChange={(e) => setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'uf':e.target.value}}))} value={data.penitenciaria.uf} select style={{margin:'1%'}} variant="outlined" label='UF' className='inputs' id='ufPris'>
            {uf.map(item=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
            <TextField onChange={(e) => setData((data)=>({...data, penitenciaria:{...data.penitenciaria,'idPenitenciaria':e.target.value}}))} type='number' value={data.penitenciaria.idPenitenciaria} style={{margin:'1%'}} variant="outlined" label='Penitenciária' className='penitenciaria' id='penitenciaria'></TextField>  
            <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'bloco':e.target.value.toUpperCase()}}))} value={data.aluno.bloco} style={{margin:'1%'}} variant="outlined" label='Bloco' className='line5' id='bloco'></TextField>  
            <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'ala':e.target.value.toUpperCase()}}))} value={data.aluno.ala} style={{margin:'1%'}} variant="outlined" label='Ala' className='line5' id='ala'></TextField>  
            <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'cela':e.target.value.toUpperCase()}}))} value={data.aluno.cela} style={{margin:'1%'}} variant="outlined" label='Cela' className='line5' id='cela'></TextField>  
            <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'condicao':e.target.value}}))} value={data.aluno.condicaoPreso} select style={{margin:'1%'}} variant="outlined" label='Condição' className='line5' id='condicao'>
            <MenuItem value='1'>Sentenciado</MenuItem><MenuItem value='2'>Aguardando Sentença</MenuItem></TextField>  
            <TextField onChange={(e) => setData((data)=>({...data, aluno:{...data.aluno,'regime':e.target.value}}))} value={data.aluno.regime} select style={{margin:'1%'}} variant="outlined" label='Regime' className='line5' id='regime'><MenuItem value='1'>Fechado</MenuItem><MenuItem value='2'>Semiaberto</MenuItem><MenuItem value='3'>Aberto</MenuItem></TextField>  
        </div>
    )
}