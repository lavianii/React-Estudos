import { useState } from "react"

export default function mouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  }

  function quandoMover(ev){
    setX(ev.clientX)
    setY(ev.clientY)
    console.log("X: " + ev.clientX + 
                "\nY: "+ev.clientY)
  }


  return (
    <div 
      style={estilo} 
      onMouseMove={quandoMover}
    >
      <span>Exixo X: {x}</span>
      <span>Exixo Y: {y}</span>
    </div>
  )
}