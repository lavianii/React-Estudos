import './App.css';

import OutroComponente from './components/OutroComponente';
import PrimeiroComponente from './components/PrimeiroComponente';

function App() {
  return (
    <div className="App">
      <h1>Olá React</h1>
      <PrimeiroComponente />
      <OutroComponente />
    </div>
  );
}
//onde colocamos os componentes para serem usados
export default App;
