import React from 'react';
import Header from '../components/Header';
import '../style/JoinUs.css';
import Footer from '../components/Footer';

const JoinUs: React.FC = () => {
  return (
    <div className="join-wrapper">
      <Header />
      <div className="spotlight-top"></div>

      <main className="invite-container">
        
        <section className="invite-hero fade-up">
          <div className="floating-badge">
            🚫 SEM INSCRIÇÃO • 🚫 SEM TAXAS
          </div>
          
          <h1 className="invite-title">
            A PORTA ESTÁ <br />
            <span className="stroke-text">SEMPRE ABERTA</span>
          </h1>
          
          <p className="invite-subtitle">
            Você não precisa preencher nada. Não precisa avisar que vem.
            <br />
            <span className="highlight">É só chegar.</span> O lugar já é seu.
          </p>
        </section>

        <section className="ticket-section fade-up delay-100">
          <div className="holographic-ticket">
            <div className="ticket-left">
              <span className="ticket-label">CONVITE VIP</span>
              <h2>VOCÊ + DEUS</h2>
              <div className="ticket-info">
                <div className="info-item">
                  <span className="icon">📍</span>
                  <div>
                    <strong>Auditório</strong>
                    <small>Igreja São Gerardo</small>
                  </div>
                </div>
                <div className="info-item">
                  <span className="icon">⏰</span>
                  <div>
                    <strong>Sábados</strong>
                    <small>16h30</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket-divider"></div>
            <div className="ticket-right">
              <span className="sideways">ENTRADA LIVRE</span>
              <div className="barcode"></div>
              <span className="ticket-id">SÓ VEM</span>
            </div>
            <div className="ticket-glow"></div>
          </div>
        </section>

        <section className="fears-grid fade-up delay-200">
          <div className="fear-card">
            <div className="emoji">🥺</div>
            <h3>"Tenho vergonha de ir sozinho"</h3>
            <p>Relaxa! Metade da galera chegou sozinha e hoje somos família. Temos uma equipe só pra te receber no portão.</p>
          </div>

          <div className="fear-card">
            <div className="emoji">👕</div>
            <h3>"Com que roupa eu vou?"</h3>
            <p>Com a que você se sentir bem. Do chinelo ao tênis de marca, o que importa é o seu coração.</p>
          </div>

          <div className="fear-card">
            <div className="emoji">🕊️</div>
            <h3>"Não sei rezar direito"</h3>
            <p>Ninguém sabe. A gente aprende junto. O Espírito Santo traduz até o silêncio.</p>
          </div>
        </section>

        <section className="location-cta fade-up delay-300">
          <div className="map-glass">
            <div className="map-content">
              <h2>ONDE A GENTE SE ENCONTRA</h2>
              <p>Av. Bezerra de Menezes, 1256 - São Gerardo</p>
              
              <div className="cta-buttons">
                <a 
                  href="https://www.google.com/maps/dir//Igreja+Matriz+de+S%C3%A3o+Gerardo+Majella,+Av.+Bezerra+de+Menezes,+1256+-+S%C3%A3o+Gerardo,+Fortaleza+-+CE,+60325-005/@-4.0177657,-38.5796601,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7497635165ff5:0x4d166ff3c8095ff4!2m2!1d-38.5565806!2d-3.7335897?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-map"
                >
                  ABRIR NO MAPA 🗺️
                </a>
                <button className="btn-cal">
                  LEMBRAR NO CALENDÁRIO 📅
                </button>
              </div>
            </div>
            <div className="map-visual-bg"></div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;