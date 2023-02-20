import styles from "../styles/Formulario.module.css"
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState(0)
  const [portaComPresente, setportaComPresente] = useState(0)


  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h2 
            style={{
              display: "flex",
              alignItems:"center"
            }}
          >Monty Hall</h2>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Quantidade de Portas?"
            value={qtdPortas}
            onChange={novaQtdDePortas => setQtdPortas(novaQtdDePortas)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica
            text="Porta com presente?"
            value={portaComPresente}
            onChange={novaPortaComPresente => setportaComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link
            href={`/jogo/${qtdPortas}/${portaComPresente}`}
            className={styles.link}
          >
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
