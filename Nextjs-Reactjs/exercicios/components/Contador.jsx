import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: 0,
    numero2: this.props.valorInicial ?? 0
  }

  incremento = () => {
    this.setState({
      numero: this.state.numero + (this.props.passo ?? 1)
    })
  }

  decremento = () => {
    this.setState({
      numero: this.state.numero - 1
    })
  }



  render(){
   return (
    <div>
      <h1>Contador (usando classe) </h1>
      <h2>{this.state.numero2}</h2>
      <h2>{this.state.numero}</h2>
      <button onClick={this.incremento}>+</button>
      <button onClick={this.decremento}>-</button>
    </div>
   ) 
  }
}