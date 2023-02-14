export function getStaticProps(){
  return {
    props: {
      numero: parseInt(Math.random()*100)
    }
  }
}

export default function Estatico(props){
  return (
    <div>
      <span>Aleatorio: {props.numero}</span>
    </div>
  )
}