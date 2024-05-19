import React from 'react';
import './App.css';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Layout from './component/layout/Layout';
import NotFound from './pages/notfound/Notfound';
import Home from './pages/home/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
