import {HabitosContainer} from "./styles"
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UsuarioContext } from '../../Components/UsuarioContext';
import { HabitosContext } from '../../Components/HabitosContext';
import Formulario from '../../Components/FormularioHabito/FormularioHabito';
import Habito from '../../Components/Habito/Habito';

function Habitos(){

    const [habitos, setHabitos] = useState([]);
    const {usuario} = useContext(UsuarioContext);
    const {habitosConcluidos, setHabitosConcluidos} = useContext(HabitosContext);
    const [containerCriar, setContainerCriar] = useState(false);
    
    // Abreviaturas dos dias da semana
    const dias = [{id: 0, nome: "D"}, {id: 1, nome: "S"}, {id: 2, nome: "T"}, {id: 3, nome: "Q"}, {id: 4, nome: "Q"}, {id: 5, nome: "S"}, {id: 6, nome: "S"}];
    
    useEffect(() => { 
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers: {'Authorization': `Bearer ${usuario.token}` }});
        requisicao.then((res) => setHabitos(res.data)) ;
        requisicao.catch((res) => {alert(res.response.data.message);});
    }, [setHabitos, usuario.token]);

    function atualizar(){
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {headers: {'Authorization': `Bearer ${usuario.token}` }});
        requisicao.then((res) => {setHabitos(res.data); setHabitosConcluidos({...habitosConcluidos, total: (habitosConcluidos.total+1)});}) ;
        requisicao.catch((res) => alert(res.response.data.message));
    }

    return(
        <HabitosContainer habitos={habitos} >
            <span><h1>Meus hábitos</h1><div onClick={() => setContainerCriar(!containerCriar)}>+</div></span>
            <Formulario dias={dias} containerCriar={containerCriar} setContainerCriar={setContainerCriar} atualizar={atualizar}/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Habito dias={dias} atualizar={atualizar} habitos={habitos}/>
        </HabitosContainer>
    );

}

export default Habitos;