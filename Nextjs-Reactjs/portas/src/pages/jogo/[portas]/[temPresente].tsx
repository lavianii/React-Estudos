import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { atualizarPortas, criarPortas } from "../../../functions/portas"


import Porta from "../../../components/Porta"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"


export default function Jogo() {
  const rotas = useRouter()
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +rotas.query.portas
    const temPresente = +rotas.query.temPresente

    setPortas(criarPortas(portas,temPresente))
  },[rotas?.query])

  function renderizarPorta() {
    return portas.map(porta => {
      return <Porta
        key={porta.getNumero}
        value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
      />
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPorta()}
      </div>
      <div className={styles.botoes}>
        <Link href={"/"}>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}