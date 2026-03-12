import React, { useState, useEffect } from 'react'; 
import Header from '../components/Header'; 
import '../style/Contact.css'; 
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [subject, setSubject] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [showSubjectModal, setShowSubjectModal] = useState<boolean>(false);

  const subjects = [
    {
      id: 'prayer',
      label: 'Pedido de Oração',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      id: 'info',
      label: 'Dúvida sobre o Grupo',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      )
    },
    {
      id: 'join',
      label: 'Quero Servir',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      )
    },
    {
      id: 'other',
      label: 'Outro Assunto',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  useEffect(() => {
    if (subject !== 'prayer') {
      setIsAnonymous(false);
    }
  }, [subject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 2000);
  };

  const getSubjectLabel = () => {
    const found = subjects.find(s => s.id === subject);
    return found ? found.label : 'SOBRE O QUE VAMOS FALAR?';
  };

  return (
    <div className="contact-page-wrapper">
      <Header />

      <div className="bannerContact"></div>
      
      <div className="canvas-container">
        <div className="contact-orb orb-purple"></div>
        <div className="contact-orb orb-magenta"></div>
      </div>

      <main className="contact-main">
        <section className="contact-hero reveal reveal-visible">
          <div className="contact-header-text">
            <h1 className="contact-title">
              VAMOS <br/>
              <span className="graffiti-text">CONECTAR</span>
            </h1>
            <p className="contact-desc">
              Quer tirar dúvidas, pedir oração ou fazer parte da equipe?
              A gente quer te ouvir. O Espírito sopra onde quer, e talvez ele tenha soprado você até aqui.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-col">
              <a href="https://www.instagram.com/juventudesaogerardo/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="card-icon-glass">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="card-text">
                  <h3>Instagram</h3>
                  <p>@juventudesaogerardo</p>
                </div>
                <div className="card-arrow">↗</div>
              </a>
              
              <a href="https://www.google.com/maps/dir//Igreja+Matriz+de+S%C3%A3o+Gerardo+Majella,+Av.+Bezerra+de+Menezes,+1256+-+S%C3%A3o+Gerardo,+Fortaleza+-+CE,+60325-005/@-4.0177657,-38.5796601,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7497635165ff5:0x4d166ff3c8095ff4!2m2!1d-38.5565806!2d-3.7335897?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="card-icon-glass">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="card-text">
                  <h3>Igreja São Gerardo</h3>
                  <p>Av. Bezerra de Menezes, 1256</p>
                </div>
                <div className="card-arrow">↗</div>
              </a>
            </div>

            <div className="contact-form-col">
              <div className="glass-form">
                {formStatus === 'sent' ? (
                  <div className="form-success">
                    <div className="success-icon-wrapper">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h2>MENSAGEM ENVIADA!</h2>
                    <p>Alguém da nossa equipe vai entrar em contato em breve.</p>
                    <button onClick={() => { setFormStatus('idle'); setSubject(''); setIsAnonymous(false); }} className="contact-btn-glow outline">
                      NOVA MENSAGEM
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="form-heading">Envie sua mensagem</h3>

                    <div className="input-block">
                      <label>ASSUNTO</label>
                      <button 
                        type="button" 
                        className={`modal-select-trigger ${!subject ? 'empty' : ''}`}
                        onClick={() => setShowSubjectModal(true)}
                      >
                        <span className="trigger-content">
                          {subject && subjects.find(s => s.id === subject)?.icon}
                          {getSubjectLabel()}
                        </span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>

                    {subject === 'prayer' && (
                      <div className="toggle-block">
                        <label className="switch-wrapper">
                          <input 
                            type="checkbox" 
                            checked={isAnonymous} 
                            onChange={(e) => setIsAnonymous(e.target.checked)} 
                          />
                          <span className="slider"></span>
                          <span className="switch-text">ENVIAR ANONIMAMENTE</span>
                        </label>
                      </div>
                    )}

                    {!isAnonymous && (
                      <div className="input-row">
                        <div className="input-block">
                          <label>SEU NOME</label>
                          <input type="text" placeholder="Como te chamamos?" required={!isAnonymous} />
                        </div>
                        <div className="input-block">
                          <label>CONTATO</label>
                          <input type="text" placeholder="WhatsApp ou Email" required={!isAnonymous} />
                        </div>
                      </div>
                    )}

                    <div className="input-block">
                      <label>SUA MENSAGEM</label>
                      <textarea rows={4} placeholder="Escreva aqui..." required></textarea>
                    </div>

                    <button type="submit" className="contact-btn-glow" disabled={formStatus === 'sending' || !subject}>
                      {formStatus === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {showSubjectModal && (
        <div className="custom-modal-overlay" onClick={() => setShowSubjectModal(false)}>
          <div className="custom-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top">
              <h3>ESCOLHA O ASSUNTO</h3>
              <button className="modal-close-x" onClick={() => setShowSubjectModal(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="modal-options">
              {subjects.map((item) => (
                <button 
                  key={item.id} 
                  type="button"
                  className="modal-option-btn"
                  onClick={() => {
                    setSubject(item.id);
                    setShowSubjectModal(false);
                  }}
                >
                  <span className="opt-icon">{item.icon}</span>
                  <span className="opt-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Contact;