import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/About.css';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="about-page-wrapper" ref={scrollRef}>
      <Header />
      
      <div className="canvas-container">
        <div className="mesh-grid"></div>
      </div>

      <main className="main-content">
        <section className="about-hero">
          <div className="about-orb orb-purple"></div>
          <div className="about-orb orb-magenta"></div>
          
          <span className="about-badge reveal">NOSSA IDENTIDADE</span>
          <h1 className="reveal delay-1">MISERICÓRDIA QUE <br/><span className="about-highlight">TRANSFORMA</span></h1>
          <p className="reveal delay-2">Aqui você encontra uma família de pessoas quebradas que ajudam outras a encontrar com Aquele que é a própria misericórdia.</p>
        </section>

        <section className="about-mission-section">
          <div className="about-grid">
            <div className="about-card reveal">
              <div className="card-glow"></div>
              <div className="icon">🔥</div>
              <h3>Nossa Missão</h3>
              <p>Levar o fogo do Espírito Santo a todos os corações jovens, despertando uma nova geração de adoradores.</p>
            </div>
            
            <div className="about-card reveal delay-1">
              <div className="card-glow"></div>
              <div className="icon">👁️</div>
              <h3>Nossa Visão</h3>
              <p>Ser referência de santidade e unidade, construindo o Reino de Deus através do serviço e da oração.</p>
            </div>
            
            <div className="about-card reveal delay-2">
              <div className="card-glow"></div>
              <div className="icon">❤️</div>
              <h3>Carisma</h3>
              <p>Acolhimento radical e amor fraterno. Aqui, ninguém caminha sozinho rumo ao céu.</p>
            </div>
          </div>
        </section>

        <section id="pilares" className="bento-section">
          <div className="section-header reveal">
            <h2>NOSSOS PILARES</h2>
            <p>O que sustenta nossa caminhada rumo ao Céu</p>
          </div>

          <div className="bento-grid">
            <div className="glass-card featured-card reveal">
              <div className="card-bg-image worship-bg"></div>
              <div className="bento-overlay"></div>
              <div className="card-content">
                <div className="card-icon">🎸</div>
                <h3>Louvor Profundo</h3>
                <p>Música que conecta o céu e a terra. Expressamos nossa adoração com toda força e alegria própria da juventude.</p>
              </div>
            </div>

            <div className="glass-card secondary-card reveal delay-1">
              <div className="card-bg-image word-bg"></div>
              <div className="bento-overlay"></div>
              <div className="card-content">
                <div className="card-icon">📖</div>
                <h3>Pregação</h3>
                <p>A verdade que transforma, liberta e nos direciona a uma fé madura.</p>
              </div>
            </div>

            <div className="glass-card tertiary-card reveal delay-2">
              <div className="card-bg-image community-bg"></div>
              <div className="bento-overlay"></div>
              <div className="card-content">
                <div className="card-icon">❤️</div>
                <h3>Comunhão</h3>
                <p>Amigos que te levam para Deus. Ninguém caminha sozinho.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-quote-section">
          <div className="about-quote-container reveal">
            <div className="quote-mark">"</div>
            <blockquote>
              Se fordes aquilo que Deus quer, colocareis fogo no mundo inteiro.
            </blockquote>
            <cite>— Santa Catarina de Sena</cite>
          </div>
        </section>

        <section className="about-history-section">
          <div className="history-text-content reveal">
            <h2>Nossa História</h2>
            <p>Tudo começou em 2024, com um pequeno grupo de amigos e um grande desejo: fazer mais por Deus. O que era apenas uma reunião de oração se tornou um movimento vibrante.</p>
            <p>Hoje, seguimos firmes no propósito de ser sal da terra e luz do mundo, levando a Boa Nova a todos que precisam de esperança.</p>
          </div>
          <div className="history-image-wrapper reveal delay-1">
            <div className="history-glow"></div>
            <div className="about-img-placeholder"></div>
            <div className="history-badge">2024</div>
          </div>
        </section>

        <section className="about-cta-section reveal">
          <div className="cta-inner-box">
            <div className="cta-orb"></div>
            <h2>O céu é logo ali</h2>
            <p>"Não tenhais medo de ser santos." — São João Paulo II</p>
            
            <Link to="/join" className="about-btn-glow">
              Faça Parte Agora
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;