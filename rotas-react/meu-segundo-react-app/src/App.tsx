import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/App.css';
import Home from './componentes/Home';
import Pg2 from './componentes/Pg2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Cabeçalho
      </header> 
        <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path='/pagina1' element={<Home />}></Route>
            
               <Route path='pagina2' element={<Pg2 />}></Route>
          </Routes>
        </BrowserRouter>
    
      <footer className="App-footer">
        Rodapé
      </footer>
    </div>
  );
}

export default App;
//Fiz o download do pacote Router 
// para utilizar as rotas

//<Route index element={<Home />} /> ele vai definir a rota
//pagina1 como inical