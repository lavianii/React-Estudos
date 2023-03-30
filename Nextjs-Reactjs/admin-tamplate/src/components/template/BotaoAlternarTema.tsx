import { IconeSol } from "../icons"

interface BotaoAlternarTemaProps {
    tema: string | null
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
  return props.tema === 'dark' ? (
    <div onClick={props.alternarTema} className={``}>
        <div className={``}>
          {IconeSol}
        </div>
        <div>
            <span>Claro</span>
        </div>
    </div>
  ) : (
    <div>

    </div>
  )
}
