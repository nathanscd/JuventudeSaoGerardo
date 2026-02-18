import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import '../style/BusForm.css';

interface Passenger {
  id: string;
  nome: string;
  whatsapp: string; 
}

interface FormData {
  nome: string;
  whatsapp: string;
  quantidadeVagas: number;
}

const PRECO_FIXO = 20; 
const LOCAL_FIXO = "Igreja São Gerardo Majella";

const BusForm: React.FC = () => {
  const [step, setStep] = useState<'form' | 'ticket'>('form');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    whatsapp: '',
    quantidadeVagas: 1,
  });

  const [extraPassengers, setExtraPassengers] = useState<Passenger[]>([]);

  const generateTicketId = () => Math.random().toString(36).substr(2, 9).toUpperCase();

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'whatsapp') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
      return;
    }

    if (name === 'quantidadeVagas') {
      const newCount = parseInt(value) || 1;
      const validCount = Math.min(Math.max(newCount, 1), 10); 
      
      setFormData(prev => ({ ...prev, quantidadeVagas: validCount }));

      setExtraPassengers(prev => {
        const diff = validCount - 1 - prev.length;
        if (diff > 0) {
          const newPass = Array(diff).fill(null).map(() => ({ 
            id: generateTicketId(), nome: '', whatsapp: '' 
          }));
          return [...prev, ...newPass];
        } else if (diff < 0) {
          return prev.slice(0, validCount - 1);
        }
        return prev;
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleExtraPassengerChange = (index: number, field: keyof Passenger, value: string) => {
    const updated = [...extraPassengers];
    updated[index] = { 
      ...updated[index], 
      [field]: field === 'whatsapp' ? formatPhone(value) : value 
    };
    setExtraPassengers(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const btn = document.querySelector('.submit-button');
    btn?.classList.add('loading');
    setTimeout(() => {
      setStep('ticket');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  const totalValue = formData.quantidadeVagas * PRECO_FIXO;

  const renderTickets = () => {
    const allPassengers = [
      { id: generateTicketId(), nome: formData.nome, whatsapp: formData.whatsapp },
      ...extraPassengers
    ];

    return (
      <div className="ticket-gallery-container fade-in-up">
        <div className="success-header">
          <div className="icon-circle">🎉</div>
          <h2>Reserva Confirmada!</h2>
          <p>Salve os tickets abaixo para o embarque.</p>
        </div>
        
        <div className="tickets-grid">
          {allPassengers.map((p, idx) => (
            <div key={idx} className="ticket-card">
              <div className="ticket-header">
                <div className="ticket-event-info">
                  <span className="event-name">Halleluya 2026</span>
                  <span className="ticket-tier">CARAVANA OFICIAL</span>
                </div>
                <div className="ticket-logo-box">BUS</div>
              </div>
              
              <div className="ticket-body">
                <div className="info-row full-width">
                  <label>Passageiro</label>
                  <span className="passenger-name">{p.nome}</span>
                </div>
                
                <div className="info-row columns">
                  <div className="col">
                    <label>Embarque</label>
                    <span>{LOCAL_FIXO}</span>
                  </div>
                  <div className="col right-align">
                    <label>Contato</label>
                    <span>{p.whatsapp}</span>
                  </div>
                </div>
              </div>

              <div className="ticket-divider">
                <div className="notch-l"></div>
                <div className="dashed-line"></div>
                <div className="notch-r"></div>
              </div>

              <div className="ticket-footer">
                <div className="qr-box">
                  <div className="qr-pattern"></div>
                </div>
                <div className="ticket-id-box">
                  <label>Ticket ID</label>
                  <span>#{p.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button onClick={() => window.print()} className="action-button print-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
          Salvar / Imprimir Tickets
        </button>
      </div>
    );
  };

  return (
    <div className="bus-page-container">
      <Header />
      
      <div className="ambient-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="content-wrapper">
        <Link to="/events" className="nav-back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Voltar para Eventos
        </Link>

        <div className={`glass-panel ${step === 'ticket' ? 'expanded' : ''}`}>
          
          {step === 'form' ? (
            <div className="form-content fade-in">
              <header className="panel-header">
                <span className="status-badge">Vagas Abertas</span>
                <h1>Reserva de Transporte</h1>
                <p>Garanta seu conforto e segurança na caravana.</p>
              </header>

              <form onSubmit={handleSubmit} className="booking-form">
                
                <div className="form-section">
                  <div className="section-label">Dados do Responsável</div>
                  
                  <div className={`input-group ${focusedField === 'nome' ? 'active' : ''}`}>
                    <label>Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('nome')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Ex: João da Silva"
                      required
                    />
                  </div>

                  <div className="row-2-col">
                    <div className={`input-group ${focusedField === 'whatsapp' ? 'active' : ''}`}>
                      <label>WhatsApp</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('whatsapp')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="(00) 00000-0000"
                        maxLength={15}
                        required
                      />
                    </div>

                    <div className={`input-group ${focusedField === 'vagas' ? 'active' : ''}`}>
                      <label>Assentos</label>
                      <input
                        type="number"
                        name="quantidadeVagas"
                        min="1"
                        max="10"
                        value={formData.quantidadeVagas}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('vagas')}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {extraPassengers.length > 0 && (
                  <div className="form-section extra-passengers">
                    <div className="section-label">Acompanhantes ({extraPassengers.length})</div>
                    {extraPassengers.map((passenger, idx) => (
                      <div key={idx} className="passenger-card">
                        <span className="passenger-idx">#{idx + 1}</span>
                        <div className="passenger-inputs">
                          <input
                            type="text"
                            placeholder="Nome Completo"
                            value={passenger.nome}
                            onChange={(e) => handleExtraPassengerChange(idx, 'nome', e.target.value)}
                            required
                          />
                          <input
                            type="tel"
                            placeholder="WhatsApp"
                            value={passenger.whatsapp}
                            onChange={(e) => handleExtraPassengerChange(idx, 'whatsapp', e.target.value)}
                            maxLength={15}
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="booking-summary">
                  <div className="summary-row">
                    <span className="label">Local de Embarque</span>
                    <span className="value">{LOCAL_FIXO}</span>
                  </div>
                  <div className="summary-row total">
                    <span className="label">Valor Total</span>
                    <span className="value price">R$ {totalValue.toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  <span>Confirmar Reserva</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          ) : (
            renderTickets()
          )}
        </div>
      </div>
    </div>
  );
};

export default BusForm; 