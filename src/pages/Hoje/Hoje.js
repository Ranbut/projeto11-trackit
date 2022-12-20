import {HojeContainer, HabitoContainer} from './styles'
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import { HabitosContext } from '../../contexts/HabitosContext';
import dayjs from 'dayjs';

function Hoje() {

    const { habitosConcluidos, setHabitosConcluidos } = useContext(HabitosContext);
    const [habitosHoje, setHabitosHoje] = useState([]);
    const { usuario } = useContext(UsuarioContext);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        requisicao.then((res) => {
            setHabitosHoje(res.data);
            const novoObjeto = { feitos: (res.data.filter(o => o.done === true).length), total: res.data.length }
            setHabitosConcluidos({ ...novoObjeto });
        });
        requisicao.catch((res) => { alert(res.response.data.message); });
    }, [usuario.token, setHabitosConcluidos]);

    function clicar(h) {
        let requisicao;
        if (h.done === false) {
            requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/check`, {}, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        }else{
            requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}/uncheck`, {}, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        }
        requisicao.then(() => atualizar());
        requisicao.catch((res) => { alert(res.response.data.message); });
    }

    function atualizar() {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", { headers: { 'Authorization': `Bearer ${usuario.token}` } });
        requisicao.then((res) => {
            setHabitosHoje(res.data);
            const novoObjeto = { feitos: (res.data.filter(o => o.done === true).length), total: res.data.length }
            setHabitosConcluidos({ ...novoObjeto });
        });
        requisicao.catch((res) => { alert(res.response.data.message); });
    }

    function renderizarDia() {

        let nomeDia = '';

        //Verificar qual é o dia da semana
        switch (dayjs().day()) {
            case 0:
                nomeDia = 'Domingo';
                break;
            case 1:
                nomeDia = 'Segunda-feira';
                break;
            case 2:
                nomeDia = 'Terça-feira';
                break;
            case 3:
                nomeDia = 'Quarta-feira';
                break;
            case 4:
                nomeDia = 'Quinta-feira';
                break;
            case 5:
                nomeDia = 'Sexta-feira';
                break;
            case 6:
                nomeDia = 'Sábado';
                break;
            default:
                break;
        }
        return (
            <h1 data-test="today">{nomeDia}, {dayjs().date()}/{dayjs().month() + 1}</h1>
        );
    }

    return (
        <HojeContainer habitosConcluidos={habitosConcluidos}>
            {renderizarDia()}
            <p data-test="today-counter">{habitosConcluidos.feitos === 0 ? "Nenhum hábito concluído ainda" : `${Math.round((habitosConcluidos.feitos / habitosConcluidos.total) * 100)}% dos hábitos concluídos`}</p>
            {habitosHoje.map((h) => <HabitoContainer data-test="today-habit-container" key={h.id} feito={h.done} recorde={h.highestSequence === h.currentSequence}>
                <div>
                    <h1 data-test="today-habit-name">{h.name}</h1>
                    <h2 data-test="today-habit-sequence">Sequência atual: 
                        <span> {h.currentSequence} dias</span>
                    </h2>
                    <h3 data-test="today-habit-record">Seu recorde: 
                        <span> {h.highestSequence} dias</span>
                    </h3>
                </div><button data-test="today-habit-check-btn" onClick={() => clicar(h)}><ion-icon name="checkmark-outline"></ion-icon></button></HabitoContainer>)}
        </HojeContainer>
    );
}

export default Hoje;