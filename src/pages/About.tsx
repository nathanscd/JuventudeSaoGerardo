import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../style/About.css';
import Footer from '../components/Footer';

const ministriesData = [
  {
    category: "Liderança & Coordenação",
    members: [
      { name: "Sueslley Rodrigues", role: "Coordenador Geral", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60" },
      { name: "Matheus Silva", role: "Coordenador Geral", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60" },
      { name: "Ana Clara", role: "Vice-Coordenadora", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60" },
    ]
  },
    {
    category: "Ministério de Intercessão",
    members: [
      { name: "Lucas Gabriel", role: "Vocal & Violão", img: "https://images.unsplash.com/photo-1522075469751-3a3694c60e9e?w=400&auto=format&fit=crop&q=60" },
      { name: "Beatriz Costa", role: "Teclado", img: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=400&auto=format&fit=crop&q=60" },
      { name: "Pedro Henrique", role: "Bateria", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60" },
      { name: "Mariana Souza", role: "Vocal", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60" },
    ]
  },
  {
    category: "Ministério de Música",
    members: [
      { name: "Lucas Gabriel", role: "Vocal & Violão", img: "https://images.unsplash.com/photo-1522075469751-3a3694c60e9e?w=400&auto=format&fit=crop&q=60" },
      { name: "Beatriz Costa", role: "Teclado", img: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=400&auto=format&fit=crop&q=60" },
      { name: "Pedro Henrique", role: "Bateria", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60" },
      { name: "Mariana Souza", role: "Vocal", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60" },
    ]
  },

  {
    category: "Comunicação & Mídia",
    members: [
      { name: "Felipe Santos", role: "Social Media", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60" },
      { name: "Camila Oliveira", role: "Fotografia", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60" },
    ]
  }
];

const About = () => {
  return (
    <div className="about-page-wrapper">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="about-hero">
          <div className="about-orb orb-purple"></div>
          <div className="about-orb orb-magenta"></div>
          
          <span className="about-badge">Nossa Identidade</span>
          <h1>JUVENTUDE QUE <span className="about-highlight">TRANSFORMA</span></h1>
          <p>Não somos apenas um grupo, somos uma família unida pelo propósito de viver o Evangelho com ousadia e alegria.</p>
        </section>

        {/* MISSION */}
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

        {/* QUOTE */}
        <section className="about-quote-section">
          <div className="about-quote-container">
            <blockquote>
              "Se fordes aquilo que Deus quer, colocareis fogo no mundo inteiro."
            </blockquote>
            <cite>— Santa Catarina de Sena</cite>
          </div>
        </section>

        {/* HISTÓRIA */}
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

        {/* NOVOS MINISTÉRIOS */}
        <section className="about-team-section">
          <div className="about-section-header">
            <h2>Quem Faz Acontecer</h2>
            <p>Conheça os servos que dedicam suas vidas nesta obra.</p>
          </div>

          <div className="ministries-container">
            {ministriesData.map((ministry, index) => (
              <div key={index} className="ministry-group">
                <h3 className="ministry-title">{ministry.category}</h3>
                
                <div className="members-grid">
                  {ministry.members.map((member, idx) => (
                    <div key={idx} className="member-card">
                      <div className="member-img-box">
                        <img src={member.img} alt={member.name} />
                        <div className="member-glow"></div>
                      </div>
                      <div className="member-info">
                        <h4>{member.name}</h4>
                        <span>{member.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
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