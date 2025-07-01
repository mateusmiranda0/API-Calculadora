import React, {useState} from 'react'
import axios from 'axios'

function App(){
  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [resultado,setResultado] = useState(null);
  const [erro,setErro] = useState(null);

  const API_URL = 'http://localhost:3001'

  const lidarComOperacao = async(operacao) =>{
    setErro(null);
    setResultado(null);

    const dados = {num1: Number(num1),num2: Number(num2)}

    try{
      let resposta;
      switch(operacao){
        case 'soma':
          resposta = await axios.get(`${API_URL}/soma`,{params: dados});
          break;
        case 'subtracao':
          resposta = await axios.post(`${API_URL}/subtracao`,dados);
          break; 
        case 'multiplicacao':
          resposta = await axios.get(`${API_URL}/multiplicacao/${num1}/${num2}`);
          break; 
        case 'divisao':
          resposta = await axios.post(`${API_URL}/divisao`,dados);
          break;
        default:
          return  
      }
      setResultado(resposta.data.resultado);
    }catch(err){
      setErro(err.response?.data?.error || err.message || "Ocorreu um erro desconhecido.")
    }
  }
  return(
    <div className='container'>
      <h1>Calculadora</h1>
      <div className='inputs'>
        <input type='number' placeholder='Digite um número:' value={num1} onChange={(e)=> setNum1(e.target.value)}></input>
        <input type='number' placeholder='Digite um número:' value={num2} onChange={(e)=> setNum2(e.target.value)}></input>
      </div>
      <div className='buttons'>
        <button 
      </div>
    </div>
  )
}
