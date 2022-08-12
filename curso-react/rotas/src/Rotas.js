import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Contatos from './pages/Contatos';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Erro from './pages/Erro';
import Produto from './pages/Produto';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/sobre" element={<Sobre />} />
                <Route exact path="/contato" element={<Contatos />}  />
                <Route exact path="/produto/:id" element={<Produto />} />


                <Route path="*" element={<Erro />}></Route>
            </Routes>
        </BrowserRouter>    
    );
}

export default Rotas;