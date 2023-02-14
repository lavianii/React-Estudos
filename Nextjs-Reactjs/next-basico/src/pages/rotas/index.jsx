import Link from "next/link";
import router, { useRouter } from "next/router";


export default function rotas() {

  function navegacaoSimples(url){
    router.push(url)
  }

  function navegacaoComParametros(){
    router.push({
      pathname: "/rotas/params",
      query:{
        id: 123,
        nome: "Jonas"
      }
    })
  }

  return (
    <div>
      <h1>Rota index</h1>
      <ul>
        <Link href={"/rotas/params?id=1&nome=jonas"}>
          <li>Params</li>
        </Link>
        <Link href={"/rotas/123/buscar"}>
          <li>Buscar </li>
        </Link>
        <Link href={"/rotas/123/Jonas"}>
          <li>Jonas</li>
        </Link>
      </ul>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/codigo/Jonas")}>Jonas</button>
        <button onClick={() => navegacaoComParametros("/rotas/params")}>Parametro</button>

      </div>
    </div>
  )
}