import React, { useState, useEffect, useRef } from 'react';

const IconProject = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const IconMap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const IconDollar = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M9 9.5c0-1 1.5-2 3-2s3 .8 3 2c0 1.5-3 2-3 3.5 0 1 1.5 2 3 2s3-1 3-2" />
  </svg>
);
const IconHeart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const icons = [<IconProject />, <IconMap />, <IconDollar />, <IconHeart />];

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', desc: 'Across PFAS, clean energy & infrastructure' },
  { value: 12, suffix: '', label: 'States Served', desc: 'From Northeast to Southeast corridor' },
  { value: 2, prefix: '$', suffix: 'B+', label: 'Programs Managed', desc: 'In federal & state funded programs' },
  { value: 98, suffix: '%', label: 'Client Retention', desc: 'Long-term partnerships built on trust' },
];

const ProgressRing = ({ percent, started }) => {
  const r = 32;
  const circ = 2 * Math.PI * r;
  const offset = started ? circ * (1 - percent / 100) : circ;
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', opacity: 0.12, pointerEvents: 'none' }}>
      <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(159,203,152,0.15)" strokeWidth="2" />
      <circle cx="40" cy="40" r={r} fill="none" stroke="var(--mint)" strokeWidth="2.5"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        transform="rotate(-90 40 40)"
        style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.25,0.46,0.45,0.94)' }}
      />
    </svg>
  );
};

const Counter = ({ value, prefix = '', suffix = '', started }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame;
    const duration = 2000;
    const start = performance.now();
    const animate = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <span style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
      fontWeight: 900, color: 'var(--cream)',
      lineHeight: 1, letterSpacing: '-0.02em',
    }}>
      {prefix}{count}{suffix}
    </span>
  );
};

const AnimatedStats = () => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Map stats to ring percentages
  const ringPercents = [75, 24, 80, 98];

  return (
    <section ref={ref} data-reveal style={{
      position: 'relative', padding: '6rem 0', overflow: 'hidden',
      background: 'var(--forest-deep)',
    }}>
      {/* Background decorations */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(159,203,152,0.04) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '15%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,174,111,0.04) 0%, transparent 70%)' }} />
        {/* Horizontal line accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(159,203,152,0.08), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(159,203,152,0.08), transparent)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            By The Numbers
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900, color: 'var(--cream)', lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            Proven results,{' '}
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>measured impact</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem', textAlign: 'center',
        }}>
          {stats.map(({ value, prefix, suffix, label, desc }, i) => (
            <div key={label} style={{
              position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '2.5rem 1.5rem 2rem',
              background: 'rgba(159,203,152,0.03)',
              border: '1px solid rgba(159,203,152,0.08)',
              borderRadius: '1.5rem',
              transition: 'border-color 0.3s, background 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(159,203,152,0.2)'; e.currentTarget.style.background = 'rgba(159,203,152,0.06)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(159,203,152,0.08)'; e.currentTarget.style.background = 'rgba(159,203,152,0.03)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Progress ring behind icon */}
              <div style={{ position: 'relative', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ProgressRing percent={ringPercents[i]} started={started} />
                <div style={{ color: 'var(--mint)', opacity: 0.7 }}>{icons[i]}</div>
              </div>

              <Counter value={value} prefix={prefix} suffix={suffix} started={started} />

              <div style={{ marginTop: '0.6rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(159,203,152,0.6)' }}>
                {label}
              </div>

              {/* Short description */}
              <div style={{ marginTop: '0.5rem', height: 1, width: 32, background: 'linear-gradient(to right, transparent, rgba(159,203,152,0.2), transparent)' }} />
              <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: 'rgba(242,237,194,0.3)', lineHeight: 1.5, maxWidth: 180 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
