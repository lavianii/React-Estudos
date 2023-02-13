import Circulo from "../../components/Circulo"
import styles from "../../styles/MegaSena.module.css"

import { useEffect, useState } from "react"
import { mega } from "../../functions/mega"

export default function megaSena() {
  const [qtd, setQtd] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega())
  }, [])

  
  function circulosComNumeros() {
    return numeros.map((n) => {
      return <Circulo key={n} numero={n} />
    })
  }

  return (
    <div className={styles.container}>
      <h1>Mega Sena</h1>
      <div className={styles.item1}>
        {circulosComNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={qtd}
          onChange={e => setQtd(+e.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtd))}>
          Gerar Aposta
        </button>
      </div>
    </div>
  )
}