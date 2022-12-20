import { useContext } from 'react';
import { UsuarioContext } from '../../Contexts/UsuarioContext';
import {BotaoLetra, HabitoContainer} from './styles'
import axios from 'axios';

function Habito({ dias, atualizar, habitos }) {

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
            <HabitoContainer data-test="habit-container" key={h.id}>
                <h3 data-test="habit-name">
                    {h.name}
                    <ion-icon data-test="habit-delete-btn" name="trash-outline" onClick={() => apagarHabito(h)}></ion-icon>
                </h3>
                {dias.map((d) => <BotaoLetra data-test="habit-day" key={d.id} disabled selecionado={h.days.includes(d.id)}>{d.nome}</BotaoLetra>)}
            </HabitoContainer>
        );
    }
    return (
        <>{habitos.map((h) => objetoHabito(h))}</>

    );
}

export default Habito;