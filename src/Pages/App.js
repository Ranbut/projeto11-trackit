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
  const [habitosConcluidos, setHabitosConcluidos] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UsuarioContext.Provider value={{ usuario }}>
        <Topo />
      </UsuarioContext.Provider>
      <UsuarioContext.Provider value={{ usuario }}>
        <HabitosContext.Provider value={{ habitosConcluidos }}>
          <Menu />
        </HabitosContext.Provider>
      </UsuarioContext.Provider>
      <Routes>
        <Route path="/" element={
          <UsuarioContext.Provider value={{ setUsuario }}>
            <Login />
          </UsuarioContext.Provider>
        } />
        <Route path="/hoje" element={
          <UsuarioContext.Provider value={{ usuario }}>
            <HabitosContext.Provider value={{ habitosConcluidos, setHabitosConcluidos }}>
              <Hoje />
            </HabitosContext.Provider>
          </UsuarioContext.Provider>
        } />
        <Route path="/habitos" element={
          <UsuarioContext.Provider value={{ usuario }}>
            <HabitosContext.Provider value={{ habitosConcluidos, setHabitosConcluidos}}>
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