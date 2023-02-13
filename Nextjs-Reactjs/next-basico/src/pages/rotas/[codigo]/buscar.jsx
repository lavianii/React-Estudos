import { useRouter } from "next/router"


export default function buscar(){

  const routes = useRouter();
  const codigo = routes.query.codigo

  return(
    <div>
      <h1>Rotas / {codigo} / Buscar</h1>
    </div>
  )
} 