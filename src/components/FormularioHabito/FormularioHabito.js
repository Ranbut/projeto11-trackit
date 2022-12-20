import { ThreeDots } from 'react-loader-spinner';
import {FormularioContainer, BotoesContainer, BotaoSalvar, BotaoCancelar, BotaoLetra} from './styles'
import axios from 'axios';
import { UsuarioContext } from '../../contexts/UsuarioContext';
import { useContext, useState } from 'react';

function FormularioHabito({ dias, containerCriar, setContainerCriar, atualizar }) {
    const { usuario } = useContext(UsuarioContext);
    const [clicado, setClicado] = useState(false);
    const [habito, setHabito] = useState({ name: "", days: [] });

    function criar(event) {
        event.preventDefault();
        if (habito.days.length === 0) {
            alert("Escolha pelo menos um dia.")
        } else {
            setClicado(true);
            const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habito, { headers: { 'Authorization': `Bearer ${usuario.token}` } });
            requisicao.then(() => { atualizar(); setHabito({ name: "", days: [] }); setClicado(false); setContainerCriar(false); });
            requisicao.catch((res) => { alert(res.response.data.message); setClicado(false); });
        }
    }

    function selecionarDia(d) {
        if (habito.days.includes(d.id)) {
            const novoArray = [];
            for (let i = 0; i < habito.days.length; i++) {
                if (d.id !== habito.days[i]) {
                    novoArray.push(habito.days[i]);
                }
            }
            setHabito({ ...habito, days: [...novoArray] });
        } else {
            setHabito({ ...habito, days: [...habito.days, d.id] });
        }
    }

    return (
        <FormularioContainer data-test="habit-create-container" onSubmit={criar} containerCriar={containerCriar} clicado={clicado}>
            <input data-test="habit-name-input" disabled={clicado} required type="text" placeholder="nome do hábito" value={habito.name} onChange={e => setHabito({ ...habito, name: e.target.value })}></input>
            <div>{dias.map((d) => <BotaoLetra data-test="habit-day" disabled={clicado} key={d.id} type="button" selecionado={habito.days.includes(d.id)} onClick={() => selecionarDia(d)}>{d.nome}</BotaoLetra>)}</div>
            <BotoesContainer>
                <BotaoCancelar data-test="habit-create-cancel-btn" disabled={clicado} type="button" onClick={() => setContainerCriar(!containerCriar)}>Cancelar</BotaoCancelar>
                <BotaoSalvar data-test="habit-create-save-btn" disabled={clicado} type="submit" clicado={clicado}>
                    <div>Salvar</div>
                    <ThreeDots
                        height="11"
                        width="43"
                        radius="9"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={clicado}
                    />
                </BotaoSalvar>
            </BotoesContainer>
        </FormularioContainer>
    );

}

export default FormularioHabito;