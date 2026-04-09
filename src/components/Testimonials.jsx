import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'JCrew brought structure and accountability to a program that had been stalled for over a year. Within 90 days, we had a clear path to delivery.',
    name: 'Director of Public Works',
    org: 'Mid-Atlantic Municipality',
  },
  {
    quote: 'Their PFAS response coordination saved us months of regulatory back-and-forth. The documentation they produced was audit-ready from day one.',
    name: 'Environmental Compliance Officer',
    org: 'Regional Water Authority',
  },
  {
    quote: 'We needed someone who understood both the engineering and the politics. JCrew navigated both with precision and delivered on every milestone.',
    name: 'County Administrator',
    org: 'Northeast County Government',
  },
  {
    quote: 'The clean energy feasibility work they did for our wastewater plant opened up $12M in federal funding we didn\'t know we were eligible for.',
    name: 'Utility Manager',
    org: 'Municipal Wastewater Authority',
  },
  {
    quote: 'What sets JCrew apart is execution. They don\'t just recommend—they manage the full delivery. Our board finally has confidence in the program timeline.',
    name: 'Executive Director',
    org: 'State Environmental Agency',
  },
];

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(159,203,152,0.2)" stroke="none">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section data-reveal style={{
      position: 'relative', padding: '6rem 0', overflow: 'hidden',
      background: 'linear-gradient(180deg, rgba(26,58,29,0.03) 0%, rgba(26,58,29,0.08) 100%)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <div style={{ color: 'var(--sage)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          What our clients say
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 900, color: 'var(--forest)', lineHeight: 1.1,
          letterSpacing: '-0.02em', marginBottom: '3rem',
        }}>
          Trusted by agencies{' '}
          <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>across the nation</span>
        </h2>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: 'relative', minHeight: 240 }}
        >
          {testimonials.map((t, i) => (
            <div key={i} style={{
              position: i === active ? 'relative' : 'absolute',
              top: 0, left: 0, width: '100%',
              opacity: i === active ? 1 : 0,
              transform: i === active ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
              pointerEvents: i === active ? 'auto' : 'none',
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <QuoteIcon />
              </div>
              <p style={{
                fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
                color: 'rgba(45,90,49,0.8)', lineHeight: 1.8, fontStyle: 'italic',
                marginBottom: '1.5rem', maxWidth: 620, margin: '0 auto 1.5rem',
              }}>
                "{t.quote}"
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--forest)' }}>{t.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(45,90,49,0.5)', marginTop: '0.2rem' }}>{t.org}</div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 24 : 8, height: 8, borderRadius: 4,
                background: i === active ? 'var(--sage)' : 'rgba(121,174,111,0.25)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
