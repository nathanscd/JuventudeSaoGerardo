import React, { useEffect, useRef, useState } from 'react';
import '../style/Store.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface ColorOption {
  name: string;
  hex: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  qualities: string[];
  sizes?: string[];
  colors?: ColorOption[];
  whatsappLink: string;
}

interface CartItem extends Product {
  cartId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

const Store: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  const [activeImage, setActiveImage] = useState<string>('');
  const [modalSize, setModalSize] = useState<string>('');
  const [modalColor, setModalColor] = useState<string>('');
  const [modalError, setModalError] = useState<string>('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Camiseta Yeshua',
      category: 'Vestuário',
      description: 'Design minimalista e presença marcante. Fio 30.1 penteado.',
      price: 50.00,
      images: ['/Camisa1.png', '/frenteCamisa.png'],
      sizes: ['P', 'M', 'G', 'GG', 'XG'],
      colors: [
        { name: 'Preto Metálico', hex: '#1a1a1a' },
        { name: 'Branco Off-White', hex: '#f4f4f0' }
      ],
      qualities: [
        'Fio 30.1 Penteado - 100% Algodão nobre',
        'Zero pilling com toque ultramacio',
        'Caimento anatômico perfeito',
        'Costura ombro a ombro com reforço'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo'
    },
    {
      id: '2',
      name: 'Camiseta Coração Aflito',
      category: 'Vestuário',
      description: 'Tipografia frontal estampada em Silk HD.',
      price: 50.00,
      images: ['/Camisa2.jpg', '/traseiraCamisa2.png', '/traseiraCamisa.png', '/traseiraCamisa3.png', '/frenteCamisa.png'],
      sizes: ['P', 'M', 'G', 'GG'],
      colors: [
        { name: 'Branco', hex: '#ffffff' },
        { name: 'Areia', hex: '#dcd3b6' }
      ],
      qualities: [
        'Fio 30.1 Penteado premium',
        'Estampa Silk HD resistente',
        'Estrutura blindada e durável'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo'
    },
    {
      id: '3',
      name: 'Caderno de Oração Coração Aflito',
      category: 'Papelaria',
      description: 'Capa Soft Touch, gramatura 90g/m², 160 páginas pontilhadas.',
      price: 35.00,
      images: ['/CadernoMockup.png', '/CadernoAberto.png'],
      colors: [
        { name: 'Vinho', hex: '#4a0e17' },
        { name: 'Preto', hex: '#111111' }
      ],
      qualities: [
        'Capa Soft Touch premium',
        'Gramatura 90g/m² de alta qualidade',
        '160 páginas pontilhadas',
        'Encadernação costurada durável'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo'
    },
    {
      id: '4',
      name: 'Confissões - S. Agostinho',
      category: 'Livraria',
      description: 'Edição de luxo com tradução direta do latim. Capa dura.',
      price: 45.00,
      images: ['/LivroMockup.jfif'],
      qualities: [
        'Tradução direta do latim',
        'Edição de luxo e colecionável',
        'Capa dura com acabamento premium'
      ],
      whatsappLink: 'https://wa.me/seunumerodeexemplo'
    }
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
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
    document.body.style.overflow = (showProductModal || showCart) ? 'hidden' : 'auto';
  }, [showProductModal, showCart]);

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setActiveImage(product.images[0]);
    setModalSize('');
    setModalColor('');
    setModalError('');
    setShowProductModal(true);
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;

    if (selectedProduct.sizes && !modalSize) {
      setModalError('Por favor, selecione um tamanho.');
      return;
    }
    if (selectedProduct.colors && !modalColor) {
      setModalError('Por favor, selecione uma cor.');
      return;
    }

    const uniqueCartId = `${selectedProduct.id}-${modalSize || 'none'}-${modalColor || 'none'}`;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.cartId === uniqueCartId);
      if (existingItem) {
        return prevCart.map(item =>
          item.cartId === uniqueCartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { 
        ...selectedProduct, 
        cartId: uniqueCartId, 
        quantity: 1, 
        selectedSize: modalSize, 
        selectedColor: modalColor 
      }];
    });

    setShowProductModal(false);
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
  };

  const handleUpdateQuantity = (cartId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(cartId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.cartId === cartId ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    const cartSummary = cart
      .map(item => {
        const specs = [];
        if (item.selectedSize) specs.push(`Tamanho: ${item.selectedSize}`);
        if (item.selectedColor) specs.push(`Cor: ${item.selectedColor}`);
        const specsText = specs.length > 0 ? ` [${specs.join(' | ')}]` : '';
        return `• ${item.name}${specsText} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}`;
      })
      .join('%0A');
    
    const message = `Olá! Gostaria de fazer um pedido da Boa Nova Store:%0A%0A${cartSummary}%0A%0ATotal: R$ ${cartTotal.toFixed(2)}`;
    window.open(`https://wa.me/5500000000000?text=${message}`, '_blank');
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
              <p className="product-subtitle">Cada estampa uma história, cada história uma experiência.</p>
              
              <div className="specs-grid">
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Coração Aflito</h4>
                    <span>Seu suor tornou-se como gotas de sangue. - Lc 22,44</span>
                  </div>
                </div>
                
                <div className="spec-item">
                  <div className="spec-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v18M7 8h10" />
                    </svg>
                  </div>
                  <div>
                    <h4>Yeshua</h4>
                    <span>Eu sou aquele que Sou.</span>
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

        <section className='specs-section'>
          <h1 className='hero-title'>DESCUBRA A <br></br><span className='graffiti-text'> qualidade</span></h1>
          <p className='specs-description'>Apresentamos as camisetas do Boa Nova. Qualidade excepcional de tecido e tintura que não sai de modo algum. Vista as camisas que transmitem sua fé e passe o testemunho por meio do estilo.</p>
          <div className='t-shirts-banner'></div>

          <div className='material reveal'>
            <h1 className='hero-title'>FEITO COM <br></br><span className='graffiti-text'> ESMERO</span></h1>

            <h2 className="hero-title"> Toque Suave</h2>
            <p className='hero-description'>Camisas feitas com algodão 30 fios para garantir conforto e suavidade no dia-a-dia. Vista o que te deixa confortável, sem deixar o evangelho para trás.</p>
            <div className='camisasMockup'>
              <img src='/frenteCamisa.png' alt="Camisa Frente" id='Frente'/>
              <img src='/traseiraCamisa.png' alt="Camisa Trás" id= 'Trás'/>
            </div>

            <h2 className="hero-title"> Tintura que não desbota</h2>
            <p className='hero-description'>Nossa camisa foi desenvolvida pensando em uma usabilidade constante para durar anos sem parar. </p>
            <div className='camisasMockup'>
              <img src='/traseiraCamisa.png' alt="Camisa Trás" id= 'Trás1'/>
              <img src='/traseiraCamisa2.png' alt="Camisa Trás" id= 'Trás2'/>
              <img src='/traseiraCamisa3.png' alt="Camisa Trás" id= 'Trás'/>
            </div>
            <p className="hero-description">Impressão em serigrafia que garante a durabilidade da camisa por anos sem desbotar ou descolar.</p>
            
            <h2 className="hero-title width">Estampas que carregam amor</h2>
            <p className='hero-description'>Cada estampa nossa é focada no amor de Deus e trazida a nós por Ele próprio. Nada aqui é apenas por beleza, tudo tem uma razão e cada estampa carrega esse amor da comunidade que Deus nos deu.</p>
            <div className='community-banner' />

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
                <div className="shop-img-box" onClick={() => openProductModal(product)}>
                  <div className="shop-item-glow"></div>
                  <img src={product.images[0]} alt={product.name} />
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
                      onClick={() => openProductModal(product)}
                    >
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Botão Flutuante Carrinho */}
      {cart.length > 0 && (
        <button className="floating-cart-btn reveal-visible" onClick={() => setShowCart(true)}>
          <div className="cart-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="floating-cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <span className="floating-cart-total">R$ {cartTotal.toFixed(2)}</span>
        </button>
      )}

      {/* Modal de Produto */}
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
              
              {/* Galeria de Imagens */}
              <div className="premium-modal-gallery">
                <div className="modal-main-visual">
                  <div className="modal-visual-glow"></div>
                  <img src={activeImage} alt={selectedProduct.name} />
                </div>
                {selectedProduct.images.length > 1 && (
                  <div className="modal-thumbnails">
                    {selectedProduct.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        className={`thumb-box ${activeImage === img ? 'active' : ''}`}
                        onClick={() => setActiveImage(img)}
                      >
                        <img src={img} alt={`Thumb ${idx}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Detalhes do Produto */}
              <div className="premium-modal-details">
                <span className="premium-modal-badge">{selectedProduct.category}</span>
                <h2>{selectedProduct.name}</h2>
                <p className="premium-modal-desc">{selectedProduct.description}</p>
                
                {/* Seleção de Cores */}
                {selectedProduct.colors && (
                  <div className="product-variant-group">
                    <label>Cor Selecionada: <span>{modalColor || 'Nenhuma'}</span></label>
                    <div className="color-selector-grid">
                      {selectedProduct.colors.map(color => (
                        <button
                          key={color.name}
                          className={`color-circle-btn ${modalColor === color.name ? 'selected' : ''}`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                          onClick={() => { setModalColor(color.name); setModalError(''); }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Seleção de Tamanho */}
                {selectedProduct.sizes && (
                  <div className="product-variant-group">
                    <label>Tamanho Selecionado: <span>{modalSize || 'Nenhum'}</span></label>
                    <div className="size-selector-grid">
                      {selectedProduct.sizes.map(size => (
                        <button
                          key={size}
                          className={`size-box-btn ${modalSize === size ? 'selected' : ''}`}
                          onClick={() => { setModalSize(size); setModalError(''); }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {modalError && <div className="modal-error-text">{modalError}</div>}

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
                      onClick={handleAddToCart}
                    >
                      ADICIONAR AO CARRINHO
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Modal do Carrinho */}
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
                <p>Seu carrinho está vazio.</p>
              </div>
            ) : (
              <div className="cart-layout">
                <div className="cart-items-list">
                  {cart.map(item => (
                    <div key={item.cartId} className="premium-cart-item">
                      <div className="cart-item-img">
                        <img src={item.images[0]} alt={item.name} />
                      </div>
                      <div className="cart-item-core">
                        <h4>{item.name}</h4>
                        <span className="cart-item-cat">
                          {item.category} 
                          {item.selectedSize ? ` • Tam: ${item.selectedSize}` : ''} 
                          {item.selectedColor ? ` • Cor: ${item.selectedColor}` : ''}
                        </span>
                        <div className="cart-item-price-mobile">R$ {(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                      <div className="cart-item-actions">
                        <div className="cart-qty-ctrl">
                          <button onClick={() => handleUpdateQuantity(item.cartId, item.quantity - 1)}>−</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleUpdateQuantity(item.cartId, item.quantity + 1)}>+</button>
                        </div>
                        <button className="cart-btn-remove" onClick={() => handleRemoveFromCart(item.cartId)}>Remover</button>
                      </div>
                      <div className="cart-item-total">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-checkout-panel">
                  <div className="cart-summary-data">
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