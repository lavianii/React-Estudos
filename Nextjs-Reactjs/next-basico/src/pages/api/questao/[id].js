export default function questao(req, res) {
  if (req.method === "GET") {
    const id = req.query.id
    res.status(200).json({
      id: id,
      enunciado: "Qual sua cor preferida ?",
      respostas:[
        "Branca",
        "Vermelha",
        "Amarela",
        "Verde"
      ]
    })
  } else {
    res.status(405).json({
      menssage: `Argumento invalido ${req.method}`
    })
  }
}