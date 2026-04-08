import React, { useState, useEffect, useCallback } from 'react';

const Navbar = ({ t, forceSolid = false, activeRoute = '', activeSection = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const basePixelSize = 40;
  const textTitleSize = 1.25;
  const textSubSize = 0.6;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrolled = forceSolid || isScrolled;

  const goHomeAndScroll = useCallback((id) => (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (window.location.hash !== '') window.location.hash = '';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isActive = useCallback((href) => {
    if (href === '#') return activeRoute === '';
    if (href.startsWith('#/')) return activeRoute === href.slice(1);
    if (href === '#sectors') return activeRoute === '' && activeSection === 'sectors';
    if (href === '#pfas-response') return activeRoute === '' && activeSection === 'pfas-response';
    if (href === '#contact') return activeRoute === '' && activeSection === 'contact';
    return false;
  }, [activeRoute, activeSection]);

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prev || '';
    return () => { document.body.style.overflow = prev || ''; };
  }, [mobileOpen]);

  const navLinks = [
    ['#', t.home],
    ['#/clean-energy-vision', t.cleanEnergyVision],
    ['#/pfas-response-division', 'PFAS Response Division'],
    ['#/how-we-work', 'How We Work'],
    ['#/funding-and-accountability', 'Funding & Accountability'],
  ];

  return (
    <>
      {mobileOpen && <div className="mobile-nav-overlay" onClick={closeMobile} />}
      {mobileOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-panel" id="mobile-nav" role="dialog" aria-label="Mobile navigation">
            <div className="mobile-nav-links">
              {navLinks.map(([href, label]) => (
                <a key={href} href={href} onClick={closeMobile} className={isActive(href) ? 'mobile-active' : ''}>{label}</a>
              ))}
              <div className="mobile-nav-divider" />
              <a href="#contact" onClick={goHomeAndScroll('contact')} className={isActive('#contact') ? 'mobile-active' : ''}>{t.getStarted}</a>
            </div>
          </div>
        </div>
      )}

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
        background: scrolled ? 'rgba(242,237,194,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 30px rgba(45,90,49,0.12)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(121,174,111,0.2)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="navbar-inner">
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div style={{ width: basePixelSize, height: basePixelSize, flexShrink: 0 }}>
              <img src="/logo.png" alt="JCrew Environmental Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <div style={{
                fontSize: `${textTitleSize}rem`,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700, lineHeight: 1,
                color: scrolled ? 'var(--forest-deep)' : 'white',
                transition: 'color 0.3s'
              }}>JCrew</div>
              <div style={{
                fontSize: `${textSubSize}rem`,
                textTransform: 'uppercase', letterSpacing: '0.35em',
                fontWeight: 600, marginTop: '2px',
                color: scrolled ? 'var(--forest-light)' : 'rgba(159,203,152,0.9)',
                transition: 'color 0.3s'
              }}>Environmental</div>
            </div>
          </a>

          <div className="navbar-actions">
            {/* Mobile toggle */}
            <button
              type="button"
              className={`nav-toggle ${mobileOpen ? 'nav-toggle-open' : ''}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <span className="nav-toggle-lines" aria-hidden="true">
                <span /><span /><span />
              </span>
            </button>

            {/* Desktop links */}
            <div className="navbar-links">
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMobile}
                  className={`nav-link ${isActive(href) ? 'nav-link-active' : ''}`}
                  style={{ color: scrolled ? 'var(--forest)' : 'rgba(242,237,194,0.9)', textDecoration: 'none' }}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <a
              href="#contact"
              onClick={goHomeAndScroll('contact')}
              className="btn nav-get-started"
              style={{
                background: scrolled ? 'var(--forest)' : 'rgba(255,255,255,0.15)',
                backdropFilter: scrolled ? 'none' : 'blur(8px)',
                color: scrolled ? 'var(--cream)' : 'var(--cream)',
                border: scrolled ? 'none' : '1px solid rgba(255,255,255,0.25)',
                padding: '0.65rem 1.75rem', borderRadius: '999px',
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', textDecoration: 'none',
                boxShadow: scrolled ? '0 4px 20px rgba(45,90,49,0.35)' : 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
            >{t.getStarted}</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
