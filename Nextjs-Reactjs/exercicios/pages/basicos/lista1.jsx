export default function Lista1(){
  return(
    <div>
      <h1>Lista 1</h1>
      {geraLista()}
    </div>
  )
}

function geraLista(qtd){

  const lista = []

  for(let i=1;i<=qtd;i++){
      lista.push(<span>{i},</span>)
  }

  return lista

}