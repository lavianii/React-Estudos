import{ Link} from "react-router-dom";
function Home(){
    return(
    <div className="Home">
        <div>
            <p>Vcê está na pagina inical</p>
            <Link to="/pagina2">
                <h3>Pagina inical</h3>
            </Link>
        </div>
    </div>
    );
}

export default Home;

//importamos o Link da dependecia Routes
//após ser clicado ira para outra pagina que no caso e 
//pagina2 