import Filho from "./Filho"

export default function Pai(){

  function falarComigo(param1,param2,param3){
    console.log(param1)
    console.log(param2)
    console.log(param3)
  }


  return(
    <div>
      <Filho funcao={falarComigo}/>
    </div>
  )
}