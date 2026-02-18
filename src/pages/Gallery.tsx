import React, { useState, useEffect, useCallback } from 'react'; 
import Header from '../components/Header';
import '../style/Gallery.css';
import Footer from '../components/Footer';

import { galleryPhotos } from '../data/photosData';
import type { PhotoItem } from '../data/photosData'; 

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    setSelectedIndex((prev) => 
      prev !== null ? (prev + 1) % galleryPhotos.length : null
    );
  }, []);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
    setSelectedIndex((prev) => 
      prev !== null ? (prev - 1 + galleryPhotos.length) % galleryPhotos.length : null
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    card.style.setProperty('--rotate-y', `${x / 20}deg`);
    card.style.setProperty('--rotate-x', `${-y / 20}deg`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-y', `0deg`);
    card.style.setProperty('--rotate-x', `0deg`);
  };

  const currentPhoto = selectedIndex !== null ? galleryPhotos[selectedIndex] : null;

  return (
    <div className="gallery-wrapper">
      <Header />
      
      <div className="ambient-orbs-gallery">
        <div className="orb-g orb-g-1"></div>
        <div className="orb-g orb-g-2"></div>
      </div>

      <main className="gallery-container">
        <section className="gallery-header fade-up">
          <div className="badge-glass">NOSSA HISTÓRIA</div>
          <h1 className="title-display">
            MURAL DE <br/>
            <span className="gradient-text">MEMÓRIAS</span>
          </h1>
          <p className="description">
            Cada clique, um testemunho. Reviva os momentos onde o céu tocou a terra.
          </p>
        </section>

        <section className="photo-masonry fade-up delay-100">
          {galleryPhotos.map((photo: PhotoItem, index: number) => (
            <div 
              key={photo.id} 
              className={`photo-card glass-polaroid ${photo.size || ''}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              onClick={() => openModal(index)}
            >
              <div className="polaroid-inner">
                <div className="img-container">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <div className="overlay-glow"></div>
                </div>
                <div className="photo-caption">
                  <p>{photo.caption}</p>
                  <span className="sticker-icon">✨</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {currentPhoto && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-backdrop-blur"></div>
          
          <button className="modal-close-btn" onClick={closeModal}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>

          <button className="modal-nav-btn prev" onClick={handlePrev}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div 
            className={`modal-content ${isAnimating ? 'animating' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-image-wrapper">
              <img src={currentPhoto.src} alt={currentPhoto.alt} />
              <div className="modal-info-bar">
                <span className="photo-counter">{selectedIndex! + 1} / {galleryPhotos.length}</span>
                <h3>{currentPhoto.caption}</h3>
              </div>
            </div>
          </div>

          <button className="modal-nav-btn next" onClick={handleNext}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;