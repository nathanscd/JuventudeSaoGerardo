import React from 'react'
import './style/Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="brand">2026 JSG • "Temos de ir atras das pessoas, porque elas podem ter fome de comida ou de amizade" <br/> <span>Santa Teresa de Calcutá</span></div>
        
        <div className="links">
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
          <a href="#">Contato</a>
        </div>

        <p className="copyright">© 2024 Todos os direitos reservados.</p>
      </div>
  )
}

export default Footer