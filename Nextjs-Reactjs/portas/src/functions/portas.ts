import PortaModel from "../model/porta";

export function criarPortas(qtd: number, portaComPresente: number)
  : PortaModel[] {
  return Array.from({ length: qtd }, (_, i) => {
    const numero = i + 1
    const temPresente = numero === portaComPresente
    return new PortaModel(numero, temPresente)
  })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
  return portas.map(portaAtual => {
    const igualAModificado = portaAtual.getNumero === portaModificada.getNumero

    if (igualAModificado) {
      return portaModificada
    } else {
      return portaModificada.getAberta ? portaAtual : portaAtual.desselecionar()
    } 

  })
}