import logo from "../../assets/logo.png";
import {Container, Formulario} from "./styles";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { ThreeDots } from  'react-loader-spinner';
import { useNavigate } from "react-router-dom";

function Cadastro(){
    const [clicado, setClicado] = useState(false);
    const [cadastro, setCadastro] = useState({email: "", name: "", image: "", password: ""});
    const navigate = useNavigate();

    function cadastrar(event){
        event.preventDefault();
        setClicado(true);
        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", cadastro);
        requisicao.then(() => navigate("/")) ;
        requisicao.catch((res) => {alert(res.response.data.message); setClicado(false);}) ;
    }
    return(
        <Container>
            <img src={logo} alt="Logo"/>
            <Formulario onSubmit={cadastrar} clicado={clicado}>
                <input disabled={clicado} required type="email" placeholder="email" value={cadastro.email} onChange={e => setCadastro({...cadastro, email: e.target.value})}/>
                <input disabled={clicado} required type="password" placeholder="senha" value={cadastro.password} onChange={e => setCadastro({...cadastro, password: e.target.value} )}/>
                <input disabled={clicado} required type="text" placeholder="nome" value={cadastro.name} onChange={e => setCadastro({...cadastro, name: e.target.value} )}/>
                <input disabled={clicado} required type="url" placeholder="foto" value={cadastro.image} onChange={e => setCadastro({...cadastro, image: e.target.value} )}/>
                <button disabled={clicado} type="submit">
                    <div>Cadastrar</div>
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
            <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
        </Container>
    );
}

export default Cadastro;