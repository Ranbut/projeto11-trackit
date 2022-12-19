import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import { useState } from 'react';
import { HabitosConcluidosContext } from '../Components/HabitosTerminadosContext';
import { UsuarioContext } from '../Components/UsuarioContext.js';
import Login from "./Login/Login";
import Cadastro from "./Cadastro/Cadastro";
import Hoje from "./Hoje/Hoje";
import Habitos from "./Habitos/Habitos";
import Historico from "./Historico/Historico";
import Header from "../Components/Header/Header";
import Menu from "../Components/Menu/Menu";

function App() {

  const [usuario, setUsuario] = useState({email: "", id: "", image: "", name: "", password: "", token:""});
  const [habitosConcluidos, setHabitosConcluidos] = useState(0);

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <UsuarioContext.Provider value={{usuario}}>
        <Header />
      </UsuarioContext.Provider>
      <UsuarioContext.Provider value={{usuario}}>
        <HabitosConcluidosContext.Provider value={{habitosConcluidos}}>
          <Menu />
        </HabitosConcluidosContext.Provider>
      </UsuarioContext.Provider>
      <Routes>
          <Route path="/" element={
            <UsuarioContext.Provider value={{setUsuario}}>
              <Login />
            </UsuarioContext.Provider>
          } />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;