import React from 'react';
import { IconArrowRight } from './icons';

const ContactForm = ({ t, title = 'Send a Request', subtitle = 'We typically respond within 24 hours.', textareaLabel = 'Assistance Required', textareaPlaceholder = 'Briefly describe your needs...' }) => (
  <div style={{
    background: 'rgba(10,24,12,0.82)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(159,203,152,0.2)',
    borderRadius: '2rem',
    padding: '2.5rem',
    boxShadow: '0 28px 78px rgba(0,0,0,0.5)'
  }}>
    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.4rem', fontWeight: 700 }}>{title}</h3>
    <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,194,0.38)', marginBottom: '2rem' }}>{subtitle}</p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {[
        { label: 'Full Name', type: 'text', placeholder: 'Ex: Michael Chen' },
        { label: 'Institutional Email', type: 'email', placeholder: 'm.chen@municipality.gov' },
        { label: 'Organization', type: 'text', placeholder: 'City of Philadelphia' },
      ].map(({ label, type, placeholder }) => (
        <div key={label}>
          <label style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>{label}</label>
          <input type={type} placeholder={placeholder} className="form-input" />
        </div>
      ))}
      <div>
        <label style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>{textareaLabel}</label>
        <textarea rows={4} placeholder={textareaPlaceholder} className="form-input" style={{ resize: 'none' }} />
      </div>
      <button
        style={{
          width: '100%', padding: '1.1rem',
          background: 'linear-gradient(135deg, var(--mint), var(--sage))',
          color: 'var(--forest-deep)', border: 'none', borderRadius: '1rem',
          fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.15em',
          textTransform: 'uppercase', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(159,203,152,0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 36px rgba(159,203,152,0.4)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 24px rgba(159,203,152,0.3)'; }}
      >
        {t.submit}
        <IconArrowRight size={16} />
      </button>
      <p style={{ color: 'rgba(242,237,194,0.4)', fontSize: '0.78rem', lineHeight: 1.6, textAlign: 'center' }}>
        No obligation. Treated as confidential.
      </p>
    </div>
  </div>
);

export default ContactForm;
