import { Link } from "react-router-dom";
function Pg2(){
    return(
        <div className="Pg2">
            <p>Você consegui ir para pg 2</p>
            <Link to="/pagina1">                    
                <h3>Voltar pagina inicial</h3>
            </Link>
        </div>
    )

}

export default Pg2;