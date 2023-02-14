import { useRouter } from "next/router"


export default function CodigoEnome(){

  const routes = useRouter();
  const nome = routes.query.nome

  
  console.log(nome)

  return(
    <div>
      <h1>Rotas / Codigo / {nome}</h1>
    </div>
  )
} 