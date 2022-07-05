import {useState} from 'react';

function Hooks (){
    let idade = 20;
    const [novaIdade, setNovaIdade] = useState(30);

    const mudaIdade = () =>{
        idade = 31;
        console.log(idade)

    }

    const mudarNovaIdade = () => {
        setNovaIdade(35)
    }
    return(
        <div>
            <p>Idade: {idade}</p>
            <button onClick={mudaIdade}>Mudar idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={mudarNovaIdade}>Mudar nova idade</button>
        </div>
    );
};

export default Hooks;