import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 68px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
        margin: 25px 0px;
    }
`;
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 33px;
    input{
        width: 303px;
        height: 45px;
        background-color: ${props => props.clicado ? "#F2F2F2" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.976px;
        line-height: 25px;
        padding-left: 11px;
        margin-bottom: 6px;
        color: ${props => props.clicado ? "#AFAFAF" : "#000000"};
        &::placeholder{
            color: #DBDBDB;
        }
    }
    button{
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        color: #FFFFFF;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20.976px;
        line-height: 26px;
        opacity: ${props => props.clicado ? "0.7" : "1"};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div{
        display: ${props => !props.clicado ? "flex" : "none"};
    }
`;

export {Container, Formulario};