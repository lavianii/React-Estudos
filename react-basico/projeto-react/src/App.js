import './App.css';
import Hooks from './components/Hooks';
import Imagens from './components/Imagens';
import OutroComponente from './components/OutroComponente';
import PrimeiroComponente from './components/PrimeiroComponente';
import Lista from './components/Lista';
import RenderCondi from './components/RenderCondi';


function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <PrimeiroComponente />
      <OutroComponente />
      <Imagens />
      <Hooks />
      <Lista />
      <RenderCondi x={5}/>
    </div>
  );
}
//onde colocamos os componentes para serem usados
export default App;
