import React, { useEffect } from 'react';
import { IconCheck } from '../components/icons';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

import heroFundingVideo from '../assets/Hero-Funding-small.mp4';
import colleaguesImg from '../assets/business-colleagues-discussing-project-in-office.webp';

const fundingPhases = [
  { num: '01', title: 'Funding Strategy', desc: 'Grant alignment, capital stack planning, and resource optimization for long-horizon environmental programs. We identify funding sources, eligibility requirements, and sequencing.' },
  { num: '02', title: 'Procurement Support', desc: 'Transparent bidding, contractor qualification, and contract structures that protect public interest and satisfy grant compliance requirements.' },
  { num: '03', title: 'Financial Reporting', desc: 'Clear documentation, milestone tracking, and audit-ready records for every phase of delivery. Funders and oversight bodies can verify progress at any point.' },
  { num: '04', title: 'Risk Management', desc: 'Cost controls, contingency planning, and accountability frameworks that keep programs on track even when conditions change.' },
];

const services = [
  {
    title: 'Grant Writing & Applications',
    desc: 'Federal, state, and foundation funding applications with technical clarity and compliance-ready documentation.',
    icon: '→',
  },
  {
    title: 'Budget Planning & Management',
    desc: 'Phased allocation, contingency reserves, and cash flow management across multi-year infrastructure programs.',
    icon: '→',
  },
  {
    title: 'Contract Oversight',
    desc: 'Scope verification, change order management, and payment authorization tied to verified deliverables.',
    icon: '→',
  },
  {
    title: 'Audit Readiness',
    desc: 'Documentation systems, compliance tracking, and transparency protocols that hold up under scrutiny.',
    icon: '→',
  },
];

const fundingSources = [
  'EPA Revolving Funds (SRF, DWSRF)',
  'IIJA / Bipartisan Infrastructure Law',
  'FEMA Hazard Mitigation Programs',
  'State Environmental Grants',
  'HUD CDBG-DR Funding',
  'USDA Rural Development',
  'DOE Clean Energy Programs',
  'Foundation & Impact Funding',
];

