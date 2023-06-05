import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/home';
import CFCPage from '../pages/CnhSp/cfc';
import { HeaderMenu } from '../components/Header/Header';
import links from "../components/Header/links.json"
import { FooterSocial } from '../components/Footer/Footer';


const AppRoutes: React.FC = () => {

  return (
    <Router>
      <HeaderMenu links={links.links} />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cnh-sp" element={<CFCPage />} />
      </Routes>
      
      <FooterSocial/>
    </Router>
  );
};

export default AppRoutes;
