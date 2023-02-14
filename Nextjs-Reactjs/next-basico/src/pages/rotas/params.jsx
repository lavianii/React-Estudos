import Link from "next/link"
import { useRouter } from "next/router"

export default function Params(){


  const router = useRouter()
  const id = router.query.id
  const nome = router.query.nome

  console.log(router)


  return(
    <div>
      <h1>Rotas Params: {id} e {nome}</h1>
      <Link href={"/rotas"}>
        <button>Volar</button>
      </Link>
    </div>
  )
}