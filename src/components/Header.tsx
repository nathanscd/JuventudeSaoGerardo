import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="logo-area">
          <span className="logo-symbol">✝</span>
          <div className="logo-text">
            <span>JOVENS</span>
            <span className="highlight">SÃO GERARDO</span>
          </div>
        </div>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/forms" className="nav-link">Eventos</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
          <button className="btn-header">
            PARTICIPAR DO GRUPO
          </button>
        </div>
        
        {/* Menu Mobile Icon (Visual apenas) */}
        <div className="mobile-toggle">
          <div className="bar"></div>
          <div className="bar short"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;