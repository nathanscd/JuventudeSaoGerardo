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
        <div className="grunge-texture-soft"></div>
      </div>

      <main className="main-content">
        <section className='banner' id='about'></section>

        <section className="about-hero">
          <div className="about-orb orb-purple"></div>
          <div className="about-orb orb-magenta"></div>
          
          <div className="grunge-sticker sticker-1 reveal"><img src="StickerLogo.png" alt="" /></div>
          
          <span className="about-badge reveal"><img src="StickerIdentity.png" alt="" /></span>
          <h1 className="reveal delay-1">
            <span className="graffiti-text">Misericórdia</span> QUE <br/>
            <span className="about-highlight">TRANSFORMA</span>
          </h1>
          <p className="reveal delay-2">
            Aqui você encontra uma família de pessoas imperfeitas que ajudam outras a encontrar com Aquele que é a própria redenção. 
          </p>
        </section>

        <section className="about-mission-section">
          <div className="about-grid">
            <div className="about-card reveal">
              <div className="card-glow"></div>
              <div className="grunge-sticker sticker-2"><img src="/textures/027.png" alt="" /></div>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <path d="M12 2c0 0-5 6-5 11a5 5 0 0 0 10 0c0-5-5-11-5-11z"></path>
                  <path d="M12 11c-1.5 0-2 2-2 2s.5-1 2-1 2 1 2 1-.5-2-2-2z"></path>
                </svg>
              </div>
              <h3>A Missão</h3>
              <p>Levar o fogo do Espírito a todos os corações, despertando uma nova geração disposta a queimar por Ele.</p>
            </div>
            
            <div className="about-card reveal delay-1">
              <div className="card-glow"></div>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>A Visão</h3>
              <p>Ser referência de santidade e unidade, construindo o Reino através do serviço e da oração incessante.</p>
            </div>
            
            <div className="about-card reveal delay-2">
              <div className="card-glow"></div>
              <div className="grunge-sticker sticker-3"><img src="/textures/mission.png" alt="" /></div>
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3>O Carisma</h3>
              <p>Acolhimento radical e amor fraterno. Aqui, ninguém sangra sozinho e ninguém caminha só rumo à eternidade.</p>
            </div>
          </div>
        </section>

        <section id="pilares" className="bento-section">
          <div className="section-header reveal">
            <h2 className="graffiti-text">A BASE</h2>
            <p>O que sustenta a nossa marcha</p>
          </div>

          <div className="bento-grid">
            <img src="/Pilar1.png" alt="Pilar 1" className="reveal" />
            <img src="/Pilar2.png" alt="Pilar 2" id="middle" className="reveal delay-1" />
            <img src="/Pilar3.png" alt="Pilar 3" className="reveal delay-2" />
          </div>
        </section>

        <section className="about-quote-section">
          <div className="about-quote-container reveal">
            <div className="quote-mark">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote>
              A humanidade só encontrará a verdadeira paz, amando até doer.
            </blockquote>
            <cite>— Santa Teresa de Calcutá</cite>
          </div>
        </section>

        <section className="banner2">

        </section>

        <section className="about-history-section">
          <div className="history-text-content reveal">
            <h2 className="graffiti-text">O INÍCIO</h2>
            <p>Tudo começou em 2024, com um pequeno grupo e um grande desejo: fazer mais. O que era apenas uma reunião se tornou um movimento irrefreável.</p>
            <p>Hoje, seguimos firmes no propósito de ser sal da terra e luz no caos, levando a Boa Nova a quem precisa de resgate.</p>
          </div>
          <div className="history-image-wrapper reveal delay-1">
            <div className="history-glow"></div>
            <div className="about-img-placeholder"></div>
            <div className="history-badge">DESDE 2024</div>
            <div className="grunge-sticker sticker-4"><img src="StickerLogo.png" alt="" /></div>
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-header reveal">
            <h2 className="graffiti-text">Nossa Trajetória</h2>
            <p>Os marcos da nossa história</p>
          </div>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Janeiro de 2024</span>
                <h3>O Início</h3>
                <p>O primeiro encontro e a faísca que acendeu o movimento, com apenas um pequeno grupo de amigos.</p>
              </div>
            </div>
            <div className="timeline-item reveal delay-1">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Abril de 2024</span>
                <h3>Expansão</h3>
                <p>Os encontros cresceram, necessitando de um espaço maior para acomodar a juventude sedenta.</p>
              </div>
            </div>
            <div className="timeline-item reveal delay-2">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">Hoje</span>
                <h3>Movimento Consolidado</h3>
                <p>Seguimos firmes no propósito de ser sal da terra e luz do mundo, transformando nossa comunidade.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ministerios-section reveal">
          <div className="section-header">
            <span className="badge-glass">LIDERANÇA & SERVIÇO</span>
            <h2>NOSSOS <br/><span className="graffiti-text">Ministérios</span></h2>
            <p>A raiz que nos sustenta e os ramos que dão frutos. Conheça a estrutura e os membros de cada ministério do nosso grupo.</p>
          </div>

          <div className="org-tree">
            <div className="coord-wrapper reveal delay-1">
              <div className="coord-card">
                <div className="coord-glow"></div>
                <div className="coord-info">
                  <span className="role-badge">COORDENAÇÃO GERAL</span>
                  <h3>CONSELHO</h3>
                  <div className="min-members-list">
                    <div className="member-item">
                      <div className="member-avatar">SR</div>
                      <div className="member-info">
                        <h4>Sueslley Rodrigues</h4>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">AP</div>
                      <div className="member-info">
                        <h4>Ana Paula</h4>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">VL</div>
                      <div className="member-info">
                        <h4>Vitor Lopes</h4>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">AC</div>
                      <div className="member-info">
                        <h4>Ana Carolina</h4>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">LC</div>
                      <div className="member-info">
                        <h4>Luca Carvalho</h4>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">RB</div>
                      <div className="member-info">
                        <h4>Rafaela Bezerra</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tree-trunk-main"></div>
            </div>

            <div className="org-branches">
              <div className="org-branch reveal delay-2">
                <div className="min-card">
                  <div className="min-header">
                    <div className="min-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                      </svg>
                    </div>
                    <h3>Música</h3>
                  </div>
                  <div className="min-members-list">
                    <div className="member-item lider">
                      <div className="member-avatar">AC</div>
                      <div className="member-info">
                        <h4>Ana Carolina</h4>
                        <span>Líder do Ministério</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">NS</div>
                      <div className="member-info">
                        <h4>Nathanael Secundo</h4>
                        <span>Cantor / Guitarra</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">FS</div>
                      <div className="member-info">
                        <h4>Felipe Sasaki</h4>
                        <span>Cantor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">MP</div>
                      <div className="member-info">
                        <h4>Mariana Peres</h4>
                        <span>Cantora</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="org-branch reveal delay-3">
                <div className="min-card">
                  <div className="min-header">
                    <div className="min-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h3>Comunicação</h3>
                  </div>
                  <div className="min-members-list">
                    <div className="member-item lider">
                      <div className="member-avatar">LC</div>
                      <div className="member-info">
                        <h4>Luca Carvalho</h4>
                        <span>Líder do Ministério</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">AG</div>
                      <div className="member-info">
                        <h4>Ane Grazielly</h4>
                        <span>Social Media</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">AC</div>
                      <div className="member-info">
                        <h4>Ana Carolina</h4>
                        <span>Social Media</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">GB</div>
                      <div className="member-info">
                        <h4>Guilherme Barbosa</h4>
                        <span>Social Media</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">GN</div>
                      <div className="member-info">
                        <h4>Giselli Nogueira</h4>
                        <span>Social Media</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="org-branch reveal delay-4">
                <div className="min-card">
                  <div className="min-header">
                    <div className="min-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </div>
                    <h3>Intercessão</h3>
                  </div>
                  <div className="min-members-list">
                    <div className="member-item lider">
                      <div className="member-avatar">SR</div>
                      <div className="member-info">
                        <h4>Sueslley Rodrigues</h4>
                        <span>Líder do Ministério</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">VL</div>
                      <div className="member-info">
                        <h4>Vitor Lopes</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">RB</div>
                      <div className="member-info">
                        <h4>Rafaela Bezerra</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">LC</div>
                      <div className="member-info">
                        <h4>Luca Carvalho</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">IG</div>
                      <div className="member-info">
                        <h4>Isabele Gomes</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">DC</div>
                      <div className="member-info">
                        <h4>Diego Carvalho</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">AN</div>
                      <div className="member-info">
                        <h4>Anna Negreiros</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                    <div className="member-item">
                      <div className="member-avatar">AJ</div>
                      <div className="member-info">
                        <h4>Anna Júlia</h4>
                        <span>Intercessor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta-section reveal">
          <div className="cta-inner-box">
            <div className="cta-orb"></div>
            <h2 className='graffiti-text'>O CÉU É LOGO ALI</h2>
            <p>"Não tenhais medo de ser santos."</p>
            <span className="author-cta">— São João Paulo II</span>
            <br/><br/>
            
            <Link to="/join" className="about-btn-glow">
              ENTRAR NA TRINCHEIRA
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;