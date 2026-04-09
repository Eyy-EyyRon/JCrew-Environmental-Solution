import React, { useEffect } from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

import heroHowVideo from '../assets/Hero-How-small.mp4';
import cityCleanImg from '../assets/were-here-to-keep-your-city-clean.webp';

const phases = [
  { num: '01', title: 'Discovery & Scoping', desc: 'We clarify goals, constraints, stakeholders, and compliance requirements before any field work begins. This phase produces a shared understanding and a written scope that everyone can act from.' },
  { num: '02', title: 'Program Design', desc: 'We structure the work into phased deliverables with clear decision points, budgets, and accountability. Every program has a defined pathway from start to defensible completion.' },
  { num: '03', title: 'Execution & Coordination', desc: 'We manage procurement, contractors, reporting, and stakeholder communication throughout delivery. Nothing falls through the cracks—we are accountable for the whole.' },
  { num: '04', title: 'Documentation & Handoff', desc: 'We compile audit-ready records, operational guidance, and continuity plans for long-term success. Programs that are well-documented are defensible, fundable, and operable.' },
];

const capabilities = [
  {
    title: 'Technical Oversight',
    desc: 'Engineering review, QA/QC coordination, and field accountability. We ensure the technical work is sound and documented.',
    accent: '#9fcb98',
  },
  {
    title: 'Financial Planning',
    desc: 'Grant alignment, capital planning, and procurement support. We build programs that are financially executable—not just technically feasible.',
    accent: '#79ae6f',
  },
  {
    title: 'Regulatory Navigation',
    desc: 'Permitting, compliance reporting, and public records. We translate regulatory requirements into project milestones and keep agencies informed.',
    accent: '#9fcb98',
  },
  {
    title: 'Stakeholder Management',
    desc: 'Community engagement, agency coordination, and transparency. We communicate clearly and early so programs don\'t stall on stakeholder friction.',
    accent: '#79ae6f',
  },
];

const principles = [
  'Scope drives every decision—ambiguity is resolved before procurement begins',
  'Accountability is documented, not assumed—every role has a deliverable',
  'Reporting is built into execution, not added at the end',
  'Programs are structured to be defensible in audits and public records',
];

const HowWeWorkPage = ({ t }) => {
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
      videoSrc={heroHowVideo}
      eyebrow1="Our"
      eyebrow2="Approach"
      titlePlain="How"
      titleItalic="We Work"
      description="JCrew Environmental Solution delivers environmental programs through clear scope, coordinated execution, and defensible documentation—so your infrastructure and compliance work holds up from planning through operations."
    />

    {/* Four phases */}
    <section data-reveal style={{ padding: '7rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative', borderRadius: '2.25rem', overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.2)',
          boxShadow: '0 24px 80px rgba(26,58,29,0.18)',
          backgroundImage: `url(${cityCleanImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: 520, display: 'flex',
        }}>
          {/* Subtle full-bg overlay — image visible everywhere */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,29,0.52)' }} />
          {/* Left-side legibility gradient */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,58,29,0.68) 0%, rgba(26,58,29,0.22) 55%, rgba(26,58,29,0) 100%)' }} />
          <div className="card-text-right" style={{ position: 'relative', zIndex: 2, padding: '3.5rem 3.25rem', width: '62%', minWidth: 320 }}>
            <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
              Program Delivery Framework
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 900, lineHeight: 1.05, color: 'var(--cream)',
              letterSpacing: '-0.02em', marginBottom: '2.5rem'
            }}>
              Four phases of{' '}
              <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>program delivery</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {phases.map(({ num, title, desc }) => (
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

    {/* Core capabilities */}
    <section data-reveal style={{ padding: '0 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '2.25rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--forest)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Core capabilities
          </h3>
          <p style={{ color: 'rgba(45,90,49,0.62)', fontSize: '1rem', lineHeight: 1.65, maxWidth: 560 }}>
            Four practice areas that work together to deliver complete, defensible environmental programs.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {capabilities.map(({ title, desc, accent }) => (
            <div key={title} className="slide-card slide-card-light" style={{ borderTop: `3px solid ${accent}` }}>
              <div style={{ color: 'var(--forest)', fontWeight: 800, fontSize: '1.08rem', marginBottom: '0.65rem', letterSpacing: '0.01em' }}>{title}</div>
              <p style={{ color: 'rgba(45,90,49,0.7)', lineHeight: 1.75, fontSize: '0.93rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Guiding principles */}
    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          borderRadius: '2rem', overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-deep) 100%)',
          border: '1px solid rgba(159,203,152,0.12)',
          padding: '3rem 3.25rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', flexWrap: 'wrap', alignItems: 'start' }}>
            <div>
              <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
                How We Think
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', color: 'var(--cream)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Principles that{' '}
                <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>guide delivery</span>
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {principles.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', paddingBottom: '1rem', borderBottom: i < principles.length - 1 ? '1px solid rgba(159,203,152,0.1)' : 'none' }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(159,203,152,0.12)', border: '1px solid rgba(159,203,152,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <span style={{ color: 'var(--mint)', fontSize: '0.7rem', fontWeight: 900 }}>{i + 1}</span>
                  </div>
                  <p style={{ color: 'rgba(242,237,194,0.72)', lineHeight: 1.7, fontSize: '0.95rem' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Consultation */}
    <section id="how-consultation" data-reveal style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden', background: 'var(--forest-deep)' }}>
      {/* Aurora effect */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div className="aurora-blob aurora-a" />
        <div className="aurora-blob aurora-b" />
        <div className="aurora-blob aurora-c" />
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
            Ready to get started?
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900, color: 'var(--cream)',
            lineHeight: 1.02, letterSpacing: '-0.02em', marginBottom: '1.25rem'
          }}>
            Ready to{' '}
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>work together?</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(242,237,194,0.6)', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: 440 }}>
            Share your program scope, timeline, and constraints. We'll propose a clear approach and next steps—no obligation.
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
            title="Start a conversation"
            subtitle="We typically respond within 24 hours."
            textareaLabel="Tell us about your program"
            textareaPlaceholder="Describe your environmental or infrastructure program..."
          />
        </div>
      </div>
    </section>
  </section>
  );
};

export default HowWeWorkPage;
