interface PessoaProps {
  nome: string,
  idade?: number
}

export default function Pessoa(props: PessoaProps){
  return (
    <div>
        <div>Nome {props.nome}</div>
        <div>Pessoa {props.idade ?? "Nao informada"}</div>
    </div>
  )
} 