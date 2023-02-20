import { 
  BiArrowToBottom, 
  BiArrowToTop 
} from "react-icons/bi";

import Cards from "./components/Cards";
import Titulo from "./components/Titulo";
import Controle from "./components/Controle";

import "./app.css"
import Lista from "./components/Lista";

function App() {
  return (    
      <div className="app">
        <Titulo />
        <Cards 
          icons={<BiArrowToTop />}
          titulo="Entrada" 
          valor={100}
        />
        <Cards 
          icons={<BiArrowToBottom />}
          titulo="Saida" 
          valor={10}
        />
        <Cards titulo="Total:" valor={90}/>
        <Controle />
        <Lista />
      </div>
      
  );
}

export default App;
