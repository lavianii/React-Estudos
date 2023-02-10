import { useState } from "react"
import Circulo from "../../components/Circulo"

export default function megaSena() {
  const estilo = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height:"90vh",
    gap: "20px"
  }

  const [valor, setValor] = useState(0)
  const [sortear, setSortear] = useState(0)

  function sorteador(){
    setSortear(parseInt(Math.random()*100))
  }

  return (
    <div style={estilo}>
      <h1>Sorteio mega sena</h1>
      <Circulo numero={sortear} />
      {}
      <input 
        type="number" 
        value={valor}
        onChange={e => setValor(e.target.value)}
        />
      <button onClick={sorteador}>Sortear</button>
    </div>
  )
}