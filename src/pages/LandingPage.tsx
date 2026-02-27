import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import '../style/LandingPage.css';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <Header />
      
      <div className="canvas-container">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="mesh-grid"></div>
      </div>

      <main className="main-content">
        <section className='banner' id='welcome'></section>
        
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge-glass">
              <span className="live-dot"></span> Boa Nova • Desde 2024
            </div>
            
            <h1 className="hero-title">
              SOMOS A GERAÇÃO DO <br />
              <span className="gradient-text">AVIVAMENTO</span>
            </h1>
            
            <p className="hero-description">
              Um grupo de oração apaixonado pelo Cristo que sofreu por nós. Nós entendemos que as dores deste mundo não são capazes de nos tirar a Esperança do amanhã.
            </p>

            <div className="hero-actions">
              <button className="btn-glow" onClick={() => navigate('/join')}>
                QUERO PARTICIPAR
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              
              <div className="glass-widget">
                <div className="widget-icon">🔥</div>
                <div className="widget-info">
                  <strong>Próximo Encontro</strong>
                  <span>Domingo às 16:30h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glass-card-floating primary-float">
              <div className="card-inner-glow"></div>
              <span className="floating-emoji">🕊️</span>
              <h3>"Um amigo fiel é uma poderosa proteção: quem o achou, descobriu um tesouro."</h3>
              <p>Eclesiástico 6, 14</p>
            </div>

            <div className="glass-card-floating secondary-float">
              <div className="card-inner-glow-alt"></div>
              <span className="floating-emoji">⚔️</span>
              <h3>"Jovens, eu vos escrevi, porque sois fortes, e a palavra de Deus permanece em vós."</h3>
              <p>1 João 2, 14</p>
            </div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              <span>E O VERBO SE FEZ CARNE • JOÃO 1, 14 • </span>
              <span>E O VERBO SE FEZ CARNE • JOÃO 1, 14 • </span>
              <span>E O VERBO SE FEZ CARNE • JOÃO 1, 14 • </span>
            </div>
            <div className="marquee-content" aria-hidden="true">
              <span>E O VERBO SE FEZ CARNE • JOÃO 1, 14 • </span>
              <span>E O VERBO SE FEZ CARNE • JOÃO 1, 14 • </span>
              <span>E O VERBO SE FEZ CARNE • JOÃO 1, 14 • </span>
            </div>
          </div>
        </section>

        <section className="experience-viewport">
          <div className="experience-container">
            <div className="experience-grid">
              <div className="exp-content">
                <div className="section-label">EXPERIÊNCIA</div>
                <h2 className="section-title">
                  O CÉU TOCA <br />
                  <span className="accent-italic">A TERRA</span>
                </h2>
                <p className="section-text">
                  Nos reunimos semanalmente para viver a alegria de sermos irmãos. Através do louvor, da oração sincera e da partilha, encontramos força para o dia a dia e amizades que nos levam para o céu.
                </p>
                
                <div className="feature-stack">
                  <div className="feature-row">
                    <span className="feature-icon">🙌</span>
                    <div className="feature-info">
                      <h4>ORAÇÃO VIVA</h4>
                      <p>Adoramos com toda a nossa força e vontade.</p>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-icon">📖</span>
                    <div className="feature-info">
                      <h4>PALAVRA DIRECIONADA</h4>
                      <p>Pregações que direcionam para a vontade de Deus.</p>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-icon">🍞</span>
                    <div className="feature-info">
                      <h4>EUCARISTIA</h4>
                      <p>O centro e o ápice de tudo o que vivemos.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exp-visual">
                <div className="image-frame">
                  <div className="image-inner">
                    <img src="/Louvor.jpeg" alt="Comunidade" />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="floating-tag">
                    <span className="tag-icon">⚓</span> VEM E VÊ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="monument-viewport">
          <div className="monument-bg-text">RESPLANDECE</div>
          <div className="monument-container">
            <div className="quote-icon">“</div>
            <h2 className="monument-title">
              LEVANTA-TE, PORQUE <br />
              CHEGOU A TUA LUZ.
            </h2>
            <div className="monument-meta">
              <span className="ref">ISAÍAS 60, 1</span>
            </div>
          </div>
        </section>

        <section className="cta-viewport">
          <div className="cta-card">
            <div className="cta-bg-glow"></div>
            <div className="cta-content">
              <h2 className="cta-heading">NÃO TENHAIS MEDO <br />DE SER <span className="highlight">SANTOS</span></h2>
              <p className="cta-sub">— São João Paulo II</p>
              <button className="magnetic-btn" onClick={() => navigate('/join')}>
                QUERO ME UNIR AO GRUPO
              </button>
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;