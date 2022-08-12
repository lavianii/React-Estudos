import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;

`;

export const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;
    align-items: center;
    display: flex;
`; 

export const Titulo = styled.p`
    color: white;
    font-size: 35px;
`;

export const BemVindo = styled.div`
    font-size: ${props => `${props.tamanho}px`};
    color: ${props => `#${props.cor}`};
    text-align: center;
`;