import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './style/Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  return (
    <>
      <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className='name' onClick={() => setMenuOpen(false)}>
          <h1 className="Title"><span>grupo de oração</span><br/>Boa Nova</h1>
        </Link>

        <div className="desktop-menu">
          <Link to='/' className="nav-link" data-replace="Início"><span>Início</span></Link>
          <Link to='/about' className="nav-link" data-replace="Sobre"><span>Sobre</span></Link>
          <Link to='/events' className="nav-link" data-replace="Eventos"><span>Eventos</span></Link>
          <Link to='/gallery' className="nav-link" data-replace="Fotos"><span>Fotos</span></Link>
          <Link to='/contact' className="nav-link" data-replace="Contato"><span>Contato</span></Link>
        </div>

        <div className={`mobile-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar short"></div>
          <div className="bar"></div>
        </div>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links-container">
          <Link to='/' onClick={() => setMenuOpen(false)}>Início</Link>
          <Link to='/about' onClick={() => setMenuOpen(false)}>Quem Somos</Link>
          <Link to='/events' onClick={() => setMenuOpen(false)}>Eventos</Link>
          <Link to='/gallery' onClick={() => setMenuOpen(false)}>Fotos</Link>
          <Link to='/contact' onClick={() => setMenuOpen(false)}>Contato</Link>
          
          <Link to='/join' className="mobile-btn-join" onClick={() => setMenuOpen(false)}>
            PARTICIPAR
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;