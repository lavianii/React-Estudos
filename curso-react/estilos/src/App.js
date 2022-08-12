import { BemVindo, Container, Header, Titulo } from './styled';

function App (){
    return (
        <>
        <Container>
            <Header>
                <Titulo>Teste styled</Titulo>
            </Header>


        <BemVindo cor="00FF00" tamanho={100}>
                <p>Teste styled components</p>
        </BemVindo>

        </Container>
        </>
        
    )

}

export default App;