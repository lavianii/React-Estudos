import Titulo from "../../components/Titulo"
export default function usandoTiulo(){

  return(
    <>
      <h1>Usando o componete titulo</h1>
      <Titulo 
        principal = "Pagina de cadastro"
        secundario = "Criar conta"
      />
    </>
  )
}