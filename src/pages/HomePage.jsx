import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IconArrowRight, IconGear, IconCoin, IconClipboard, IconScale, IconMapPin, IconPhone, IconMail } from '../components/icons';

import heroVideo from '../assets/Hero-Home-small.mp4';
import rainwaterCollectionImg from '../assets/rainwatercollection.webp';
import irrigation2Img from '../assets/irrigation2.jpg';
import wastewaterImg from '../assets/wastewater1.webp';
import riverImg from '../assets/river1.webp';
import segregationImg from '../assets/segregation.webp';
import recyclingImg from '../assets/recycling1.webp';
import puzzleImg from '../assets/puzzle.jpg';
import waterCupImg from '../assets/watercup.jpg';

// ── Hero ───────────────────────────────────────────────────────────────────────
const Hero = ({ t }) => (
  <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.94) 0%, rgba(45,90,49,0.62) 50%, rgba(26,58,29,0.38) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, var(--cream) 100%)' }} />
    </div>

    <div className="ambient" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
    </div>

    <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '8rem' }}>
      <div className="fade-up-1" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: 'rgba(159,203,152,0.12)', border: '1px solid rgba(159,203,152,0.25)',
        borderRadius: '999px', padding: '0.35rem 1rem', marginBottom: '1.75rem'
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--mint)', animation: 'pulse 2s infinite', flexShrink: 0 }} />
        <span style={{ color: 'var(--mint)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
          Environmental Program Management
        </span>
      </div>

      <h1 className="fade-up-2" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
        fontWeight: 900, color: 'var(--cream)',
        lineHeight: 0.93, letterSpacing: '-0.025em',
        marginBottom: '1.75rem'
      }}>
        {t.heroTitle1}{' '}
        <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>{t.heroTitle2}</span>
      </h1>

      <p className="fade-up-3" style={{
        fontSize: '1.15rem', color: 'rgba(242,237,194,0.75)',
        maxWidth: '560px', lineHeight: 1.75, fontWeight: 300, marginBottom: '2.75rem'
      }}>
        {t.heroSub}
      </p>

      <div className="fade-up-4 hero-actions">
        <a href="#contact" className="btn btn-primary">
          {t.consultation}
          <IconArrowRight size={16} />
        </a>
        <a href="#sectors" className="btn btn-ghost">
          {t.sectors} ↓
        </a>
      </div>

      {/* Scroll hint */}
      <div className="fade-up-4" style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(159,203,152,0.5))' }} />
        <span style={{ color: 'rgba(242,237,194,0.4)', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Scroll to explore</span>
      </div>
    </div>
  </header>
);

// ── Sectors Carousel ───────────────────────────────────────────────────────────
const Sectors = ({ t }) => {
  const sectorData = [
    { title: "Rainwater harvesting", img: rainwaterCollectionImg, desc: "Capture and storage planning that reduces runoff impacts and supports resilient site operations.", tag: "Stormwater" },
    { title: "Efficient irrigation systems", img: irrigation2Img, desc: "Water-efficient irrigation upgrades that reduce demand, optimize distribution, and improve reliability.", tag: "Efficiency" },
    { title: "Wastewater treatment and reuse", img: wastewaterImg, desc: "Treatment, reuse, and discharge support—built around compliance, monitoring, and practical operations.", tag: "Reuse" },
    { title: "Protecting rivers and watersheds", img: riverImg, desc: "Watershed protection programs that strengthen monitoring, remediation planning, and community outcomes.", tag: "Watershed" },
    { title: "Waste segregation systems", img: segregationImg, desc: "Segregation planning and site workflows that improve safety, compliance, and downstream processing.", tag: "Materials" },
    { title: "Recycling and composting", img: recyclingImg, desc: "Program support that improves diversion performance, reduces contamination, and clarifies reporting.", tag: "Diversion" }
  ];

  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const containerRef = useRef(null);
  const autoRef = useRef(null);

  const getSlidesVisible = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [slidesVisible, setSlidesVisible] = useState(getSlidesVisible());
  const maxIndex = Math.max(0, sectorData.length - slidesVisible);

  useEffect(() => {
    const onResize = () => setSlidesVisible(getSlidesVisible());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goTo = useCallback((idx) => setCurrent(Math.max(0, Math.min(idx, maxIndex))), [maxIndex]);

  useEffect(() => {
    autoRef.current = setInterval(() => setCurrent(prev => prev >= maxIndex ? 0 : prev + 1), 4200);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setCurrent(prev => prev >= maxIndex ? 0 : prev + 1), 4200);
  };

  const onPointerDown = (e) => { setIsDragging(true); setStartX(e.clientX ?? e.touches?.[0]?.clientX); setDragDelta(0); clearInterval(autoRef.current); };
  const onPointerMove = (e) => { if (!isDragging) return; setDragDelta((e.clientX ?? e.touches?.[0]?.clientX) - startX); };
  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -60) goTo(current + 1);
    else if (dragDelta > 60) goTo(current - 1);
    setDragDelta(0); resetAuto();
  };

  const onCarouselKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); resetAuto(); }
  };

  const GAP = 16;
  const slideWidthPct = slidesVisible === 1 ? 88 : slidesVisible === 2 ? 50 : 33.333;
  const translateX = `calc(-${current * (slideWidthPct + (GAP / (containerRef.current?.offsetWidth || 1000)) * 100)}% + ${dragDelta}px)`;

  return (
    <section id="sectors" data-reveal style={{ padding: '8rem 0 7rem', background: 'var(--cream)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ color: 'var(--forest-light)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
              Our Service Areas
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 900, lineHeight: 1,
              color: 'var(--forest)', letterSpacing: '-0.025em'
            }}>
              {t.sectorsTitle1}{' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>{t.sectorsTitle2}</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(45,90,49,0.62)', maxWidth: '500px', lineHeight: 1.65 }}>{t.sectorsSub}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', alignSelf: 'flex-end' }}>
            {[[-1, '←', 'Previous'], [1, '→', 'Next']].map(([dir, arrow, label]) => (
              <button key={dir} onClick={() => { goTo(current + dir); resetAuto(); }}
                disabled={dir === -1 ? current === 0 : current >= maxIndex}
                aria-label={label}
                style={{
                  width: 50, height: 50, borderRadius: '50%',
                  border: '2px solid var(--forest)',
                  background: (dir === 1 && current < maxIndex) ? 'var(--forest)' : 'transparent',
                  color: (dir === 1 && current < maxIndex) ? 'var(--cream)' : 'var(--forest)',
                  fontSize: '1.15rem', cursor: 'pointer',
                  opacity: (dir === -1 && current === 0) || (dir === 1 && current >= maxIndex) ? 0.25 : 1,
                  transition: 'all 0.25s ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >{arrow}</button>
            ))}
          </div>
        </div>

        <div
          ref={containerRef}
          style={{ overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
          role="region" aria-label="Sectors carousel" tabIndex={0}
          onKeyDown={onCarouselKeyDown}
          onMouseDown={onPointerDown} onMouseMove={onPointerMove} onMouseUp={onPointerUp} onMouseLeave={onPointerUp}
          onTouchStart={onPointerDown} onTouchMove={onPointerMove} onTouchEnd={onPointerUp}
        >
          <div className="carousel-track" style={{ gap: `${GAP}px`, transform: `translateX(${translateX})`, transition: isDragging ? 'none' : 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
            {sectorData.map((s, i) => (
              <div key={i} className="carousel-slide">
                <div className="sector-card">
                  <img src={s.img} alt={s.title} draggable={false} loading="lazy" decoding="async" />
                  <div className="sector-card-overlay" />
                  <div style={{
                    position: 'absolute', top: '1.25rem', left: '1.25rem',
                    background: 'rgba(242,237,194,0.15)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(242,237,194,0.2)',
                    color: 'var(--cream)', fontSize: '0.58rem', fontWeight: 700,
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    padding: '0.28rem 0.75rem', borderRadius: '999px'
                  }}>{s.tag}</div>
                  <div className="sector-card-content">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{s.title}</h3>
                    <div className="sector-card-desc">
                      <p style={{ fontSize: '0.85rem', color: 'var(--mint)', lineHeight: 1.6 }}>{s.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2.5rem', alignItems: 'center' }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetAuto(); }} aria-label={`Go to slide ${i + 1}`}
              style={{
                height: 8, width: i === current ? 32 : 8,
                borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === current ? 'var(--forest)' : 'rgba(45,90,49,0.2)',
                transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)', padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Strategy ───────────────────────────────────────────────────────────────────
const Strategy = ({ t }) => (
  <section id="pfas-response" data-reveal style={{ padding: '8rem 0', background: 'var(--forest-deep)', position: 'relative', overflow: 'hidden' }}>
    {/* Background puzzle image */}
    <div style={{ position: 'absolute', left: 0, top: '5%', width: '45%', height: '90%', zIndex: 1, opacity: 0.12, pointerEvents: 'none' }}>
      <img src={puzzleImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'left center', filter: 'grayscale(100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, var(--forest-deep) 75%)' }} />
    </div>

    {/* Glow orb */}
    <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(121,174,111,0.1) 0%, transparent 70%)', top: '-200px', right: '-200px', pointerEvents: 'none', zIndex: 0 }} />

    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
      <div className="section-split">
        <div className="image-spacer" />
        <div className="content-block">
          <div style={{ color: 'var(--mint)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.8 }}>
            Our Integrated Approach
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
            fontWeight: 900, lineHeight: 1.08,
            color: 'var(--cream)', marginBottom: '1.5rem', letterSpacing: '-0.025em'
          }}>
            {t.strategyTitle1}{' '}
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>{t.strategyTitle2}</span>{t.strategyTitle3}
          </h2>
          <p style={{ fontSize: '1.08rem', color: 'rgba(242,237,194,0.65)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
            {t.strategySub}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1.15rem' }}>
            {[
              ['Technical', 'Investigation & Engineering Oversight', <IconGear />],
              ['Financial', 'Funding Strategy & Procurement Support', <IconCoin />],
              ['Regulatory', 'Compliance, Reporting & Public Records', <IconClipboard />],
              ['Legal', 'Audit-Ready, Defensible Documentation', <IconScale />]
            ].map(([title, sub, icon]) => (
              <div key={title} className="stat-card">
                <div style={{ marginBottom: '0.75rem', display: 'flex' }}>{icon}</div>
                <div style={{ color: 'var(--mint)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.3rem' }}>{title}</div>
                <div style={{ color: 'rgba(242,237,194,0.45)', fontSize: '0.78rem', lineHeight: 1.6 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── Contact ────────────────────────────────────────────────────────────────────
const Contact = ({ t }) => (
  <section id="contact" data-reveal style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '7rem 2rem', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <img src={waterCupImg} alt="" className="animate-slow-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(115deg, rgba(26,58,29,0.97) 0%, rgba(45,90,49,0.8) 50%, rgba(26,58,29,0.55) 100%)' }} />
    </div>

    <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', width: '100%' }} className="contact-grid">
      <div className="contact-details">
        <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
          Start a conversation
        </div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 900, color: 'var(--cream)',
          lineHeight: 0.92, letterSpacing: '-0.03em', marginBottom: '2rem'
        }}>
          {t.contactTitle.split(' ').map((word, i) => (
            <span key={i} style={{ display: 'block' }}>{word}</span>
          ))}
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(242,237,194,0.6)', lineHeight: 1.75, fontWeight: 300, maxWidth: '380px', marginBottom: '2.5rem' }}>
          Clear scope. Clear documentation. Clear delivery—so your environmental program holds up in the field and on the record.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            [<IconMapPin />, '103 Rotary Drive, West Hazleton, PA'],
            [<IconPhone />, '(844) 878-7347'],
            [<IconMail />, 'info@jcrew-env.com']
          ].map(([icon, val]) => (
            <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: 'rgba(242,237,194,0.55)', fontSize: '0.88rem' }}>
              <span style={{ display: 'flex', opacity: 0.65, flexShrink: 0 }}>{icon}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-card">
        <div style={{
          background: 'rgba(26,58,29,0.55)', backdropFilter: 'blur(24px)',
          border: '1px solid rgba(159,203,152,0.15)', borderRadius: '2rem',
          padding: '2.5rem', boxShadow: '0 24px 60px rgba(0,0,0,0.4)'
        }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.4rem', fontWeight: 700 }}>Send a Request</h3>
          <p style={{ fontSize: '0.82rem', color: 'rgba(242,237,194,0.38)', marginBottom: '2rem' }}>We typically respond within 24 hours.</p>
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
              <label style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>Assistance Required</label>
              <textarea rows={4} placeholder="Briefly describe your environmental or PFAS challenge..." className="form-input" style={{ resize: 'none' }} />
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
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ── HomePage ───────────────────────────────────────────────────────────────────
const HomePage = ({ t }) => (
  <>
    <Hero t={t} />
    <Sectors t={t} />
    <Strategy t={t} />
    <Contact t={t} />
  </>
);

export default HomePage;
