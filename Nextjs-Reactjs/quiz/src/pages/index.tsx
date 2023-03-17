import Questao from '@/components/Questao'
import RespostaModel from '@/model/resposta'
import QuestaoModel from '@/model/questao'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, "Melhor cor?", [
  RespostaModel.errada("Verde"),
  RespostaModel.errada("Vermelha"),
  RespostaModel.errada("Azul"),
  RespostaModel.certa("Preta")
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaForencida(indice: number) {
    setQuestao(questao.responderCom(indice))
    console.log(indice)
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}>
      <Questao
        valor={questao}
        respostaFornecida={respostaForencida}
      />
    </div>
  )
}
