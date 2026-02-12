import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/About.css';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page-wrapper">
      <Header />
      
      <main>
        <section className="about-hero">
          <div className="about-orb orb-purple"></div>
          <div className="about-orb orb-magenta"></div>
          
          <span className="about-badge">Nossa Identidade</span>
          <h1>JUVENTUDE QUE <span className="about-highlight">TRANSFORMA</span></h1>
          <p>Não somos apenas um grupo, somos uma família unida pelo propósito de viver o Evangelho com ousadia e alegria.</p>
        </section>

        <section className="about-mission-section">
          <div className="about-grid">
            <div className="about-card">
              <div className="icon">🔥</div>
              <h3>Nossa Missão</h3>
              <p>Levar o fogo do Espírito Santo a todos os corações jovens, despertando uma nova geração de adoradores.</p>
            </div>
            
            <div className="about-card">
              <div className="icon">👁️</div>
              <h3>Nossa Visão</h3>
              <p>Ser referência de santidade e unidade, construindo o Reino de Deus através do serviço e da oração.</p>
            </div>
            
            <div className="about-card">
              <div className="icon">❤️</div>
              <h3>Carisma</h3>
              <p>Acolhimento radical e amor fraterno. Aqui, ninguém caminha sozinho rumo ao céu.</p>
            </div>
          </div>
        </section>

        <section className="about-quote-section">
          <div className="about-quote-container">
            <blockquote>
              "Se fordes aquilo que Deus quer, colocareis fogo no mundo inteiro."
            </blockquote>
            <cite>— Santa Catarina de Sena</cite>
          </div>
        </section>

        <section className="about-history-section">
          <div className="history-text-content">
            <h2>Nossa História</h2>
            <p>Tudo começou em 2024, com um pequeno grupo de amigos e um grande desejo: fazer mais por Deus. O que era apenas uma reunião de oração se tornou um movimento vibrante.</p>
            <p>Hoje, seguimos firmes no propósito de ser sal da terra e luz do mundo.</p>
          </div>
          <div className="history-image-wrapper">
            <div className="about-img-placeholder"></div>
          </div>
        </section>

        <section className="about-cta-section">
          <h2>O céu é logo ali</h2>
          <p>"Não tenhais medo de ser santos." — São João Paulo II</p>
          
          <Link to="/join" className="about-btn-glow">
            Faça Parte Agora
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;