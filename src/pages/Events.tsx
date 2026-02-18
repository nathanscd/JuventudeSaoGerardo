import React from 'react';
import Header from '../components/Header'; 
import { useNavigate } from 'react-router-dom'; 
import '../style/Standard.css';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  const navigate = useNavigate();

  const handleHalleluyaClick = () => {
    navigate('/halleluya'); 
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
            EVENTOS <span className="stroke-text">& LINKS</span>
          </h1>
          <p className="profile-bio">
            Fique por dentro de tudo que rola no <span className="highlight">Boa Nova</span>. 
            Inscrições, eventos e materiais para seu crescimento espiritual.
          </p>
        </section>

        
        <section className="links-grid fade-up">
          <div className="link-card featured-event" onClick={handleHalleluyaClick}>
            <div className="card-badge">VAGAS LIMITADAS</div>
            <div className="card-content">
              <div className="event-date">
                <span className="day">25</span>
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

          <a href="https://open.spotify.com/playlist/2wvrQJ7R5w2bP2M9F2NCe5?si=oO5jFYflSNu7eFUrFnyGJg" target="_blank" rel="noopener noreferrer" className="link-card glass-btn">
            <div className="icon-box spotify">🎧</div>
            <span>Playlist de Louvor</span>
          </a>

          <a href="https://www.google.com/maps/dir//Igreja+Matriz+de+S%C3%A3o+Gerardo+Majella,+Av.+Bezerra+de+Menezes,+1256+-+S%C3%A3o+Gerardo,+Fortaleza+-+CE,+60325-005/@-4.0177657,-38.5796601,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7497635165ff5:0x4d166ff3c8095ff4!2m2!1d-38.5565806!2d-3.7335897?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="link-card glass-btn">
            <div className="icon-box location">📍</div>
            <span>Como Chegar na Igreja</span>
          </a>

          <div className="link-card info-box">
            <h3>Próximo Grupo de Oração</h3>
            <p>Sábado às 16:30h • Tema: ""</p>
          </div>

        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Events;