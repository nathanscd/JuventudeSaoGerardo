import React from 'react';
import Header from '../components/Header'; 
import { useNavigate } from 'react-router-dom'; 
import '../style/Events.css';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  const navigate = useNavigate();

  const handleHalleluyaClick = () => {
    navigate('/halleluya'); 
  };

  return (
    <div className="events-wrapper">
      <div className="noise-overlay"></div>
      <Header />

      <div className="canvas-container">
        <div className="gradient-sphere sphere-events"></div>
        <div className="mesh-grid"></div>
      </div>

      <section className="banner" id='events'></section>
      
      <main className="events-container">
        <section className="profile-section fade-up">
          <div className="profile-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <path d="M12 2c0 0-5 6-5 11a5 5 0 0 0 10 0c0-5-5-11-5-11z"></path>
              <path d="M12 11c-1.5 0-2 2-2 2s.5-1 2-1 2 1 2 1-.5-2-2-2z"></path>
            </svg>
          </div>
          
          <h1 className="profile-title">
            CONEXÕES <span className="stroke-text">& ROTAS</span>
          </h1>
          
          <p className="profile-bio">
            Fique por dentro do movimento <span className="highlight">Boa Nova</span>. 
            Inscrições, acessos rápidos e materiais para a trincheira espiritual.
          </p>
        </section>

        <section className="links-grid fade-up delay-100">
          <div className="featured-event" onClick={handleHalleluyaClick}>
            <div className="featured-glow"></div>
            <div className="card-badge">VAGAS LIMITADAS</div>
            <div className="featured-content">
              <div className="event-date">
                <span className="day">25</span>
                <span className="month">JUL</span>
              </div>
              <div className="event-details">
                <h2>CARAVANA HALLELUYA 2026</h2>
                <p>Garanta seu lugar no comboio oficial. Não fique na retaguarda.</p>
              </div>
              <div className="action-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="secondary-links">
            <a href="https://www.instagram.com/juventudesaogerardo/" target="_blank" rel="noopener noreferrer" className="glass-btn">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <span>Front no Instagram</span>
            </a>

            <a href="https://open.spotify.com/playlist/2wvrQJ7R5w2bP2M9F2NCe5?si=oO5jFYflSNu7eFUrFnyGJg" target="_blank" rel="noopener noreferrer" className="glass-btn">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 11.5c2.5-1 5-1 7.5 0"></path>
                  <path d="M8 14.5c2-1 4.5-1 6.5 0"></path>
                  <path d="M9 17.5c1.5-.5 3.5-.5 5 0"></path>
                </svg>
              </div>
              <span>Trilha de Adoração</span>
            </a>

            <a href="https://www.google.com/maps/dir//Igreja+Matriz+de+S%C3%A3o+Gerardo+Majella,+Av.+Bezerra+de+Menezes,+1256+-+S%C3%A3o+Gerardo,+Fortaleza+-+CE,+60325-005/@-4.0177657,-38.5796601,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7497635165ff5:0x4d166ff3c8095ff4!2m2!1d-38.5565806!2d-3.7335897?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="glass-btn">
              <div className="icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>Localização da Base</span>
            </a>
          </div>

          <div className="info-box fade-up delay-200">
            <div className="info-bg-effect"></div>
            <div className="info-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <h3>Próxima Reunião</h3>
            </div>
            <p>Domingo às 16:30h</p>
            <span className="theme-tag">Tema a definir</span>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Events;