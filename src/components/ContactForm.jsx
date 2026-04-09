import React from 'react';
import { IconArrowRight } from './icons';

const trustItems = [
  { icon: '🔒', text: 'Treated as confidential' },
  { icon: '⏱', text: 'Response within 24 hours' },
  { icon: '✦', text: 'No obligation to proceed' },
];

const ContactForm = ({ t, title = 'Send a Request', subtitle = 'We typically respond within 24 hours.', textareaLabel = 'Assistance Required', textareaPlaceholder = 'Briefly describe your needs...' }) => (
  <div className="cf-split" style={{
    display: 'flex',
    borderRadius: '2rem', overflow: 'hidden',
    border: '1px solid rgba(121,174,111,0.18)',
    boxShadow: '0 24px 70px rgba(26,58,29,0.14)',
    minHeight: 480,
  }}>
    {/* Left: decorative panel */}
    <div className="cf-split-left" style={{
      flex: '0 0 38%', position: 'relative',
      background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 100%)',
      padding: '2.75rem 2.25rem',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      {/* Decorative ambient circles */}
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: 200, height: 200, borderRadius: '50%', background: 'rgba(159,203,152,0.08)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: 160, height: 160, borderRadius: '50%', background: 'rgba(159,203,152,0.06)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Get in touch
        </div>
        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.4vw, 1.75rem)',
          color: 'var(--cream)', lineHeight: 1.15, fontWeight: 700, marginBottom: '0.75rem',
        }}>{title}</h3>
        <p style={{ fontSize: '0.88rem', color: 'rgba(242,237,194,0.5)', lineHeight: 1.7 }}>{subtitle}</p>
      </div>

      {/* Trust signals */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
        <div style={{ height: 1, background: 'linear-gradient(to right, rgba(159,203,152,0.25), transparent)', marginBottom: '0.25rem' }} />
        {trustItems.map(({ icon, text }) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.8rem', lineHeight: 1, opacity: 0.7 }}>{icon}</span>
            <span style={{ color: 'rgba(242,237,194,0.55)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.02em' }}>{text}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Right: form panel */}
    <div className="cf-split-right" style={{
      flex: 1, padding: '2.75rem 2.5rem',
      background: 'rgba(255,255,255,0.65)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
        {[
          { label: 'Full Name', type: 'text', placeholder: 'Ex: Michael Chen' },
          { label: 'Institutional Email', type: 'email', placeholder: 'm.chen@municipality.gov' },
          { label: 'Organization', type: 'text', placeholder: 'City of Philadelphia' },
        ].map(({ label, type, placeholder }) => (
          <div key={label}>
            <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest)', marginBottom: '0.45rem' }}>{label}</label>
            <input type={type} placeholder={placeholder} className="form-input-light" />
          </div>
        ))}
        <div>
          <label style={{ display: 'block', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--forest)', marginBottom: '0.45rem' }}>{textareaLabel}</label>
          <textarea rows={4} placeholder={textareaPlaceholder} className="form-input-light" style={{ resize: 'none' }} />
        </div>
        <button
          style={{
            width: '100%', padding: '1rem',
            background: 'var(--forest)', color: 'var(--cream)',
            border: 'none', borderRadius: '0.85rem',
            fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.15em',
            textTransform: 'uppercase', cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(45,90,49,0.25)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(45,90,49,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(45,90,49,0.25)'; }}
        >
          {t.submit}
          <IconArrowRight size={15} />
        </button>
      </div>
    </div>
  </div>
);

export default ContactForm;
