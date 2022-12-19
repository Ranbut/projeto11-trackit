import {HeaderContainer} from "./styles"
import { UsuarioContext } from '../UsuarioContext';
import { useContext } from 'react';

function Header(){
    const {usuario} = useContext(UsuarioContext);
    return(
        <HeaderContainer id={usuario.id}>
            <h1>TrackIt</h1>
            <img src={usuario.image} alt=""/>
        </HeaderContainer>

    );
}

export default Header;