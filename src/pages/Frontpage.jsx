import './pageStyles/Frontpage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RecyclingFrontPage() {
  const [buttonText, setButtonText] = useState('Get Started');

  return (
    <div className="recycling-container">
      <section className="hero-section">
        <h1>
          Welcome to <span className="highlight">Recycly</span>
        </h1>
        <p>
          Your smart guide to recycling — learn what to recycle, how to do it, and where to go.
        </p>
        <Link
          to="/WhatToRecycle"
          className="cta-button"
          onMouseEnter={() => setButtonText('Let’s Recycle Smarter!')}
          onMouseLeave={() => setButtonText('Get Started')}
        >
          {buttonText}
        </Link>
      </section>

      <section className="image-row">
        <img className="interactive-img" src="/src/assets/blue-recycle-bin-with-plastic-bottles.png" alt="Plastic Bin" />
        <img className="interactive-img" src="/src/assets/Recycle_Symbol_PNG_Clip_Art-2136.png" alt="Recycle Symbol" />
        <img className="interactive-img" src="/src/assets/pngtree-kids-recycling-garbage-png-image_11710808.png" alt="Kids Recycling" />
      </section>

      <section className="info-section" id="what-to-recycle">
        <div className="info-box interactive-card">
          <h2>Smarter Sorting</h2>
          <p>Discover the do's and don'ts of recycling everyday materials with confidence.</p>
        </div>
        <div className="info-box interactive-card">
          <h2>Step-by-Step Help</h2>
          <p>Learn the best ways to clean, sort, and prepare items for efficient recycling.</p>
        </div>
        <div className="info-box interactive-card">
          <h2>Find Nearby Centers</h2>
          <p>Use our built-in map tools to locate drop-off spots and recycling facilities near you.</p>
        </div>
      </section>
    </div>
  );
}