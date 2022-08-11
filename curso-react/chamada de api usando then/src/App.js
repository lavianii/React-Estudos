import { useState, useEffect } from 'react';
import './style.css';


function App() {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {

    const loadApi = () =>{
      //armazena a url da api
      let url = 'https://jsonplaceholder.typicode.com/users';

      //faz a requisição para a api busca as informacoes
      fetch(url)
      //transforma o resultado em json
      .then((result) => result.json())

      //armazena as informacoes em um array pois esse then so retorna o valor
      //caso o 1 then seja executado
      .then((json) => {
        console.log(json);
        setUsuario(json);
      })
    }
    //chamo a funcao
    loadApi();

  },[])


  return (
    <div className='container'>
      <header>
        <strong>Lista de usuarios</strong>
      </header>
      {/*percorre a api para mostrar na tela */}
      {usuario.map((user) => {
        return(
          //key serve para identificar o elemento
          <article key={user.id}>
            {/*mostra o nome do usuario*/}
            <strong>{user.name}</strong>
          </article>
        )
      })}
    </div>
  );
}

export default App;
