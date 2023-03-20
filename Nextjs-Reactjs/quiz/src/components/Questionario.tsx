import QuestaoModel from "@/model/questao"
import Questao from "./Questao"
import styles from "@/styles/Questionario.module.css"
import Botao from "./Botao"

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if(props.questao.naoRespondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao
                    valor={props.questao}
                    tempoResposta={6}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irProximoPasso}
                />
                : false
            }
            <Botao
                onClik={props.irProximoPasso}
                texto={props.ultima ? "Finalizar" : "Proxima"}
            />
        </div>
    )
}