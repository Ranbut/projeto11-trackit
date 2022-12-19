import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import GlobalStyle from './globalStyles';
import Login from "./Login/Login";
import Hoje from "./Hoje/Hoje";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";
import Cadastro from "./Cadastro/Cadastro";
import { UsuarioContext } from '../Components/UsuarioContext';
import { HabitosContext } from '../Components/HabitosContext';
import Topo from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

function App() {
  const [usuario, setUsuario] = useState({ email: "", id: "", image: "", name: "", password: "", token: "" });
  const [habitos, setHabitos] = useState([]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UsuarioContext.Provider value={{ usuario }}>
        <Topo />
      </UsuarioContext.Provider>
      <UsuarioContext.Provider value={{ usuario }}>
        <HabitosContext.Provider value={{ habitos }}>
          <Menu />
        </HabitosContext.Provider>
      </UsuarioContext.Provider>
      <Routes>
        <Route path="/" element={
          <UsuarioContext.Provider value={{ setUsuario }}>
            <Login />
          </UsuarioContext.Provider>
        } />
        <Route path="/hoje" element={<Hoje />} />
        <Route path="/habitos" element={
          <UsuarioContext.Provider value={{ usuario }}>
            <HabitosContext.Provider value={{ habitos, setHabitos }}>
              <Habitos />
            </HabitosContext.Provider>
          </UsuarioContext.Provider>
        } />
        <Route path="/historico" element={<Historico />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;