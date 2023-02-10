import {useState } from "react"

export default function contador() {
   const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
    fontSize: "50px"
  }

  const [nmr, setNmr] = useState(0)
  
  return (
    <div style={estilo}>
      <h1>Contador</h1>
      <div style={{fontSize: "50px"}}>
        Valor: {nmr}
        </div>
      <button style={{fontSize: "50px"}} onClick={() => setNmr(nmr-1)}>-</button>
      <button style={{fontSize: "50px"}} onClick={() => setNmr(nmr+1)}>+</button>
    </div>
  )
}