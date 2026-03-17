import React from 'react';
import Header from '../components/Header';
import '../style/JoinUs.css';
import Footer from '../components/Footer';

const JoinUs: React.FC = () => {
  return (
    <div className="join-wrapper">
      
      <Header />

      <section className="banner" id='join'></section>

      <main className="invite-container">
        
        <div className="grunge-tape tape-top">
          <span>VENHA COMO ESTÁ • A PORTA ESTÁ ABERTA • SEM MÁSCARAS •</span>
          <span>VENHA COMO ESTÁ • A PORTA ESTÁ ABERTA • SEM MÁSCARAS •</span>
        </div>

        <section className="invite-hero fade-up">
          <div className="floating-badge">
            <span className="live-dot"></span> ENTRADA LIVRE
          </div>
          
          <h1 className="invite-title glitch-text" data-text="A PORTA ESTÁ">
            A PORTA ESTÁ <br />
            <span className="stroke-text">SEMPRE ABERTA</span>
          </h1>
          
          <p className="invite-subtitle">
            Não exigimos rituais prévios nem formulários vazios. 
            <br />
            <span className="highlight">Apenas apareça.</span> O seu lugar já está reservado.
          </p>
        </section>

        <section className="ticket-section fade-up delay-100">
          <div className="holographic-ticket">
            <div className="ticket-glow"></div>
            <div className="ticket-texture"></div>
            
            <div className="ticket-left">
              <span className="ticket-label">ACESSO DIRETO • COMUNIDADE</span>
              <h2>VOCÊ + DEUS</h2>
              
              <div className="ticket-info">
                <div className="info-item">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <strong>Auditório</strong>
                    <small>Igreja São Gerardo</small>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </span>
                  <div>
                    <strong>Domingos</strong>
                    <small>16h30</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="ticket-divider"></div>
            
            <div className="ticket-right">
              <span className="sideways">BOA NOVA</span>
              <div className="barcode"></div>
              <span className="ticket-id">VENHA</span>
            </div>
          </div>
        </section>

        <section className="fears-grid fade-up delay-200">
          <div className="fear-card grunge-card">
            <div className="card-bg-effect"></div>
            <div className="card-content-inner">
              <div className="svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>O medo de ir só</h3>
              <p>O primeiro passo pode parecer solitário, mas a jornada não é. Uma comunidade autêntica está pronta para recebê-lo na porta, sem julgamentos.</p>
            </div>
          </div>

          <div className="fear-card grunge-card">
            <div className="card-bg-effect"></div>
            <div className="card-content-inner">
              <div className="svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.38 3.46L16 2a8 8 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                </svg>
              </div>
              <h3>O peso das aparências</h3>
              <p>Descarte as máscaras. Não medimos o valor pela embalagem, valorizamos a sua essência. Venha vestido com o que te faz sentir em paz.</p>
            </div>
          </div>

          <div className="fear-card grunge-card">
            <div className="card-bg-effect"></div>
            <div className="card-content-inner">
              <div className="svg-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M17 7H7"></path>
                </svg>
              </div>
              <h3>O silêncio da fé</h3>
              <p>A perfeição não habita aqui. Aprendemos juntos na quebra, no silêncio e na busca sincera. O Espírito compreende o que as palavras não alcançam.</p>
            </div>
          </div>
        </section>

        <section className="location-cta fade-up delay-300">
          <div className="map-glass grunge-border">
            <div className="map-content">
              <h2>O PONTO DE ENCONTRO</h2>
              <p>Av. Bezerra de Menezes, 1256 - São Gerardo</p>
              
              <div className="cta-buttons">
                <a 
                  href="https://www.google.com/maps/dir//Igreja+Matriz+de+S%C3%A3o+Gerardo+Majella,+Av.+Bezerra+de+Menezes,+1256+-+S%C3%A3o+Gerardo,+Fortaleza+-+CE,+60325-005/@-4.0177657,-38.5796601,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7497635165ff5:0x4d166ff3c8095ff4!2m2!1d-38.5565806!2d-3.7335897?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-map grunge-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                    <line x1="9" y1="3" x2="9" y2="18"></line>
                    <line x1="15" y1="6" x2="15" y2="21"></line>
                  </svg>
                  ROTA NO MAPA
                </a>
                <button className="btn-cal grunge-btn-outline">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  MARCAR CALENDÁRIO
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;