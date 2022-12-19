import styled from "styled-components";

const MenuContainer = styled.div`
    width: 100%;
    height: 70px;
    left: 0px;
    bottom: 0px;
    position: fixed;
    background-color: #FFFFFF;
    display: ${props => props.id === "" ? "none" : "flex"};
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
`;
const Botao = styled.button`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    border: none;
    background-color: #FFFFFF;
`;
const AtualBotao = styled.div`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    border-radius: 90px;
    margin-bottom: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 80px;
        height: 80px;
    }
`;

export {MenuContainer, Botao, AtualBotao};