const FundingAndAccountabilityPage = ({ t }) => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.slide-card'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const idx = els.indexOf(el);
          setTimeout(() => el.classList.add('slide-in'), idx * 120);
          io.unobserve(el);
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
  <section style={{ background: 'var(--cream)' }}>
    <PageHero
      videoSrc={heroFundingVideo}
      eyebrow1="Financial"
      eyebrow2="Governance"
      titlePlain="Funding"
      titleItalic="& Accountability"
      description="JCrew Environmental Solution structures environmental programs with clear financial pathways, grant alignment, and defensible accountability—ensuring every dollar is traceable and every deliverable is verifiable."
    />

    {/* Four financial phases */}
    <section data-reveal style={{ padding: '7rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{
          position: 'relative', borderRadius: '2.25rem', overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.2)',
          boxShadow: '0 24px 80px rgba(26,58,29,0.18)',
          background: `var(--forest-deep) url(${colleaguesImg}) center / cover no-repeat`,
          minHeight: 420, display: 'flex',
        }}>
          {/* Subtle full-bg overlay — image visible everywhere */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,29,0.52)' }} />
          {/* Left-side legibility gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,58,29,0.68) 0%, rgba(26,58,29,0.25) 55%, rgba(26,58,29,0) 100%)' }} />
          <div className="card-text-right" style={{ position: 'relative', zIndex: 2, padding: '3.5rem 3.25rem', width: '62%', minWidth: 0 }}>
            <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
              Financial Program Structure
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 900, lineHeight: 1.05, color: 'var(--cream)',
              letterSpacing: '-0.02em', marginBottom: '2.5rem'
            }}>
              Financial integrity,{' '}
              <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>programmatic accountability</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '1.5rem' }}>
              {fundingPhases.map(({ num, title, desc }) => (
                <div key={num} className="slide-card slide-card-dark">
                  <div style={{ color: 'var(--mint)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1 }}>{num}</div>
                  <div style={{ height: 1, background: 'linear-gradient(to right, rgba(159,203,152,0.3), transparent)', marginBottom: '0.85rem' }} />
                  <div style={{ color: 'var(--cream)', fontWeight: 700, fontSize: '1.02rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>{title}</div>
                  <p style={{ color: 'rgba(242,237,194,0.6)', lineHeight: 1.75, fontSize: '0.9rem' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service cards */}
    <section data-reveal style={{ padding: '0 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{ marginBottom: '2.25rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--forest)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Financial services we provide
          </h3>
          <p style={{ color: 'rgba(45,90,49,0.62)', fontSize: '1rem', lineHeight: 1.65, maxWidth: 560 }}>
            Structured financial management that keeps every program fundable, auditable, and accountable throughout delivery.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '1.25rem' }}>
          {services.map(({ title, desc }) => (
            <div key={title} className="info-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconCheck /></span>
                <div style={{ color: 'var(--forest)', fontWeight: 800, fontSize: '0.98rem' }}>{title}</div>
              </div>
              <p style={{ color: 'rgba(45,90,49,0.68)', lineHeight: 1.7, fontSize: '0.9rem', paddingLeft: '1.6rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Funding sources */}
    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{
          borderRadius: '2rem', padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 4vw, 3.25rem)',
          background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-deep) 100%)',
          border: '1px solid rgba(159,203,152,0.12)',
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                Funding Sources
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: 'var(--cream)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                Sources we help{' '}
                <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>navigate and align</span>
              </h3>
              <p style={{ color: 'rgba(242,237,194,0.6)', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: 380 }}>
                We identify eligible funding sources, align program structure to funder requirements, and build documentation systems that satisfy grant compliance.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(160px, 100%), 1fr))', gap: '0.65rem' }}>
              {fundingSources.map((source) => (
                <div key={source} style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(159,203,152,0.12)',
                  borderRadius: '1rem',
                  transition: 'background 0.2s, border-color 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(159,203,152,0.08)'; e.currentTarget.style.borderColor = 'rgba(159,203,152,0.25)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(159,203,152,0.12)'; }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--mint)', flexShrink: 0, opacity: 0.7 }} />
                  <span style={{ color: 'rgba(242,237,194,0.72)', fontSize: '0.8rem', lineHeight: 1.4 }}>{source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Accountability callout */}
    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{
          borderRadius: '2rem', padding: 'clamp(1.5rem, 4vw, 2.75rem) clamp(1.25rem, 4vw, 3rem)',
          background: 'rgba(255,255,255,0.6)',
          border: '1px solid rgba(121,174,111,0.22)',
          boxShadow: '0 16px 60px rgba(26,58,29,0.08)',
          display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2rem',
          justifyContent: 'space-between'
        }}>
          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
            <div style={{ color: 'var(--forest-light)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Our Commitment
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--forest)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
              Every dollar traceable,{' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>every deliverable verifiable</span>
            </h3>
            <p style={{ color: 'rgba(45,90,49,0.68)', lineHeight: 1.75, fontSize: '0.95rem', maxWidth: 480 }}>
              We build financial accountability into the structure of every program—not as a reporting add-on, but as a core delivery requirement.
            </p>
          </div>
          <div style={{ flex: '0 0 auto' }}>
            <a href="#funding-consultation"
              className="btn btn-forest"
              style={{ padding: '1rem 2.25rem', borderRadius: '1rem', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Discuss Your Program
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Consultation */}
    <section id="funding-consultation" data-reveal style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden', background: 'var(--forest-deep)' }}>
      {/* Aurora effect */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="aurora-blob aurora-a" />
        <div className="aurora-blob aurora-b" />
        <div className="aurora-blob aurora-c" />
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 1.25rem' }} className="contact-grid">
        <div className="contact-details">
          <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
            Funding & Accountability Division
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900, color: 'var(--cream)',
            lineHeight: 1.02, letterSpacing: '-0.02em', marginBottom: '1.25rem'
          }}>
            Let's discuss{' '}
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>your funding strategy</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(242,237,194,0.6)', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: 440 }}>
            Share your program scope and budget constraints. We'll propose a funding and accountability framework tailored to your environmental goals.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge" style={{ marginBottom: 0 }}>
              <span className="badge-dot" />
              Call: (844) 878-7347
            </span>
          </div>
        </div>
        <div className="contact-card">
          <ContactForm t={t}
            title="Request a consultation"
            subtitle="We typically respond within 24 hours."
            textareaLabel="Funding or Accountability Needs"
            textareaPlaceholder="Describe your financial planning, grant, or accountability requirements..."
          />
        </div>
      </div>
    </section>
  </section>
  );
};

export default FundingAndAccountabilityPage;
