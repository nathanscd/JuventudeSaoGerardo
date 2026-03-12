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

      <main className="main-content">
        <section className='banner' id='welcome'></section>
        
        <section className="hero-section">
          <div className="hero-content">
            <div className="badge">
              <img src="/StickerLogo.png" alt="Sticker" />
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              
              <div className="glass-widget">
                <div className="widget-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" width="24" height="24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
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
              <span className="floating-emoji">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" width="32" height="32">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </span>
              <h3>"Um amigo fiel é uma poderosa proteção: quem o achou, descobriu um tesouro."</h3>
              <p>Eclesiástico 6, 14</p>
            </div>

            <div className="glass-card-floating secondary-float">
              <div className="card-inner-glow-alt"></div>
              <span className="floating-emoji">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" width="32" height="32">
                  <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline>
                  <line x1="13" y1="19" x2="19" y2="13"></line>
                  <line x1="16" y1="16" x2="20" y2="20"></line>
                  <line x1="19" y1="21" x2="21" y2="19"></line>
                </svg>
              </span>
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
                    <span className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" width="28" height="28">
                        <path d="M12 2v20"></path>
                        <path d="M17 7H7"></path>
                      </svg>
                    </span>
                    <div className="feature-info">
                      <h4>ORAÇÃO VIVA</h4>
                      <p>Adoramos com toda a nossa força e vontade.</p>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" width="28" height="28">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </span>
                    <div className="feature-info">
                      <h4>PALAVRA DIRECIONADA</h4>
                      <p>Pregações que direcionam para a vontade de Deus.</p>
                    </div>
                  </div>
                  <div className="feature-row">
                    <span className="feature-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" width="28" height="28">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </span>
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
                </div>
                <div className="floating-tag">
                  VEM E VÊ
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="monument-viewport">
          <div className="monument-bg-text">RESPLANDECE</div>
          <div className="monument-container">
            <div className="quote-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" width="48" height="48">
                <path d="M14 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
              </svg>
            </div>
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
              <h2 className="cta-heading">NÃO TENHAIS MEDO <br />DE SER SANTOS</h2>
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