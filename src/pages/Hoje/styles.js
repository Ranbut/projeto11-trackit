import styled from 'styled-components';

const HojeContainer = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    padding: 98px 17px;
    background-color: #F2F2F2;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        padding-bottom: 7px;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => (props.habitosConcluidos.feitos === 0 || isNaN(props.habitosConcluidos.feitos)) ? "#BABABA" : "#8FC549"};
        margin-bottom: 28px;
    }
`;

const HabitoContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    font-family: 'Lexend Deca', sans-serif;
    div{
        color: #666666;
        h1{
            font-size: 19.976px;
            line-height: 25px;
            
        }
        h2{
            font-size: 12.976px;
            line-height: 16px;
            span{
                color: ${props => props.feito ? "#8FC549" : "#666666"} ;
            }
        }
        h3{
            font-size: 12.976px;
            line-height: 16px;
            span{
                color: ${props => (props.feito && props.recorde) ? "#8FC549" : "#666666"} ;
            }
        }
    }
    button{
        width: 69px;
        height: 69px;
        background-color: ${props => props.feito ? "#8FC549" : "#EBEBEB"} ;
        border: 1px solid ${props => props.feito ? "#8FC549" : "#E7E7E7"};
        border-radius: 5px;
        border: none;
        ion-icon{
            width: 40px;
            height: 35px;
            color: #FFFFFF;
        }
    }
`;

export {HojeContainer, HabitoContainer};