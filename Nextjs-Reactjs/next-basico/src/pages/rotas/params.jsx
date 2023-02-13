import { useRouter } from "next/router"

export default function params(){


  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome

  console.log(router)


  return(
    <div>
      <h1>Rotas Params: {id} e {nome}</h1>
    </div>
  )
}