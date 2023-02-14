import { useState } from "react"

export default function form(){
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [pessoas, setPessoas] = useState(null)

  async function salvarUsuario(){
    await fetch("/api/form",{
      method: "POST",
      body: JSON.stringify( {
        nome: nome,
        idade: idade
      })
    })
    
    setNome("")
    setIdade("")

    const res = await fetch("/api/form")
    const pessoas = await res.json()
    setPessoas(pessoas)
    
  }

  function renderizarPessoas(){
    return pessoas?.map((p,i) => {
      return <li key={i}>{i+1} - {p.nome} tem {p.idade} anos</li>
    })
  }
  
  return (
    <div>
      <h1>Integrando com API #02</h1>
      <input 
        type="text" 
        value={nome}
        onChange={e => setNome(e.target.value)}
        />
      <input 
        type="number" 
        value={idade}
        onChange={e => parseInt(setIdade(e.target.value))}
        />

        <button onClick={salvarUsuario}>Enviar os dados</button>

        <ul>
          {renderizarPessoas()}
        </ul>
    </div>
  )
}