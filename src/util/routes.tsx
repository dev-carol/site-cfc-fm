import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { HeaderMenu } from '../components/Header/Header';
import links from "../components/Header/links.json"
import { Home } from '../pages/Home/home';
import { FooterSocial } from '../components/Footer/Footer';
import { AulasPage } from '../pages/Aulas/aulas';
import { SimuladorPage } from '../pages/SimuladosDetran/simulador-detran';
import { ContatoPage } from '../pages/Contato/contato';


const AppRoutes: React.FC = () => {

  return (
    <Router>
      <HeaderMenu links={links.links} />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<SimuladorPage />} />
        <Route path="/aulas" element={<AulasPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        
      </Routes>
      
      <FooterSocial/>
    </Router>
  );
};

export default AppRoutes;
