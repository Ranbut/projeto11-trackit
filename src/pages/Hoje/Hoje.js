import {HojeContainer, HabitoContainer} from './styles'
import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import { HabitosContext } from '../../contexts/HabitosContext';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/pt-br';
import { diasSemanas } from '../../constants/diasSemanas';

function Hoje() {

	dayjs.extend(updateLocale);
	dayjs.updateLocale('pt-br', {
		diasSemanas,
	});

	let hojeDia = dayjs().locale("pt-br").format('dddd, DD/MM');

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
    return (
        <HojeContainer habitosConcluidos={habitosConcluidos}>
            <h1 data-test="today">{hojeDia}</h1>
            <p data-test="today-counter">{habitosConcluidos.feitos === 0 ? "Nenhum hábito concluído ainda" : `${Math.round((habitosConcluidos.feitos / habitosConcluidos.total) * 100)}% dos hábitos concluídos`}</p>
            {habitosHoje.map((h) => <HabitoContainer data-test="today-habit-countainer" key={h.id} feito={h.done} recorde={h.highestSequence === h.currentSequence}>
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