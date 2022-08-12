import { Link } from "react-router-dom";

const Erro = () => {
    return (
        <div>
            <h1>Erro</h1>
            <p>Página não encontrada</p>

            <Link to="/"><button>Voltar Home</button></Link>
        </div>
    );

}

export default Erro;