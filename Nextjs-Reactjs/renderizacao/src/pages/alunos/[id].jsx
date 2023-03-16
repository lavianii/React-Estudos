export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/alunos/tutores")
  const ids = await res.json()

  const paths = ids.map(id => {
    return {
      params: { id: `${id}` }
    }
  })

  return {
    fallback: false,//404
    paths: paths
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
  const aluno = await res.json()

  return {
    props: {
      aluno: aluno
    }
  }
}

export default function AlunoPorId({ aluno }) {


  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      {aluno ?
        <ul>
          <li>{aluno.id}</li>
          <li>{aluno.nome}</li>
          <li>{aluno.email}</li>
        </ul> : false
      }
    </div>
  )
}