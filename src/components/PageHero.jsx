import React from 'react';

const PageHero = ({ videoSrc, eyebrow1, eyebrow2, titlePlain, titleItalic, titleItalicFirst = false, description }) => (
  <header style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="page-hero-overlay" />
      <div className="page-hero-fade" />
    </div>

    <div data-reveal style={{
      position: 'relative', zIndex: 10, maxWidth: '1280px',
      margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '9rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.1rem' }}>
        <span style={{
          color: 'rgba(242,237,194,0.6)', fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', fontSize: '0.7rem'
        }}>{eyebrow1}</span>
        <span style={{ color: 'rgba(159,203,152,0.5)', fontSize: '0.7rem' }}>—</span>
        <span style={{
          color: 'rgba(242,237,194,0.85)', fontWeight: 700, letterSpacing: '0.18em',
          textTransform: 'uppercase', fontSize: '0.72rem'
        }}>{eyebrow2}</span>
      </div>

      <h1 className="page-title" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(3.2rem, 7.4vw, 6.6rem)',
        fontWeight: 900, color: 'var(--cream)',
        lineHeight: 0.95, letterSpacing: '-0.02em',
        marginBottom: '1.5rem',
        textShadow: '0 10px 40px rgba(0,0,0,0.35)'
      }}>
        {titleItalicFirst ? (
          <>
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>{titleItalic}</span>{' '}
            {titlePlain}
          </>
        ) : (
          <>
            {titlePlain}{' '}
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>{titleItalic}</span>
          </>
        )}
      </h1>

      <p style={{
        fontSize: '1.15rem', color: 'rgba(242,237,194,0.82)',
        maxWidth: 700, lineHeight: 1.8, fontWeight: 300
      }}>{description}</p>
    </div>
  </header>
);

export default PageHero;
