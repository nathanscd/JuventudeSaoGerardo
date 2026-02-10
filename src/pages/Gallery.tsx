import React, { useState } from 'react'; 
import Header from '../components/Header';
import '../Gallery.css';

import { galleryPhotos } from '../data/photosData';
import type { PhotoItem } from '../data/photosData'; 

const Gallery: React.FC = () => {
    const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    card.style.setProperty('--rotate-y', `${x / 10}deg`);
    card.style.setProperty('--rotate-x', `${-y / 10}deg`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotate-y', `0deg`);
    card.style.setProperty('--rotate-x', `0deg`);
  };

  return (
    <div className="gallery-wrapper">
      <Header />
      
      <div className="noise-overlay"></div>
      <div className="ambient-orbs-gallery">
        <div className="orb-g orb-g-1"></div>
        <div className="orb-g orb-g-2"></div>
      </div>

      <main className="gallery-container">
        <section className="gallery-header fade-up">
          <span className="badge-glass">NOSSA HISTÓRIA</span>
          <h1 className="title-display">
            MURAL DE <br/>
            <span className="gradient-text">MEMÓRIAS</span>
          </h1>
          <p className="description">
            Cada clique, um testemunho. Reviva os momentos onde o céu tocou a terra.
          </p>
        </section>

        <section className="photo-masonry fade-up delay-100">
          {galleryPhotos.map((photo: PhotoItem) => (
            <div 
              key={photo.id} 
              className={`photo-card glass-polaroid ${photo.size || ''}`}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
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
    </div>
  );
};

export default Gallery;