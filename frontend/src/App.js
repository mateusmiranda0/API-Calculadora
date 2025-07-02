import React,{useState} from 'react'
import axios from 'axios'
import "./App.scss"

export default function App(){
  const [num1,setNum1] = useState('');
  const [num2,setNum2] = useState('');
  const [resultado,setResultado] = useState(null);
  let [erro,setErro] = useState(null);

  const API_URL = 'http://localhost:3001'

  const Operacao = async(operacao) =>{
    setErro(null);
    setResultado(null);

    if(num1 === '' || num2 === ''){
      setErro("Por favor informe ambos os números!");
      return;
    }

    const dados = {num1: Number(num1),num2: Number(num2)}
    console.log(dados)

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
      setResultado(resposta.data.result);
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
        <button onClick={()=>Operacao('soma')}>Somar</button>
        <button onClick={()=>Operacao('subtracao')}>Subtrair</button>
        <button onClick={()=>Operacao('multiplicacao')}>Multiplicar</button>
        <button onClick={()=>Operacao('divisao')}>Dividir</button>
      </div>
      {resultado !== null && (
        <div className="result">
          Resultado: {resultado}
        </div>
        )}
      {erro && (
        <div className="error">
          Erro: {erro}
        </div>
        )}
    </div>
  );
}
