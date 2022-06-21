import React, { useState, useEffect } from 'react'
import BoxLogin from '../components/BoxLogin'
import BoxInstructions from '../components/BoxInstructions'
import Footer from '../components/Footer'
import Header from '../components/Header'
import StudentArea from '../components/StudentArea'
import axios from 'axios'


export default function Login() {
  let [loginVerify, setLoginVerify] = useState(false);
  let [verified, setVerified] = useState(false);
  let [valueCpf, setValueCpf] = useState(''),
  [valueSenha, setValueSenha] = useState(' '),
  cpfApi = valueCpf.replaceAll('.','').replaceAll('-',''),
  [studentData, setStudentData] = useState({"cpf":'', "senha":''}),
  API = process.env.REACT_APP_API_KEY;

  useEffect(()=>{
    axios.get(`${API}/alunos?Cpf=${cpfApi}`).then(response=>{
      if(response.data.data.length ===1){
      setStudentData(response.data.data[0])}
      if(cpfApi === studentData.cpf && valueSenha === studentData.senha ){
        setLoginVerify(true);}
        else{
          setLoginVerify(false);}
        })
  },[cpfApi, valueSenha])

  if(verified){  
    return(
      <StudentArea API={API} studentData={studentData}/>
    )
  }
  else{
    return(
    <div className='absolute'>
        <Header/>
        <div className='w-screen min-h-screen flex flex-col lg:mt-40 mt-20'>
          <BoxInstructions/>
          <BoxLogin cpfApi={cpfApi} studentData={studentData} valueSenha={valueSenha} setValueSenha={setValueSenha} valueCpf={valueCpf} setValueCpf={setValueCpf} setVerified={setVerified} loginVerify={loginVerify}/>
        </div>
        <Footer/>
    </div>)
    }
  }

