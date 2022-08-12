import { Link } from "react-router-dom";

function Contatos() {
    return (
      <div >
        <h1>Contatos</h1>
        <Link to="/produto/:id"><button>Produto</button></Link>
      </div>
    );
  }
  
  export default Contatos;
  