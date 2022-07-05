function Lista (){
    const items = [{
        id: 1,
        nome: 'Jonas'
    },{
        id: 2,
        nome: 'Rodrigo'
    },{
        id: 3,
        nome: 'Joao'
    }]

    return <div>
        {items.map((item) => (
            <p key={item.id}>
            {item.id} - {item.nome}
            </p>
        ))}
    </div>
}

export default Lista;
