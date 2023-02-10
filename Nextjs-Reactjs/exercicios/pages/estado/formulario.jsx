import { useState } from "react"

export default function formulario(){
  
  const [valor, setValor] = useState("Valor inicial")
  function aletrarInput(){
    setValor(valor + " ! ")
  }
  
  return(
    <div>
      <input 
        type="text" 
        value={valor} 
        onChange={e => setValor(e.target.value)}
        />

      <button onClick={aletrarInput}>Alterar</button>
    </div>
  )
}