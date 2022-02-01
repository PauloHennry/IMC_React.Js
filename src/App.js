 import { useState } from 'react'
 import './app.css';
 
 export default function App(){

  function calcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      setMessagem("Você esta abaixo do seu peso IMC: " + imc.toFixed(2));
    }
    else if(imc >= 18.6 && imc < 24.9){
      setMessagem("Você esta no peso ideal de seu IMC: " + imc.toFixed(2));
    }
    else if(imc >= 24.9 && imc < 34.9){
      setMessagem("Você esta levemente acima de seu peso IMC: " + imc.toFixed(2));
    }
    else if(imc > 34.9){
      setMessagem("Cuidado risco de obsidade seu IMC: " + imc.toFixed(2));
    }
  }

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [messagem, setMessagem] = useState('');

  return(
    <div class="cont-app">
      <h1 class="h1-imc">Calculadora IMC</h1>
      <span>Vamos calcular o imc</span>
      <div className="input">
        <input className='input-user' type="text" placeholder="Peso em (kg) Ex: 90" value={peso} onChange={(e)=> setPeso(e.target.value)}></input>
      </div>
      <div className="input">
        <input className='input-user' type="text" placeholder="Altura em (cm) Ex: 180" value={altura} onChange={(e)=> setAltura(e.target.value)}></input>
      </div>
      <button className="button" onClick={calcularIMC}>Calcular</button>
      <div>
        <h2 >{messagem}</h2>
      </div>
    </div>
  )
}