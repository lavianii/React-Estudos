const OutroComponente = () => {

    const handleClick = () => {
        console.log('clicou');
    }
    return(
    <div>
        <p>Segundo componente</p>
        <button onClick={handleClick}>Evento click</button>
        <hr/>
        <button onClick={() => console.log('Direto no elemento')}>Evento no elemento</button>
        <hr/>
    </div>
    );
};
export default OutroComponente;

//Outra forma de usar seus componentes
//Usando o evento de clique onClick
//Podemos usar direto no elemento a função