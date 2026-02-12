import React from 'react';
import { Link } from 'react-router-dom';
import './style/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-glow"></div>

      <div className="brand">
        "Temos de ir atrás das pessoas, porque elas podem ter fome de comida ou de amizade"
        <br />
        <span>Santa Teresa de Calcutá</span>
      </div>
      
      <div className="links">
        <a href="https://instagram.com/juventudesaogerardo" target="_blank" rel="noopener noreferrer">Instagram</a>      
        <Link to="/contact">Contato</Link>
        <Link to="/join">Participar</Link>
      </div>

      <p className="copyright">
        BOA NOVA • © {currentYear} Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;