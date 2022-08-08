import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  //criado um objeto para 
  const [user, setUser] = useState({})

  function mudaRegistro(e){
    e.preventDefault();
    alert("Registrado com sucesso!");
    setUser({
      nome: nome,
      email: email,
      idade: idade
    });
  }

  return (
    <div>
      <h1>Cadastrando Usuario</h1>
      <form onSubmit={mudaRegistro}>
        <label>Nome:</label><br/>
        <input 
        placeholder="Digite seu nome" 
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        /><br/>
        
        <label>Email:</label><br/>
        <input 
        placeholder="Digite seu nome" 
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        /><br/>
        

        <label>Idade:</label><br/>
        <input 
        placeholder="Digite sua idade"
        value={idade}
        onChange={(evento)=> setIdade(evento.target.value)}
        /><br/>

        <button type="submit">Registrar</button>
      </form>
      <br/>
      <br/>
    <div>
      <span>Bem vindo: {user.nome}</span><br/>
      <span>Email: {user.email}</span><br/>
      <span>Idade: {user.idade}</span><br/>
    </div>
    </div>
  );
}

export default App;
