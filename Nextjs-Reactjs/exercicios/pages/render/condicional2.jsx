import If from "../../components/if";

export default function condicional2() {
  const nmr = 2

  return (
    <div>
      <If teste={nmr % 2 === 0}>
        <h1>Numero {nmr} Par</h1>
      </If>
      <If teste={nmr % 2 ===1}>
        <h1>Numero {nmr} Impar</h1>
      </If>
    </div>
  )
} 