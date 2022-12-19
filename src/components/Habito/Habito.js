import { useContext } from 'react';
import { HabitosContext } from '../HabitosContext';
import { UsuarioContext } from '../UsuarioContext';
import {BotaoLetra, HabitoContainer} from './styles'
import axios from 'axios';

export default function Habito({ dias, atualizar }) {

    const { habitos } = useContext(HabitosContext);
    const { usuario } = useContext(UsuarioContext);

    function apagarHabito(h) {
        if (window.confirm('Gostaria de apagar este hábito?')) {
            const requisicao = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
            requisicao.then(() => atualizar());
            requisicao.catch((res) => alert(res.response.data.message));
        }
    }

    function objetoHabito(h) {
        return (
            <HabitoContainer key={h.id}>
                <h3>
                    {h.name}
                    <ion-icon name="trash-outline" onClick={() => apagarHabito(h)}></ion-icon>
                </h3>
                {dias.map((d) => <BotaoLetra key={d.id} disabled selecionado={h.days.includes(d.id)}>{d.nome}</BotaoLetra>)}
            </HabitoContainer>
        );
    }
    return (
        <>{habitos.map((h) => objetoHabito(h))}</>

    );
}