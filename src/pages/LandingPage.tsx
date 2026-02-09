import React from 'react';
import Header from '../components/Header'; // Certifique-se que o Header também usa glassmorphism
import '../LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-wrapper">
      <Header />
      
      {/* Camada de Textura (Film Grain) */}
      <div className="noise-overlay"></div>

      {/* Luzes Ambientais (A Alma da página) */}
      <div className="ambient-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-glass">
            <span className="dot-pulse"></span>
            Juventude São Gerardo • Desde 2005
          </div>
          
          <h1 className="hero-title">
            SOMOS A GERAÇÃO DO <br />
            <span className="gradient-text">AVIVAMENTO</span>
          </h1>

          <p className="hero-description">
            Um movimento de jovens apaixonados por Jesus, vivendo a santidade 
            no meio da cidade. O fogo do Espírito Santo queima aqui.
          </p>

          <div className="hero-actions">
            <button className="btn-glow">
              QUERO PARTICIPAR
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            
            <div className="glass-widget">
              <div className="widget-icon">🔥</div>
              <div className="widget-info">
                <strong>Próximo Encontro</strong>
                <span>Sábado às 19:30h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento Visual Flutuante */}
        <div className="hero-visual">
          <div className="glass-card-floating">
            <div className="card-inner-glow"></div>
            <span className="floating-emoji">🕊️</span>
            <h3>Vem Espírito</h3>
            <p>"Onde está o Espírito do Senhor, aí há liberdade."</p>
          </div>
        </div>
      </section>

      {/* Marquee Glass */}
      <div className="glass-marquee">
        <div className="track">
          <span>WORSHIP • HOLINESS • FIRE • PRAYER • COMMUNITY • JESUS • </span>
          <span>WORSHIP • HOLINESS • FIRE • PRAYER • COMMUNITY • JESUS • </span>
        </div>
      </div>

      {/* Bento Grid - Pilares do Grupo */}
      <section id="pilares" className="bento-section">
        <div className="section-header">
          <h2>NOSSOS PILARES</h2>
          <p>O que sustenta nossa caminhada</p>
        </div>

        <div className="bento-grid">
          {/* Card Principal - Louvor */}
          <div className="glass-card featured-card">
            <div className="card-bg-image worship-bg"></div>
            <div className="card-content">
              <div className="card-icon">🎸</div>
              <h3>Louvor Profundo</h3>
              <p>Música que conecta o céu e a terra. Expressamos nossa adoração com toda força.</p>
              <button className="card-link">Ouvir Playlist ↗</button>
            </div>
          </div>

          {/* Card Secundário - Palavra */}
          <div className="glass-card secondary-card">
            <div className="card-bg-image word-bg"></div>
            <div className="card-content">
              <div className="card-icon">📖</div>
              <h3>Pregação</h3>
              <p>A verdade que transforma e liberta.</p>
            </div>
          </div>

          {/* Card Terciário - Comunhão */}
          <div className="glass-card tertiary-card">
            <div className="card-bg-image community-bg"></div>
            <div className="card-content">
              <div className="card-icon">❤️</div>
              <h3>Comunhão</h3>
              <p>Amigos que te levam para Deus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="simple-footer">
        <p>© 2026 Jovens São Gerardo. Feito com fé e código.</p>
      </footer>
    </div>
  );
};

export default LandingPage;