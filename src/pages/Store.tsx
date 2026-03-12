import React, { useEffect, useRef, useState } from 'react';
import '../style/Store.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  qualities: string[];
  whatsappLink: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Store: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const products: Product[] = [
    {
      id: '1',
      name: 'Camiseta Classic Logo',
      category: 'Vestuário',
      description: 'Preto metálico, design minimalista. Fio 30.1 penteado.',
      price: 50.00,
      image: '/Camisa1.png',
      qualities: [
        'Fio 30.1 Penteado - 100% Algodão nobre',
        'Zero pilling com toque ultramacio',
        'Caimento anatômico perfeito',
        'Gola em ribana canelada',
        'Costura ombro a ombro com reforço',
        'Resistente a lavagens pesadas'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20a%20Camiseta%20Classic%20Logo'
    },
    {
      id: '2',
      name: 'Camiseta Versicle Edition',
      category: 'Vestuário',
      description: 'Branco off-white. Tipografia frontal estampada em Silk HD.',
      price: 50.00,
      image: '/Camisa2.png',
      qualities: [
        'Fio 30.1 Penteado premium',
        'Estampa Silk HD resistente',
        'Cor branco off-white elegante',
        'Estrutura blindada e durável',
        'Tipografia frontal sofisticada',
        'Atrito contínuo resistente'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20a%20Camiseta%20Versicle%20Edition'
    },
    {
      id: '3',
      name: 'Caderno de Oração Pro',
      category: 'Papelaria',
      description: 'Capa Soft Touch, gramatura 90g/m², 160 páginas pontilhadas.',
      price: 35.00,
      image: '/CadernoMockup.png',
      qualities: [
        'Capa Soft Touch premium',
        'Gramatura 90g/m² de alta qualidade',
        '160 páginas pontilhadas',
        'Encadernação costurada durável',
        'Papel ecológico e resistente',
        'Design minimalista e elegante'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20o%20Caderno%20de%20Oração%20Pro'
    },
    {
      id: '4',
      name: 'Confissões - S. Agostinho',
      category: 'Livraria',
      description: 'Edição de luxo com tradução direta do latim. Capa dura.',
      price: 45.00,
      image: '/LivroMockup.png',
      qualities: [
        'Tradução direta do latim',
        'Edição de luxo e colecionável',
        'Capa dura com acabamento premium',
        'Papel de alta qualidade',
        'Impressão nítida e legível',
        'Encadernação profissional'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20Confissões%20-%20S.%20Agostinho'
    },
    {
      id: '5',
      name: 'Estojo Premium',
      category: 'Acessórios',
      description: 'Estojo em couro sintético com compartimentos organizadores.',
      price: 40.00,
      image: '/EstojoPremium.png',
      qualities: [
        'Couro sintético de alta durabilidade',
        'Múltiplos compartimentos organizadores',
        'Fecho magnético resistente',
        'Design celestial sofisticado',
        'Capacidade para 20+ itens',
        'Acabamento premium e elegante'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20o%20Estojo%20Premium%20Celestial'
    },
    {
      id: '6',
      name: 'Bíblia de Estudo Anotada',
      category: 'Livraria',
      description: 'Bíblia com anotações, referências cruzadas e mapa de índice.',
      price: 65.00,
      image: '/BibliaEstudo.png',
      qualities: [
        'Anotações e referências cruzadas completas',
        'Mapa de índice detalhado',
        'Capa dura com marcador de páginas',
        'Papel fino e resistente',
        'Fonte legível e clara',
        'Edição revisada e atualizada'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20a%20Bíblia%20de%20Estudo%20Anotada'
    },
    {
      id: '7',
      name: 'Caderno de Reflexão Diária',
      category: 'Papelaria',
      description: 'Caderno com espaço para reflexões, versículos e gratidão.',
      price: 38.00,
      image: '/CadernoReflexao.png',
      qualities: [
        'Páginas estruturadas para reflexão',
        'Espaço dedicado para versículos',
        'Seção de gratidão diária',
        'Capa Soft Touch premium',
        '200 páginas de qualidade',
        'Encadernação costurada durável'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20o%20Caderno%20de%20Reflexão%20Diária'
    },
    {
      id: '8',
      name: 'Kit Marcadores de Página Premium',
      category: 'Acessórios',
      description: 'Conjunto com 5 marcadores em fita de seda com detalhes em ouro.',
      price: 28.00,
      image: '/MarcadoresPremium.png',
      qualities: [
        'Fita de seda de alta qualidade',
        'Detalhes em ouro 24k',
        'Conjunto com 5 marcadores variados',
        'Design elegante e sofisticado',
        'Embalagem premium para presente',
        'Durável e reutilizável'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo?text=Gostaria%20de%20reservar%20o%20Kit%20Marcadores%20de%20Página%20Premium'
    }
  ];

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

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  useEffect(() => {
    if (showProductModal || showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showProductModal, showCart]);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const cartSummary = cart
      .map(item => `${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');
    
    const message = `Olá! Gostaria de fazer um pedido da Boa Nova Store:%0A%0A${cartSummary}%0A%0ATotal: R$ ${cartTotal.toFixed(2)}`;
    window.open(`https://wa.me/seunumerodeexemplo?text=${message}`, '_blank');
  };

  return (
    <div className="store-wrapper" ref={scrollRef}>      
      <Header />
      
      <section className="bannerstore" id="store-banner"></section>

      <div className="canvas-container">
        <div className="gradient-sphere sphere-store-1"></div>
        <div className="gradient-sphere sphere-store-2"></div>
        <div className="mesh-grid"></div>
      </div>

      <main className="main-content">
        <section className="store-hero reveal">
          <div className="store-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            BOA NOVA STORE
          </div>
          <h1 className="hero-title">
            DESIGN <br />
            <span className="graffiti-text">CELESTIAL</span>
          </h1>
          <p className="hero-description">
            O invisível manifesto no visível. Desenvolvemos peças com um padrão de excelência implacável para que você carregue a mensagem com a mais alta dignidade e conforto absoluto.
          </p>
        </section>

        <section className="products-showcase">
          <div className="featured-product reveal">
            <div className="product-visual">
              <div className="product-glow-bg"></div>
              <img src="/Tshirts.png" alt="Camisas Boa Nova" className="main-product-img" />
            </div>
            
            <div className="product-details">
              <h2 className="product-title">Diversas coleções</h2>
              <p className="product-subtitle">Engenharia têxtil voltada para o uso extremo e durabilidade incomparável.</p>
              
              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 8v8"></path>
                      <path d="M8 12h8"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Fio 30.1 Penteado</h4>
                    <span>100% Algodão nobre. Zero pilling, toque ultramacio e caimento anatômico.</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Estrutura Blindada</h4>
                    <span>Gola em ribana canelada e costura ombro a ombro com reforço interno.</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20"></path>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Silk HD High-Res</h4>
                    <span>Tecnologia de estamparia resistente a lavagens pesadas e atrito contínuo.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="store-quote-section reveal">
          <div className="quote-container">
            <div className="quote-mark">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote>
              O importante não é o que se dá, mas o amor com que se dá.
            </blockquote>
            <cite>— Santa Teresa de Calcutá </cite>
          </div>
        </section>

        <section className="shop-section">
          <div className="shop-header reveal">
            <div className="shop-header-content">
              <h2>CATÁLOGO OFICIAL</h2>
              <p>Selecione os itens, adicione ao carrinho e reserve com facilidade.</p>
            </div>
          </div>

          <div className="shop-grid">
            {products.map((product, index) => (
              <div key={product.id} className={`shop-card reveal delay-${(index % 3) + 1}`}>
                <div className="shop-img-box" onClick={() => { setSelectedProduct(product); setShowProductModal(true); }}>
                  <div className="shop-item-glow"></div>
                  <img src={product.image} alt={product.name} />
                  <div className="view-details-overlay">VER DETALHES</div>
                </div>
                <div className="shop-info">
                  <span className="shop-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="shop-action-row">
                    <span className="shop-price">R$ {product.price.toFixed(2)}</span>
                    <button 
                      className="btn-buy"
                      onClick={() => handleAddToCart(product)}
                    >
                      CARRINHO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {cart.length > 0 && (
        <button className="floating-cart-btn reveal-visible" onClick={() => setShowCart(true)}>
          <div className="cart-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="floating-cart-count">{cart.length}</span>
          </div>
          <span className="floating-cart-total">R$ {cartTotal.toFixed(2)}</span>
        </button>
      )}

      {showProductModal && selectedProduct && (
        <div className="premium-modal-overlay" onClick={() => setShowProductModal(false)}>
          <div className="premium-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="premium-modal-close" onClick={() => setShowProductModal(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="premium-modal-grid">
              <div className="premium-modal-visual">
                <div className="modal-visual-glow"></div>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="premium-modal-details">
                <span className="premium-modal-badge">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="premium-modal-desc">{selectedProduct.description}</p>
                
                <div className="premium-qualities">
                  <h4>Especificações Técnicas</h4>
                  <ul>
                    {selectedProduct.qualities.map((quality, idx) => (
                      <li key={idx}>
                        <span className="quality-bullet"></span>
                        {quality}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="premium-modal-footer">
                  <div className="premium-modal-price">R$ {selectedProduct.price.toFixed(2)}</div>
                  <div className="premium-modal-actions">
                    <button 
                      className="btn-premium-solid"
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                        setShowProductModal(false);
                      }}
                    >
                      ADICIONAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCart && (
        <div className="premium-modal-overlay" onClick={() => setShowCart(false)}>
          <div className="premium-cart-content" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>SEU CARRINHO</h2>
              <button className="premium-modal-close relative-close" onClick={() => setShowCart(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            {cart.length === 0 ? (
              <div className="cart-empty-state">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Seu carrinho está vazio.</p>
              </div>
            ) : (
              <div className="cart-layout">
                <div className="cart-items-list">
                  {cart.map(item => (
                    <div key={item.id} className="premium-cart-item">
                      <div className="cart-item-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-core">
                        <h4>{item.name}</h4>
                        <span className="cart-item-cat">{item.category}</span>
                        <div className="cart-item-price-mobile">R$ {(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                      <div className="cart-item-actions">
                        <div className="cart-qty-ctrl">
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>−</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button className="cart-btn-remove" onClick={() => handleRemoveFromCart(item.id)}>Remover</button>
                      </div>
                      <div className="cart-item-total">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-checkout-panel">
                  <div className="cart-summary-data">
                    <div className="summary-line">
                      <span>Subtotal</span>
                      <span>R$ {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-line total-line">
                      <span>Total</span>
                      <span>R$ {cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="btn-premium-solid w-full" onClick={handleCheckout}>
                    FINALIZAR PEDIDO
                  </button>
                  <p className="checkout-note">Você será redirecionado para o WhatsApp para confirmar sua reserva.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Store;