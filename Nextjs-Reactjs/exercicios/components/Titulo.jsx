export default function Titulo(props){
  console.log(props)

  return(
    <>
      <h1>{props.principal}</h1>
      <h1>{props.secundario}</h1>
    </>
  )
}