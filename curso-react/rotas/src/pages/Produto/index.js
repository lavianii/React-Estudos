import { Link, useParams } from "react-router-dom";

const Produto = () => {

    const { id } = useParams();

    return (
        <div>
            <h1>Produto</h1>
            <p>Produro: {id}</p>

            <Link to="/"><button>Voltar Home</button></Link>
        </div>
    );

}

export default Produto;