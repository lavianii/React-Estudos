import Pessoa from "../../components/modulo/Pessoa";

export default function exemploTs(){
  return(
    <div>
      <Pessoa nome="Joao" idade={30}/>
      <Pessoa nome="Maria" />
    </div>
  )
}