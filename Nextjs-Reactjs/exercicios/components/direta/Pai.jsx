import Filho from "./Filho";

export default function Pai(props){
  return(
    <div>
      <Filho nome= "nome1" familia={props.familia}/>
      <Filho nome= "nome2"familia={props.familia}/>
      <Filho nome= "nome3"familia={props.familia}/>
    </div>
  )
}