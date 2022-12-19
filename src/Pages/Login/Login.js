import { useEffect, useState } from "react";
import {Container, Formulario} from "./styles";
import logo from "../../assets/logo.png";
import { ThreeDots } from  'react-loader-spinner';
import { useContext } from 'react';
import { UsuarioContext } from '../../Components/UsuarioContext';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){

    const [clicado, setClicado] = useState(false);
    const [login, setLogin] = useState({email: "", password: ""});
    const {setUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();

    useEffect(() => { 
        setUsuario({email: "", id: "", image: "", name: "", password: "", token:""});
    }, []);

    function entrar(event){
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", login);
        requisicao.then((res) => {setUsuario(res.data); navigate("/hoje"); }) ;
        requisicao.catch((res) => {alert(res.response.data.message); setClicado(false);}) ;
    }
    return(
        <Container>
            <img src={logo} alt="Logo"/>
            <Formulario onSubmit={entrar} clicado={clicado}>
                <input disabled={clicado} required type="email" placeholder="email" value={login.email} onChange={e => setLogin({...login, email: e.target.value})}/>
                <input disabled={clicado} required type="password" placeholder="senha" value={login.password} onChange={e => setLogin({...login, password: e.target.value} )}/>
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

export default Login;