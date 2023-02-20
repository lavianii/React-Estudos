import "./card.css"

interface CardProps {
  titulo: string
  valor: number
  icons?: any
}

export default function Cards(props: CardProps){

  return(
    <div className="container-cards">
        <h1 className="titulo-cards">{props.titulo}{props.icons}</h1>
        <h2 className="valor-cards">R$: {props.valor}</h2>
    </div>
  )
}