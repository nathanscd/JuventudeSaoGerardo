import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/Music.css';

const Music: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="music-wrapper" ref={scrollRef}>
      <Header />

      <section className="musicbanner" id="music-banner"></section>

      <div className="canvas-container">
        <div className="gradient-sphere sphere-music-1"></div>
        <div className="gradient-sphere sphere-music-2"></div>
        <div className="mesh-grid"></div>
      </div>

      <main className="main-content">
        <section className="music-hero reveal">
          <div className="music-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
            MINISTÉRIO DE MÚSICA
          </div>
          <h1 className="hero-title">
            NOSSAS <br />
            <span className="graffiti-text">Músicas</span>
          </h1>
          <p className="hero-description">
            Nossa adoração é uma arma de guerra e um bálsamo de cura. Conheça nossos lançamentos e junte-se a nós para elevar aos céus um novo cântico.
          </p>
        </section>

        <section className="featured-release reveal delay-1">
          <div className="featured-grid">
            <div className="release-visual">
              <div className="release-glow-bg"></div>
              <img src="/Aqui é meu lugar.png" alt="Capa do Lançamento" className="album-cover-main" />
              <div className="grunge-sticker sticker-music">NOVO ÁLBUM</div>
            </div>
            
            <div className="release-details">
              <span className="release-type">LANÇAMENTO RECENTE</span>
              <h2 className="release-title">Aqui é o Meu Lugar</h2>
              <p className="release-subtitle">Gravado ao vivo em nosso último encontro de avivamento.</p>
              
              <div className="platform-links-main">
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn-platform spotify">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM19.08 10.5c-3.96-2.34-10.44-2.58-14.22-1.44-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.38-1.32 11.52-1.02 16.08 1.68.54.3 0.72 1.02.42 1.56-.3.48-1.02.6-1.62.3z"/>
                  </svg>
                  Spotify
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn-platform apple">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.386 14.545c-1.353 0-1.884-.87-3.376-.87-1.47 0-1.897.87-3.361.87-1.87 0-4.04-2.673-4.04-5.59 0-2.895 1.562-4.226 3.033-4.226 1.339 0 1.956.884 3.253.884 1.384 0 1.812-.884 3.327-.884 1.161 0 2.455.535 3.254 1.7-2.618 1.562-2.188 4.741.536 5.866-.818 2.05-2.023 4.29-2.626 4.29zm-1.071-7.018c.61-1.027.697-2.098.428-2.535-1.125.133-2.344.91-2.92 1.83-.495.789-.683 1.821-.455 2.37 1.152.013 2.321-.692 2.947-1.665z"/>
                  </svg>
                  Apple Music
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn-platform youtube">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.582 6.186a2.67 2.67 0 0 0-1.884-1.884C18.035 3.84 12 3.84 12 3.84s-6.035 0-7.698.462a2.67 2.67 0 0 0-1.884 1.884C1.956 7.848 1.956 12 1.956 12s0 4.152.462 5.814a2.67 2.67 0 0 0 1.884 1.884c1.663.462 7.698.462 7.698.462s6.035 0 7.698-.462a2.67 2.67 0 0 0 1.884-1.884C22.044 16.152 22.044 12 22.044 12s0-4.152-.462-5.814zM9.956 15.552V8.448L16.044 12l-6.088 3.552z"/>
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="discography-section">
          <div className="section-header reveal">
            <h2>OUTRAS GRAVAÇÕES</h2>
            <p>Mergulhe na nossa trajetória de adoração e louvor.</p>
          </div>

          <div className="discography-grid">
            <div className="track-card reveal delay-1">
              <div className="track-img-box">
                <div className="track-glow"></div>
                <img src="/AlbumCover2.png" alt="Música 2" />
                <div className="track-play-overlay">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="track-info">
                <h3>Tiago 4</h3>
                <span>Single • 2026</span>
              </div>
            </div>

            <div className="track-card reveal delay-2">
              <div className="track-img-box">
                <div className="track-glow"></div>
                <img src="/AlbumCover3.png" alt="Música 3" />
                <div className="track-play-overlay">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="track-info">
                <h3>Alegria</h3>
                <span>Single • 2026</span>
              </div>
            </div>

            <div className="track-card reveal delay-3">
              <div className="track-img-box">
                <div className="track-glow"></div>
                <img src="/Aqui é meu lugar.png" alt="Música 4" />
                <div className="track-play-overlay">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="track-info">
                <h3>Aqui é o Meu Lugar</h3>
                <span>Álbum • 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="music-cta-section reveal">
          <div className="music-cta-inner">
            <div className="music-cta-orb"></div>
            <h2>VIVA ESSA EXPERIÊNCIA PESSOALMENTE</h2>
            <p>Nossas canções nascem em nossos encontros. Junte-se a nós e faça parte desta geração.</p>
            <button className="btn-glow-music" onClick={() => navigate('/events')}>
              VER PRÓXIMOS EVENTOS
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Music;