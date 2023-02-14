const pessoas = []

export default function form(req, res) {
  if (req.method === "POST") {
    post(req, res)
  } else if (req.method === "GET") {
    get(req, res)
  } else {
    res.status(405).send()
  }


}

function post(req, res) {
  const dados = JSON.parse(req.body)
  pessoas.push(dados)
  res.status(200).json({
    msg: "Criado com sucesso"
  })
}

function get(req, res){
  res.status(200).json(pessoas)
}
