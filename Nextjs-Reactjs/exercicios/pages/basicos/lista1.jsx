function gerarLista(final = 10){
  const list = []
  for(let i=0; i<=final; i++){
    list.push(<span>{i},</span>)
  }

  return list
}

export default function Lista1(){
  return(
    <div>
      <h1>Lista 1</h1>
      {gerarLista()}
    </div>
  )
}
