import React, { useState, useEffect } from 'react'; 
import Header from '../components/Header'; 
import '../style/Contact.css'; 
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [subject, setSubject] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);

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

  return (
    <div className="contact-wrapper">
      <Header />
      
      <div className="canvas-container">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="mesh-grid"></div>
      </div>

      <main className="contact-container">
        <section className="contact-info fade-up">
          <div className="info-header">
            <span className="badge-glass">FALE CONOSCO</span>
            <h1 className="title-display">
              VAMOS <br/>
              <span className="gradient-text">CONECTAR</span>
            </h1>
            <p className="description">
              Quer tirar dúvidas, pedir oração ou fazer parte da equipe?
              A gente quer te ouvir. O Espírito sopra onde quer, e talvez ele tenha soprado você até aqui.
            </p>
          </div>

          <div className="social-grid">
            <a href="https://www.instagram.com/juventudesaogerardo/" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="card-bg-effect"></div>
              <div className="social-content-inner">
                <div className="icon-wrapper">
                  <span className="icon">📸</span>
                </div>
                <div className="text-content">
                  <span>Instagram</span>
                  <small>@juventudesaogerardo</small>
                </div>
                <span className="arrow">↗</span>
              </div>
            </a>
            
            <a href="https://www.google.com/maps/dir//Igreja+Matriz+de+S%C3%A3o+Gerardo+Majella,+Av.+Bezerra+de+Menezes,+1256+-+S%C3%A3o+Gerardo,+Fortaleza+-+CE,+60325-005/@-4.0177657,-38.5796601,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7c7497635165ff5:0x4d166ff3c8095ff4!2m2!1d-38.5565806!2d-3.7335897?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="card-bg-effect"></div>
              <div className="social-content-inner">
                <div className="icon-wrapper">
                  <span className="icon">📍</span>
                </div>
                <div className="text-content">
                  <span>Igreja São Gerardo</span>
                  <small>Av. Bezerra de Menezes, 1256</small>
                </div>
                <span className="arrow">↗</span>
              </div>
            </a>
          </div>
        </section>

        <section className="contact-form-section fade-up delay-100">
          <div className="glass-form-card">
            {formStatus === 'sent' ? (
              <div className="success-state">
                <div className="success-icon">✨</div>
                <h2>Mensagem Enviada!</h2>
                <p>Alguém da nossa equipe vai entrar em contato (ou rezar por você) em breve.</p>
                <button onClick={() => { setFormStatus('idle'); setSubject(''); setIsAnonymous(false); }} className="btn-reset">
                  Enviar outra
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="form-title">Mande sua mensagem</h3>

                <div className="input-group">
                  <label>Assunto</label>
                  <div className="select-wrapper">
                    <select 
                      required 
                      value={subject} 
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="" disabled>Sobre o que vamos falar?</option>
                      <option value="prayer">Pedido de Oração 🙏</option>
                      <option value="info">Dúvida sobre o Grupo ❔</option>
                      <option value="join">Quero Servir 🔥</option>
                      <option value="other">Outro Assunto ✉️</option>
                    </select>
                  </div>
                </div>

                {subject === 'prayer' && (
                  <div className="anonymous-toggle-wrapper">
                    <label className="toggle-label">
                      <input 
                        type="checkbox" 
                        checked={isAnonymous} 
                        onChange={(e) => setIsAnonymous(e.target.checked)} 
                      />
                      <span className="toggle-slider"></span>
                      Quero enviar meu pedido anonimamente
                    </label>
                  </div>
                )}

                {!isAnonymous && (
                  <>
                    <div className="input-group fade-in">
                      <label>Seu Nome</label>
                      <input type="text" placeholder="Como você gosta de ser chamado?" required={!isAnonymous} />
                    </div>

                    <div className="input-group fade-in">
                      <label>WhatsApp / Email</label>
                      <input type="text" placeholder="Pra gente te responder" required={!isAnonymous} />
                    </div>
                  </>
                )}

                <div className="input-group">
                  <label>Sua Mensagem</label>
                  <textarea rows={4} placeholder="Abra seu coração..." required></textarea>
                </div>

                <button type="submit" className="btn-submit-glow" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Enviando...' : 'ENVIAR MENSAGEM'}
                  <div className="btn-shine"></div>
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;