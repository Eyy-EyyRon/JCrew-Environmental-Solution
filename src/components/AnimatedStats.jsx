import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 12, suffix: '', label: 'States Served' },
  { value: 2, prefix: '$', suffix: 'B+', label: 'Programs Managed' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

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

  return (
    <section ref={ref} data-reveal style={{
      position: 'relative', padding: '5rem 0', overflow: 'hidden',
      background: 'var(--forest-deep)',
    }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem', textAlign: 'center',
        }}>
          {stats.map(({ value, prefix, suffix, label }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <Counter value={value} prefix={prefix} suffix={suffix} started={started} />
              <div style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'rgba(159,203,152,0.6)',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
