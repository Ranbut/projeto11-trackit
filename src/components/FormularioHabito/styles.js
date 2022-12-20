import styled from 'styled-components';

const FormularioContainer = styled.form`
        width: 340px;
        height: 180px;
        background-color: #FFFFFF;
        border-radius: 5px; 
        display: ${props => props.containerCriar ? "flex" : "none"};
        flex-direction: column;
        padding: 18px;
        margin-bottom: 29px;
    input{
        width: 303px;
        height: 45px;
        background-color: ${props => props.clicado ? "#F2F2F2" : "#FFFFFF"};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 11px;
        font-family: 'Lexend Deca', sans-serif;
        margin-bottom: 8px;
        color: ${props => props.clicado ? "#AFAFAF" : "#000000"};
        &::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
`;
const BotoesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 29px;
    justify-content: flex-end;
`;

const BotaoSalvar = styled.button`
    width: 84px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    padding-bottom: 3px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15.976px;
    line-height: 20px;
    border: none;
    color: #FFFFFF;
    margin-left: 23px;
    opacity: ${props => props.clicado ? "0.7" : "1"};
    display: flex;
        justify-content: center;
        align-items: center;
    div{
        display: ${props => !props.clicado ? "flex" : "none"};
    }
`;

const BotaoCancelar = styled.button`
    width: 69px;
    height: 20px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15.976px;
    line-height: 20px;
    color: #52B6FF;
    border: none;
    background-color: #FFFFFF;
`;

const BotaoLetra = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selecionado ? "#CFCFCF" : "#FFFFFF"} ;
    border: 1px solid ${props => props.selecionado ? "#CFCFCF" : "#D5D5D5"};
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    margin-right: 4px;
`;

export {FormularioContainer, BotoesContainer, BotaoSalvar, BotaoCancelar, BotaoLetra};