import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          
          <Link to="/" className="logo-area" onClick={closeMenu}>
            <span className="logo-symbol">✝</span>
            <div className="logo-text">
              <span>JOVENS</span>
              <span className="highlight">SÃO GERARDO</span>
            </div>
          </Link>

          <div 
            className={`mobile-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar short"></div>
            <div className="bar"></div>
          </div>

          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>Início</Link>
            <Link to="/eventos" className="nav-link" onClick={closeMenu}>Eventos</Link>
            <Link to="/fotos" className="nav-link" onClick={closeMenu}>Fotos</Link> 
            <Link to="/contato" className="nav-link" onClick={closeMenu}>Contato</Link>
            
            <Link to="/join">
              <button className="btn-header" onClick={closeMenu}>
                PARTICIPAR DO GRUPO
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div 
          className="menu-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'rgba(0,0,0,0.6)',
            zIndex: 999, 
            backdropFilter: 'blur(4px)'
          }}
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Header;