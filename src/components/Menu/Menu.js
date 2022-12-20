import { UsuarioContext } from '../../Contexts/UsuarioContext';
import { HabitosContext } from '../../Contexts/HabitosContext';
import { useContext } from 'react';
import {MenuContainer, Botao, AtualBotao} from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Menu(){

    const {usuario} = useContext(UsuarioContext);
    const {habitosConcluidos} = useContext(HabitosContext);

    return(
        <MenuContainer data-test="menu" id={usuario.id}>
            <Link data-test="habit-link" to="/habitos"><Botao>Hábitos</Botao></Link>
            <Link data-test="today" to="/hoje">
                <AtualBotao>
                    <div>
                        <CircularProgressbar
                            value={habitosConcluidos.total === 0 ? "0" : Math.round((habitosConcluidos.feitos/habitosConcluidos.total)*100)}
                            text="Hoje"
                            styles={buildStyles({
                                textSize: '22px',
                                pathTransitionDuration: 0.5,
                                pathColor: '#FFFFFF',
                                textColor: '#FFFFFF',
                                trailColor: '#52B6FF',
                                backgroundColor: '#52B6FF'
                            })}
                            />
                    </div>
                </AtualBotao>
            </Link>
            <Link data-test="history-link" to="/historico"><Botao>Histórico</Botao></Link>
        </MenuContainer>
    );

}

export default Menu;