import { useState } from "react";
import {Container, Formulario} from "./styles";
import logo from "../../assets/logo.png";
import { ThreeDots } from  'react-loader-spinner';
import { useContext } from 'react';
import { UsuarioContext } from '../UsuarioContext.js';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [clicado, setClicado] = useState(false);
    const {usuario, setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();

    function entrar(event){
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", usuario);
        requisicao.then(() => navigate("/hoje")) ;
        requisicao.catch((res) => {alert(res.response.data.message); setClicado(false);}) ;
    }
    return(
        <Container>
            <img src={logo} alt="Logo"/>
            <Formulario onSubmit={entrar} clicado={clicado}>
                <input disabled={clicado} required type="email" placeholder="email" value={usuario.email} onChange={e => setUsuario({...usuario, email: e.target.value})}/>
                <input disabled={clicado} required type="password" placeholder="senha" value={usuario.password} onChange={e => setUsuario({...usuario, password: e.target.value} )}/>
                <button disabled={clicado} type="submit">
                    <div>Entrar</div>
                    <ThreeDots 
                        height="13" 
                        width="51" 
                        radius="9"
                        color="#ffffff" 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={clicado}
                    />
                </button>
            </Formulario>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
        </Container>
    );
}