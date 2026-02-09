import React, { useState } from 'react';
import '../BusForm.css';
import Header from '../components/Header';

interface Passenger {
  id: string;
  nome: string;
  whatsapp: string; 
}

interface FormData {
  nome: string;
  whatsapp: string;
  pontoEmbarque: string;
  quantidadeVagas: number;
  tipoViagem: 'ida-volta' | 'apenas-ida';
  observacoes: string;
}

const PRECO_IDA_VOLTA = 35;
const PRECO_APENAS_IDA = 20;
const LOCAL_FIXO = "Igreja São Gerardo Majella";

const BusForm: React.FC = () => {
  const [step, setStep] = useState<'form' | 'ticket'>('form');
  
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    whatsapp: '',
    pontoEmbarque: LOCAL_FIXO,
    quantidadeVagas: 1,
    tipoViagem: 'ida-volta',
    observacoes: ''
  });

  const [extraPassengers, setExtraPassengers] = useState<Passenger[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const generateTicketId = () => {
    return Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'quantidadeVagas') {
      const newCount = parseInt(value);
      setFormData(prev => ({ ...prev, quantidadeVagas: newCount }));
      
      setExtraPassengers(prev => {
        const diff = newCount - 1 - prev.length;
        if (diff > 0) {
          const newPass = Array(diff).fill(null).map(() => ({ id: generateTicketId(), nome: '', whatsapp: '' }));
          return [...prev, ...newPass];
        } else if (diff < 0) {
          return prev.slice(0, newCount - 1);
        }
        return prev;
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleExtraPassengerChange = (index: number, field: keyof Passenger, value: string) => {
    const updated = [...extraPassengers];
    updated[index] = { ...updated[index], [field]: value };
    setExtraPassengers(updated);
  };

  const handleTripTypeSelect = (type: 'ida-volta' | 'apenas-ida') => {
    setFormData(prev => ({ ...prev, tipoViagem: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('ticket');
  };

  const totalValue = formData.quantidadeVagas * (formData.tipoViagem === 'ida-volta' ? PRECO_IDA_VOLTA : PRECO_APENAS_IDA);

  const renderTickets = () => {
    const allPassengers = [
      { id: generateTicketId(), nome: formData.nome, whatsapp: formData.whatsapp },
      ...extraPassengers
    ];

    return (
      <div className="ticket-gallery">
        <div className="success-message">
          <h2>🎉 Reserva Confirmada!</h2>
          <p>Salve os tickets abaixo para o embarque.</p>
        </div>
        
        {allPassengers.map((p, idx) => (
          <div key={idx} className="ticket-card">
            <div className="ticket-header">
              <span className="ticket-type">Halleluya 2026 • {formData.tipoViagem === 'ida-volta' ? 'Ida/Volta' : 'Ida'}</span>
              <span className="ticket-logo">BUS</span>
            </div>
            <div className="ticket-body">
              <div className="ticket-row">
                <div className="ticket-field">
                  <label>Passageiro</label>
                  <span>{p.nome}</span>
                </div>
              </div>
              <div className="ticket-row">
                <div className="ticket-field">
                  <label>Embarque</label>
                  <span>{LOCAL_FIXO.toUpperCase()}</span>
                </div>
                <div className="ticket-field right">
                  <label>Contato</label>
                  <span>{p.whatsapp}</span>
                </div>
              </div>
            </div>
            <div className="ticket-rip"></div>
            <div className="ticket-footer">
              <div className="qr-code"></div>
              <span className="ticket-id">#{p.id}</span>
            </div>
          </div>
        ))}
        
        <button onClick={() => window.print()} className="action-button print-btn">
          Salvar / Imprimir Tickets
        </button>
      </div>
    );
  };

  return (
    <div className="form-wrapper">
      <Header />
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className={`form-container ${step === 'ticket' ? 'wide-mode' : ''}`}>
        {step === 'form' ? (
          <>
            <header className="form-header">
              <div className="brand-badge">Halleluya 2026</div>
              <h1>Sua Jornada Começa Aqui</h1>
              <p>Garanta seu lugar no ônibus oficial da caravana.</p>
            </header>

            <form onSubmit={handleSubmit} className="bus-booking-form">
              <div className="trip-selector">
                <div 
                  className={`trip-option ${formData.tipoViagem === 'ida-volta' ? 'active' : ''}`}
                  onClick={() => handleTripTypeSelect('ida-volta')}
                >
                  <span className="trip-icon">🔄</span>
                  <div className="trip-info">
                    <span className="trip-label">Ida e Volta</span>
                    <span className="trip-price">R$ {PRECO_IDA_VOLTA},00</span>
                  </div>
                </div>
                <div 
                  className={`trip-option ${formData.tipoViagem === 'apenas-ida' ? 'active' : ''}`}
                  onClick={() => handleTripTypeSelect('apenas-ida')}
                >
                  <span className="trip-icon">➡️</span>
                  <div className="trip-info">
                    <span className="trip-label">Apenas Ida</span>
                    <span className="trip-price">R$ {PRECO_APENAS_IDA},00</span>
                  </div>
                </div>
              </div>

              <div className="section-title">Responsável</div>
              
              <div className={`input-group ${focusedField === 'nome' ? 'focused' : ''}`}>
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('nome')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
              </div>

              <div className="row-split">
                <div className={`input-group ${focusedField === 'whatsapp' ? 'focused' : ''}`}>
                  <label>WhatsApp</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('whatsapp')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                <div className={`input-group ${focusedField === 'vagas' ? 'focused' : ''}`}>
                  <label>Assentos</label>
                  <input
                    type="number"
                    name="quantidadeVagas"
                    min="1"
                    max="10"
                    value={formData.quantidadeVagas}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('vagas')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </div>

              {extraPassengers.length > 0 && (
                <div className="extra-passengers-section">
                  <div className="section-title">Passageiros Adicionais</div>
                  {extraPassengers.map((passenger, idx) => (
                    <div key={idx} className="passenger-row fade-in">
                      <div className="input-group">
                        <label>Nome Passageiro {idx + 1}</label>
                        <input
                          type="text"
                          value={passenger.nome}
                          onChange={(e) => handleExtraPassengerChange(idx, 'nome', e.target.value)}
                          required
                        />
                      </div>
                      <div className="input-group">
                        <label>WhatsApp</label>
                        <input
                          type="tel"
                          value={passenger.whatsapp}
                          onChange={(e) => handleExtraPassengerChange(idx, 'whatsapp', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="location-notice">
                <span className="location-icon">📍</span>
                <div className="location-info">
                  <label>Local de Embarque</label>
                  <strong>{LOCAL_FIXO}</strong>
                </div>
              </div>

              <div className="total-summary">
                <span>Total a Pagar:</span>
                <span className="total-price">
                  R$ {totalValue.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <button type="submit" className="submit-button">
                <span>Gerar Tickets</span>
                <div className="btn-shine"></div>
              </button>
            </form>
          </>
        ) : (
          renderTickets()
        )}
      </div>
    </div>
  );
};

export default BusForm;