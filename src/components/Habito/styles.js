import styled from 'styled-components';

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

const HabitoContainer = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 13px 15px;
    h3{
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
        ion-icon{
            width: 13px;
            height: 15px;
            color: #666666;
        }
    }
`;

export {BotaoLetra, HabitoContainer};