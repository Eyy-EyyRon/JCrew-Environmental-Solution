import React from 'react';
import footerHillsImg from '../assets/footer-hills.webp';

const Footer = () => (
  <footer style={{
    position: 'relative', overflow: 'hidden',
    borderTop: 'none', padding: 0,
  }}>
    {/* Background image */}
    <img
      src={footerHillsImg}
      alt=""
      loading="lazy"
      decoding="async"
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', objectPosition: 'center top',
        zIndex: 0,
      }}
    />
    {/* Overlay for text legibility */}
    <div style={{
      position: 'absolute', inset: 0, zIndex: 1,
      background: 'linear-gradient(to bottom, rgba(26,58,29,0.3) 0%, rgba(26,58,29,0.75) 40%, rgba(26,58,29,0.92) 100%)',
    }} />
    <div style={{ position: 'relative', zIndex: 2, padding: '5rem 2rem 3rem' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: 'var(--cream)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.6rem' }}>JCrew</div>
          <div style={{ color: 'rgba(159,203,152,0.6)', fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>Environmental Solution</div>
          <p style={{ color: 'rgba(242,237,194,0.45)', fontSize: '0.82rem', lineHeight: 1.7, maxWidth: 260 }}>
            Program management and field execution for PFAS response, infrastructure compliance, and clean energy deployment.
          </p>
        </div>

        <div>
          <div style={{ color: 'var(--mint)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Services</div>
          {['Clean Energy Vision', 'PFAS Response Division', 'How We Work', 'Funding & Accountability'].map(item => (
            <a key={item} href={`#/${item.toLowerCase().replace(/ & /g, '-and-').replace(/ /g, '-')}`}
              style={{ display: 'block', color: 'rgba(242,237,194,0.5)', fontSize: '0.82rem', marginBottom: '0.6rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--mint)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(242,237,194,0.5)'}
            >{item}</a>
          ))}
        </div>

        <div>
          <div style={{ color: 'var(--mint)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>Contact</div>
          {[
            ['103 Rotary Drive, West Hazleton, PA'],
            ['(844) 878-7347'],
            ['info@jcrew-env.com'],
          ].map(([val]) => (
            <div key={val} style={{ color: 'rgba(242,237,194,0.5)', fontSize: '0.82rem', marginBottom: '0.6rem', lineHeight: 1.5 }}>{val}</div>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(121,174,111,0.2), transparent)', margin: '0 0 1.5rem' }} />

      <div className="footer-inner">
        <p style={{ fontSize: '0.7rem', color: 'rgba(159,203,152,0.35)', letterSpacing: '0.1em' }}>
          © 2026 JCrew Environmental Solution. All rights reserved.
        </p>
        <p style={{ fontSize: '0.7rem', color: 'rgba(159,203,152,0.25)', letterSpacing: '0.05em' }}>
          Built for public agencies and complex sites.
        </p>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
