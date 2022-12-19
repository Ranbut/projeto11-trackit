import styled from 'styled-components';

const HabitosContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    padding: 98px 17px;
    background-color: #F2F2F2;
    span{
        display: flex;
        justify-content: space-between;
        width: 100%;
        h1{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
            margin-bottom: 17px;
        }
        div{
            width: 40px;
            height: 35px;
            background-color: #52B6FF;
            border-radius: 4.63636px;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 27px;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 5px;
        }
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        display: ${props => props.habitos.length === 0 ? "flex" : "none"};
    }
;
`
export {HabitosContainer};