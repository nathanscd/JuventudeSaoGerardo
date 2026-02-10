import React from 'react';
import Header from '../components/Header'; 
import { useNavigate } from 'react-router-dom'; 
import '../Standard.css';

const Events: React.FC = () => {
  const navigate = useNavigate();

  const handleHalleluyaClick = () => {
    navigate('/halleluya-bus'); 
  };

  return (
    <div className="events-wrapper">
      <Header />

      <div className="spotlight-orb"></div>

      <main className="events-container">
        <section className="profile-section fade-in">
          <div className="profile-image">
            <span className="profile-emoji">🔥</span>
          </div>
          <h1 className="profile-title">
            AGENDA <span className="stroke-text">& LINKS</span>
          </h1>
          <p className="profile-bio">
            Fique por dentro de tudo que rola no <span className="highlight">Jovens São Gerardo</span>. 
            Inscrições, eventos e materiais para seu crescimento espiritual.
          </p>
        </section>

        
        <section className="links-grid fade-up">
          <div className="link-card featured-event" onClick={handleHalleluyaClick}>
            <div className="card-badge">VAGAS LIMITADAS</div>
            <div className="card-content">
              <div className="event-date">
                <span className="day">23</span>
                <span className="month">JUL</span>
              </div>
              <div className="event-details">
                <h2>CARAVANA HALLELUYA 2026</h2>
                <p>Garanta seu lugar no ônibus oficial. Não fique de fora!</p>
              </div>
              <div className="action-icon">➔</div>
            </div>
            <div className="card-bg-glow"></div>
          </div>

          <a href="https://www.instagram.com/juventudesaogerardo/" target="_blank" rel="noopener noreferrer" className="link-card glass-btn">
            <div className="icon-box instagram">📸</div>
            <span>Nosso Instagram</span>
          </a>

          <a href="#" className="link-card glass-btn">
            <div className="icon-box spotify">🎧</div>
            <span>Playlist de Louvor</span>
          </a>

          <a href="#" className="link-card glass-btn">
            <div className="icon-box location">📍</div>
            <span>Como Chegar na Igreja</span>
          </a>

          <div className="link-card info-box">
            <h3>Próximo Grupo de Oração</h3>
            <p>Sábado às 16:30h • Tema: ""</p>
          </div>

        </section>

      </main>
      
      <footer className="simple-footer">
        <p>© 2026 JSG • "Ser santo sem deixar de ser jovem"</p>
      </footer>
    </div>
  );
};

export default Events;