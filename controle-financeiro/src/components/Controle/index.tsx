import "./controle.css"

export default function Controle() {
  return (
    <>
      <div className="container-controle">
        <div className="container-input">
          <div>
            <label>Entrada: </label>
            <input className="input-controle" type="number" />
          </div>
          <div>
            <label>Saida:</label>
            <input className="input-controle" type="number" />
          
          </div>
          <div className="btn-container">
            <button className="btn-controle"><strong>Confirmar</strong></button>
          </div>
        </div>
        
      </div>
    </>
  )
}