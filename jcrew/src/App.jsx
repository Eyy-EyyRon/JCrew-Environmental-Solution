import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Assets Imports
import heroVideo from './assets/Hero-Home-small.mp4';
import airportImg from './assets/airports.jpg';
import businessImg from './assets/business.jpg';
import columnImg from './assets/column.jpg';
import energyImg from './assets/energy.jpg';
import fireImg from './assets/firefighter.jpg';
import municipalImg from './assets/Municipal.jpg';
import drinkingImg from './assets/Public-drinking.jpg';
import puzzleImg from './assets/puzzle.jpg';
import waterCupImg from './assets/watercup.jpg';

// --- TRANSLATIONS ---
const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    insights: "Insights",
    sectors: "Sectors",
    pfas: "PFAS Response",
    getStarted: "Get Started",
    heroTitle1: "J Crew",
    heroTitle2: "Response.",
    heroSub: "Coordinating regulatory, financial, and technical execution for the nation's most complex environmental challenges.",
    consultation: "Request Consultation",
    sectorsTitle1: "Sectors of",
    sectorsTitle2: "Impact.",
    sectorsSub: "Specialized response coordination across critical infrastructure and public safety sectors.",
    strategyTitle1: "Piecing together the",
    strategyTitle2: "Accountability",
    strategyTitle3: "puzzle.",
    strategySub: "Environmental obligations aren't just technical—they are financial and legal.  integrates these disparate pieces into a single, defensible program.",
    contactTitle: "Let's begin the conversation.",
    submit: "Submit Request"
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    insights: "Recursos",
    sectors: "Sectores",
    pfas: "Respuesta PFAS",
    getStarted: "Empezar",
    heroTitle1: "Respuesta",
    heroTitle2: "Integrada.",
    heroSub: "Coordinando la ejecución regulatoria, financiera y técnica para los desafíos ambientales más complejos de la nación.",
    consultation: "Solicitar Consulta",
    sectorsTitle1: "Sectores de",
    sectorsTitle2: "Impacto.",
    sectorsSub: "Coordinación especializada de respuestas en infraestructura crítica y sectores de seguridad pública.",
    strategyTitle1: "Armando el rompecabezas de la",
    strategyTitle2: "Responsabilidad.",
    strategyTitle3: "",
    strategySub: "Las obligaciones ambientales no son solo técnicas, son financieras y legales.  integra estas piezas dispares en un programa único y defendible.",
    contactTitle: "Comencemos la conversación.",
    submit: "Enviar Solicitud"
  }
};

// --- SVG ICONS ---
const IconGear = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

const SkeletonHome = () => (
  <div style={{ background: 'var(--cream)' }}>
    <section style={{ padding: '9rem 0 4rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="skeleton" style={{ height: 18, width: 160, borderRadius: 999, marginBottom: 18 }} />
        <div className="skeleton" style={{ height: 66, width: 'min(680px, 92%)', marginBottom: 14 }} />
        <div className="skeleton" style={{ height: 66, width: 'min(520px, 78%)', marginBottom: 24 }} />
        <div className="skeleton" style={{ height: 18, width: 'min(560px, 92%)', marginBottom: 10 }} />
        <div className="skeleton" style={{ height: 18, width: 'min(460px, 82%)', marginBottom: 26 }} />
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <div className="skeleton" style={{ height: 52, width: 220, borderRadius: 18 }} />
          <div className="skeleton" style={{ height: 52, width: 220, borderRadius: 18 }} />
        </div>
      </div>
    </section>

    <section style={{ padding: '2rem 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="skeleton" style={{ height: 38, width: 'min(420px, 70%)', marginBottom: 18 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="skeleton" style={{ height: 320, borderRadius: 24 }} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

const SkeletonPage = () => (
  <section style={{ padding: '9rem 0 6rem', background: 'var(--cream)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
      <div className="skeleton" style={{ height: 60, width: 'min(520px, 85%)', marginBottom: 16 }} />
      <div className="skeleton" style={{ height: 1, width: '100%', borderRadius: 999, margin: '1.25rem 0 2.5rem' }} />
      <div className="skeleton" style={{ height: 18, width: 'min(720px, 92%)', marginBottom: 10 }} />
      <div className="skeleton" style={{ height: 18, width: 'min(660px, 86%)', marginBottom: 10 }} />
      <div className="skeleton" style={{ height: 18, width: 'min(520px, 72%)', marginBottom: 22 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton" style={{ height: 120, borderRadius: 20 }} />
        ))}
      </div>
    </div>
  </section>
);

const IconCoin = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v2M12 16v2M9.5 9.5c0-1.1.9-2 2.5-2s2.5.9 2.5 2-1.12 2-2.5 2-2.5.9-2.5 2 .9 2 2.5 2 2.5-.9 2.5-2"/>
  </svg>
);

const IconClipboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="15" y2="16"/>
  </svg>
);

const IconScale = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21"/>
    <path d="M3 9l9-6 9 6"/>
    <path d="M5 12l-2 5h6l-2-5"/>
    <path d="M19 12l-2 5h6l-2-5"/>
    <line x1="5" y1="21" x2="19" y2="21"/>
  </svg>
);

const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconArrowRight = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

// --- INJECT STYLES ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --forest: #2d5a31;
      --forest-deep: #1a3a1d;
      --forest-light: #4a7c50;
      --sage: #79ae6f;
      --mint: #9fcb98;
      --cream: #f2edc2;
      --cream-warm: #ede8b8;
      --white-glass: rgba(242,237,194,0.06);
      --white-glass-hover: rgba(242,237,194,0.12);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--cream);
      color: var(--forest-deep);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    .navbar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .navbar-links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      flex-wrap: wrap;
    }

    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .nav-toggle {
      display: none;
      width: 44px;
      height: 44px;
      border-radius: 999px;
      border: 1px solid rgba(121,174,111,0.35);
      background: rgba(242,237,194,0.12);
      cursor: pointer;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .nav-toggle:hover { background: rgba(242,237,194,0.18); }
    .nav-toggle:active { transform: scale(0.98); }

    .nav-toggle-lines {
      width: 18px;
      height: 12px;
      position: relative;
    }
    .nav-toggle-lines span {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--forest);
      border-radius: 999px;
      transition: transform 0.22s ease, top 0.22s ease, opacity 0.22s ease;
    }
    .nav-toggle-lines span:nth-child(1) { top: 0; }
    .nav-toggle-lines span:nth-child(2) { top: 5px; }
    .nav-toggle-lines span:nth-child(3) { top: 10px; }
    .nav-toggle-open .nav-toggle-lines span:nth-child(1) { top: 5px; transform: rotate(45deg); }
    .nav-toggle-open .nav-toggle-lines span:nth-child(2) { opacity: 0; }
    .nav-toggle-open .nav-toggle-lines span:nth-child(3) { top: 5px; transform: rotate(-45deg); }

    .mobile-nav {
      display: none;
      position: fixed;
      left: 0;
      right: 0;
      top: 72px;
      z-index: 120;
      padding: 0 1rem 1rem;
    }

    .mobile-nav-panel {
      background: rgba(242,237,194,0.98);
      border: 1px solid rgba(121,174,111,0.25);
      border-radius: 1.25rem;
      box-shadow: 0 20px 60px rgba(26,58,29,0.18);
      backdrop-filter: blur(14px);
      overflow: hidden;
    }

    .mobile-nav-links {
      display: flex;
      flex-direction: column;
      padding: 0.75rem;
    }

    .mobile-nav-links a {
      padding: 0.95rem 1rem;
      border-radius: 1rem;
      text-decoration: none;
      color: var(--forest);
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      background: transparent;
      transition: background 0.2s ease;
    }

    .mobile-nav-links a:hover { background: rgba(121,174,111,0.12); }

    .mobile-nav-links a.mobile-active {
      background: rgba(121,174,111,0.14);
      border: 1px solid rgba(121,174,111,0.25);
    }

    .mobile-nav-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(121,174,111,0.35), transparent);
      margin: 0.25rem 0.75rem;
    }

    .mobile-nav-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.35);
      z-index: 110;
    }

    /* Skeleton loading */
    .skeleton {
      position: relative;
      overflow: hidden;
      background: rgba(45,90,49,0.08);
      border-radius: 1rem;
    }
    .skeleton::after {
      content: '';
      position: absolute;
      inset: 0;
      transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, rgba(242,237,194,0.55), transparent);
      animation: shimmer 1.2s infinite;
    }
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }

    .hero-inner { max-width: 780px; }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .section-split {
      display: flex;
      gap: 5rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .image-spacer {
      flex: 1 1 400px;
      min-height: 300px;
    }

    .content-block {
      flex: 1 1 500px;
    }

    .contact-grid {
      display: flex;
      gap: 5rem;
      align-items: center;
      flex-wrap: wrap;
    }

    .contact-details {
      flex: 1 1 380px;
      min-width: 280px;
    }

    .contact-card {
      flex: 1 1 420px;
      min-width: 280px;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    @media (max-width: 1024px) {
      .navbar-links { gap: 1.5rem; }
      .section-split { gap: 3rem; }
      .contact-grid { gap: 2.5rem; }
    }

    @media (max-width: 768px) {
      nav { padding: 0.9rem 0; }
      .mobile-nav { top: 88px; }
      .page-shell { padding-top: 11.75rem !important; }
      .page-title { font-size: clamp(2.25rem, 9vw, 3.4rem) !important; }
      .navbar-inner {
        flex-direction: row;
        align-items: center;
      }
      .navbar-links {
        display: none;
      }
      .navbar-actions {
        width: auto;
        justify-content: flex-end;
      }
      .nav-toggle { display: inline-flex; }
      .mobile-nav { display: block; }
      .mobile-nav-overlay { display: block; }
      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }
      .section-split {
        flex-direction: column;
        gap: 2rem;
      }
      .image-spacer { display: none; }
      .contact-grid {
        flex-direction: column;
        gap: 2rem;
      }
      .contact-details,
      .contact-card {
        width: 100%;
      }
      .footer-inner { justify-content: flex-start; }
      .sector-card { min-height: 420px; }
    }

    @media (max-width: 520px) {
      .navbar-links { gap: 0.8rem; }
      .navbar-actions { gap: 0.75rem; }
      .hero-actions a { width: 100%; justify-content: center; }
      .hero-actions a:last-child { justify-content: center; }
      .footer-inner { text-align: left; }
    }

    /* Carousel */
    .carousel-track {
      display: flex;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      will-change: transform;
    }

    .carousel-slide {
      flex: 0 0 calc(33.333% - 1.33rem);
      min-width: calc(33.333% - 1.33rem);
    }

    @media (max-width: 1024px) {
      .carousel-slide {
        flex: 0 0 calc(50% - 1rem);
        min-width: calc(50% - 1rem);
      }
    }

    @media (max-width: 640px) {
      .carousel-slide {
        flex: 0 0 calc(88% - 0rem);
        min-width: calc(88% - 0rem);
      }
    }

    /* Dot animations */
    .dot-active {
      width: 2rem !important;
      background: var(--forest) !important;
    }

    /* Hero text reveal */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up-1 { animation: fadeUp 0.8s ease both 0.2s; }
    .fade-up-2 { animation: fadeUp 0.8s ease both 0.45s; }
    .fade-up-3 { animation: fadeUp 0.8s ease both 0.7s; }
    .fade-up-4 { animation: fadeUp 0.8s ease both 0.95s; }

    /* Slow zoom on contact bg */
    @keyframes slowZoom {
      from { transform: scale(1); }
      to   { transform: scale(1.06); }
    }
    .animate-slow-zoom {
      animation: slowZoom 20s ease-in-out infinite alternate;
    }

    /* Pill badge */
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 1rem;
      border-radius: 999px;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      border: 1px solid rgba(159,203,152,0.4);
      background: rgba(159,203,152,0.12);
      color: var(--mint);
      margin-bottom: 1.5rem;
    }

    .badge-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--mint);
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.5; transform: scale(0.7); }
    }

    /* Card hover */
    .sector-card {
      position: relative;
      border-radius: 1.5rem;
      overflow: hidden;
      aspect-ratio: 3/4;
      cursor: pointer;
      transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    }
    .sector-card:hover {
      transform: translateY(-6px) scale(1.015);
      box-shadow: 0 20px 60px rgba(45,90,49,0.35);
    }
    .sector-card img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.7s ease;
    }
    .sector-card:hover img { transform: scale(1.08); }

    .sector-card-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(26,58,29,0.97) 0%, rgba(26,58,29,0.4) 55%, transparent 100%);
      transition: opacity 0.35s;
    }
    .sector-card-content {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 2rem 1.5rem;
    }
    .sector-card-desc {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, opacity 0.4s ease;
      opacity: 0;
    }
    .sector-card:hover .sector-card-desc {
      max-height: 80px;
      opacity: 1;
    }

    /* Stat counters */
    .stat-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(159,203,152,0.15);
      border-radius: 1.25rem;
      padding: 1.75rem 2rem;
      backdrop-filter: blur(8px);
    }

    /* Nav link underline */
    .nav-link {
      position: relative;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      transition: color 0.25s;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -3px; left: 0;
      width: 0; height: 2px;
      background: var(--sage);
      border-radius: 2px;
      transition: width 0.3s ease;
    }
    .nav-link:hover::after { width: 100%; }

    .nav-link-active {
      color: var(--forest) !important;
    }
    .nav-link-active::after {
      width: 100% !important;
    }

    /* Input focus ring */
    .form-input {
      width: 100%;
      background: rgba(255,255,255,0.06);
      color: var(--cream);
      border: 1px solid rgba(255,255,255,0.1);
      padding: 1.1rem 1.4rem;
      border-radius: 1rem;
      outline: none;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.95rem;
      transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    }
    .form-input::placeholder { color: rgba(242,237,194,0.25); }
    .form-input:focus {
      border-color: var(--mint);
      background: rgba(255,255,255,0.1);
      box-shadow: 0 0 0 3px rgba(159,203,152,0.15);
    }

    /* Divider line */
    .divider { height: 1px; background: linear-gradient(to right, transparent, var(--sage), transparent); }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream); }
    ::-webkit-scrollbar-thumb { background: var(--sage); border-radius: 3px; }
  `}</style>
);

// --- NAVBAR ---
const Navbar = ({ lang, setLang, t, forceSolid = false, activeRoute = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const logoScale = 100;
  const basePixelSize = 40;
  const currentSize = (basePixelSize * (logoScale / 100));
  const textTitleSize = (1.25 * (logoScale / 100));
  const textSubSize = (0.6 * (logoScale / 100));

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
    return false;
  }, [activeRoute]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
    {mobileOpen && (
      <div className="mobile-nav-overlay" onClick={closeMobile} />
    )}
    {mobileOpen && (
      <div className="mobile-nav">
        <div className="mobile-nav-panel">
          <div className="mobile-nav-links">
            {[['#', t.home], ['#/about', t.about], ['#/services', t.services], ['#/insights', t.insights]].map(([href, label]) => (
              <a key={href} href={href} onClick={closeMobile} className={isActive(href) ? 'mobile-active' : ''}>{label}</a>
            ))}
            <div className="mobile-nav-divider" />
            <a href="#sectors" onClick={goHomeAndScroll('sectors')}>{t.sectors}</a>
            <a href="#pfas-response" onClick={goHomeAndScroll('pfas-response')}>{t.pfas}</a>
            <a href="#contact" onClick={goHomeAndScroll('contact')}>{t.getStarted}</a>
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
        <div className="flex items-center gap-3" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div 
            style={{ width: currentSize, height: currentSize }}
            className="flex items-center justify-center overflow-hidden transition-all duration-300"
          >
            <img 
              src="/logo.png" 
              alt=" BioAg Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col text-left" style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <div 
              style={{ fontSize: `${textTitleSize}rem` }}
              className={`
                font-serif font-bold leading-none transition-colors duration-300
                ${scrolled ? 'text-green-900' : 'text-white'}
              `}
            />
            <div 
              style={{ fontSize: `${textSubSize}rem` }}
              className={`
                uppercase tracking-[0.35em] font-medium transition-colors duration-300 mt-1
                ${scrolled ? 'text-green-600' : 'text-green-400/90'}
              `}
            >
              JCrew Environmental
            </div>
          </div>
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className={`nav-toggle ${mobileOpen ? 'nav-toggle-open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className="nav-toggle-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="navbar-links">
            {[['#', t.home], ['#/about', t.about], ['#/services', t.services], ['#/insights', t.insights]].map(([href, label]) => (
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
            {[['#sectors', t.sectors, goHomeAndScroll('sectors')], ['#pfas-response', t.pfas, goHomeAndScroll('pfas-response')]].map(([href, label, onClick]) => (
              <a key={href} href={href} onClick={onClick} className="nav-link" style={{ color: scrolled ? 'var(--forest)' : 'rgba(242,237,194,0.9)', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>

          <a href="#contact" onClick={goHomeAndScroll('contact')} style={{
            background: 'var(--forest)',
            color: 'var(--cream)',
            padding: '0.65rem 1.75rem',
            borderRadius: '999px',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(45,90,49,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(45,90,49,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(45,90,49,0.35)'; }}
          >{t.getStarted}</a>

          <div style={{ display: 'flex', background: scrolled ? 'rgba(45,90,49,0.1)' : 'rgba(255,255,255,0.1)', borderRadius: '999px', padding: '3px' }}>
            {['en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: '0.3rem 0.85rem',
                borderRadius: '999px',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                background: lang === l ? 'var(--forest)' : 'transparent',
                color: lang === l ? 'var(--cream)' : (scrolled ? 'var(--forest)' : 'rgba(242,237,194,0.7)'),
                transition: 'all 0.2s'
              }}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

const PageShell = ({ title, children }) => (
  <section className="page-shell" style={{ padding: '9rem 0 6rem', background: 'var(--cream)' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
      <h1 className="page-title" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(2.75rem, 6vw, 4.75rem)',
        fontWeight: 900,
        color: 'var(--forest)',
        lineHeight: 1,
        letterSpacing: '-0.02em',
        marginBottom: '1.25rem'
      }}>{title}</h1>
      <div style={{ height: 1, background: 'linear-gradient(to right, rgba(45,90,49,0.25), rgba(45,90,49,0.05))', margin: '1.25rem 0 2.5rem' }} />
      <div style={{ maxWidth: 900 }}>{children}</div>
    </div>
  </section>
);

const AboutPage = () => (
  <PageShell title="About">
    <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
      JCrew Environmental coordinates regulatory, financial, and technical execution for complex environmental obligations. We translate uncertainty into a structured program with clear accountability.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
      {[
        ['Mission', 'Coordinate defensible environmental response programs.'],
        ['Approach', 'Integrate stakeholders, data, and compliance into one roadmap.'],
        ['Focus', 'PFAS response planning, implementation oversight, and reporting.']
      ].map(([h, p]) => (
        <div key={h} style={{ border: '1px solid rgba(121,174,111,0.25)', borderRadius: '1.25rem', padding: '1.5rem', background: 'rgba(255,255,255,0.55)' }}>
          <div style={{ fontWeight: 800, letterSpacing: '0.06em', color: 'var(--forest)', marginBottom: '0.5rem' }}>{h}</div>
          <div style={{ color: 'rgba(45,90,49,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{p}</div>
        </div>
      ))}
    </div>
  </PageShell>
);

const ServicesPage = () => (
  <PageShell title="Services">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
      {[
        ['Program Strategy', 'Define scope, milestones, roles, and governance.'],
        ['Compliance & Reporting', 'Support regulatory coordination and documentation.'],
        ['Funding Alignment', 'Connect technical work to available funding mechanisms.'],
        ['Implementation Oversight', 'Coordinate vendors, schedules, and deliverables.']
      ].map(([h, p]) => (
        <div key={h} style={{ border: '1px solid rgba(121,174,111,0.25)', borderRadius: '1.25rem', padding: '1.5rem', background: 'rgba(255,255,255,0.55)' }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, color: 'var(--forest)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{h}</div>
          <div style={{ color: 'rgba(45,90,49,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{p}</div>
        </div>
      ))}
    </div>
  </PageShell>
);

const InsightsPage = () => (
  <PageShell title="Insights">
    <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.75)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
      This page is a placeholder for resources like PFAS response checklists, project readiness guidance, and reporting templates.
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {[
        ['PFAS Response Readiness', 'What to assemble before engaging consultants and labs.'],
        ['Stakeholder Map', 'Who should be involved and what decisions they own.'],
        ['Program Timeline', 'A practical sequence for assessment, funding, and remediation.']
      ].map(([h, p]) => (
        <div key={h} style={{ padding: '1.25rem 1.5rem', borderRadius: '1.25rem', border: '1px solid rgba(121,174,111,0.25)', background: 'rgba(255,255,255,0.55)' }}>
          <div style={{ fontWeight: 800, color: 'var(--forest)', marginBottom: '0.35rem' }}>{h}</div>
          <div style={{ color: 'rgba(45,90,49,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>{p}</div>
        </div>
      ))}
    </div>
  </PageShell>
);

// --- HERO ---
const Hero = ({ t }) => (
  <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.92) 0%, rgba(45,90,49,0.65) 50%, rgba(26,58,29,0.4) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--cream) 100%)' }} />
    </div>

    <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '8rem' }} className="hero-inner">
      <h1 className="fade-up-2" style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
        fontWeight: 900,
        color: 'var(--cream)',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        marginBottom: '1.75rem'
      }}>
        {t.heroTitle1}{' '}
        <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>{t.heroTitle2}</span>
      </h1>

      <p className="fade-up-3" style={{ fontSize: '1.2rem', color: 'rgba(242,237,194,0.8)', maxWidth: '560px', lineHeight: 1.7, fontWeight: 300, marginBottom: '2.5rem' }}>
        {t.heroSub}
      </p>

      <div className="fade-up-4 hero-actions">
        <a href="#contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
          background: 'var(--cream)', color: 'var(--forest)',
          padding: '1rem 2.25rem', borderRadius: '1rem',
          fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.35)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)'; }}
        >
          {t.consultation}
          <IconArrowRight size={16} />
        </a>
        <a href="#sectors" style={{
          display: 'inline-flex', alignItems: 'center',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          color: 'var(--cream)', border: '1px solid rgba(255,255,255,0.2)',
          padding: '1rem 2.25rem', borderRadius: '1rem',
          fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
          transition: 'background 0.2s'
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          {t.sectors} ↓
        </a>
      </div>
    </div>
  </header>
);

// --- SECTORS CAROUSEL ---
const Sectors = ({ t }) => {
  const sectorData = [
    { title: "Public Drinking Water", img: drinkingImg, desc: "Compliance and remediation for municipal water systems.", tag: "Water" },
    { title: "Airports & Aviation", img: airportImg, desc: "AFFF management and soil remediation oversight for aviation.", tag: "Aviation" },
    { title: "Fire & Emergency", img: fireImg, desc: "Transitioning departments to safe PFAS-free alternatives.", tag: "Safety" },
    { title: "Energy Infrastructure", img: energyImg, desc: "Sustainable efficiency and clean fuel solutions at scale.", tag: "Energy" },
    { title: "Municipal Support", img: municipalImg, desc: "Institutional risk management for local government entities.", tag: "Municipal" },
    { title: "Corporate Business", img: businessImg, desc: "Defensible environmental accountability for enterprise.", tag: "Corporate" }
  ];

  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const trackRef = useRef(null);
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

  const goTo = useCallback((idx) => {
    setCurrent(Math.max(0, Math.min(idx, maxIndex)));
  }, [maxIndex]);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrent(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 4000);
  };

  const onPointerDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX ?? e.touches?.[0]?.clientX);
    setDragDelta(0);
    clearInterval(autoRef.current);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX;
    setDragDelta(x - startX);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -60) goTo(current + 1);
    else if (dragDelta > 60) goTo(current - 1);
    setDragDelta(0);
    resetAuto();
  };

  const GAP = 16;
  const slideWidthPct = slidesVisible === 1 ? 88 : slidesVisible === 2 ? 50 : 33.333;
  const translateX = `calc(-${current * (slideWidthPct + (GAP / (containerRef.current?.offsetWidth || 1000)) * 100)}% + ${dragDelta}px)`;

  return (
    <section id="sectors" style={{ padding: '7rem 0 6rem', background: 'var(--cream)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 900, lineHeight: 1,
              color: 'var(--forest)', letterSpacing: '-0.02em'
            }}>
              {t.sectorsTitle1}{' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>{t.sectorsTitle2}</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(45,90,49,0.65)', maxWidth: '500px', lineHeight: 1.6 }}>{t.sectorsSub}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignSelf: 'flex-end' }}>
            {[[-1, '←'], [1, '→']].map(([dir, arrow]) => (
              <button key={dir} onClick={() => { goTo(current + dir); resetAuto(); }}
                disabled={dir === -1 ? current === 0 : current >= maxIndex}
                style={{
                  width: 52, height: 52, borderRadius: '50%',
                  border: '2px solid var(--forest)',
                  background: dir === 1 && current < maxIndex ? 'var(--forest)' : 'transparent',
                  color: dir === 1 && current < maxIndex ? 'var(--cream)' : 'var(--forest)',
                  fontSize: '1.2rem', cursor: 'pointer',
                  opacity: (dir === -1 && current === 0) || (dir === 1 && current >= maxIndex) ? 0.3 : 1,
                  transition: 'all 0.25s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >{arrow}</button>
            ))}
          </div>
        </div>
        <div
          ref={containerRef}
          style={{ overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={onPointerUp}
        >
          <div
            ref={trackRef}
            className="carousel-track"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX})`,
              transition: isDragging ? 'none' : 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)'
            }}
          >
            {sectorData.map((s, i) => (
              <div key={i} className="carousel-slide">
                <div className="sector-card">
                  <img src={s.img} alt={s.title} draggable={false} />
                  <div className="sector-card-overlay" />
                  <div style={{
                    position: 'absolute', top: '1.25rem', left: '1.25rem',
                    background: 'rgba(242,237,194,0.15)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(242,237,194,0.2)',
                    color: 'var(--cream)', fontSize: '0.6rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    padding: '0.3rem 0.8rem', borderRadius: '999px'
                  }}>{s.tag}</div>
                  <div className="sector-card-content">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem', lineHeight: 1.2 }}>{s.title}</h3>
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
            <button key={i} onClick={() => { goTo(i); resetAuto(); }}
              style={{
                height: 8, width: i === current ? 32 : 8,
                borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === current ? 'var(--forest)' : 'rgba(45,90,49,0.25)',
                transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                padding: 0
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- STRATEGY / PUZZLE (Option 2 - Subtle BG) ---
const Strategy = ({ t }) => (
  <section id="pfas-response" style={{ padding: '7rem 0', background: 'var(--forest-deep)', position: 'relative', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute',
      left: 0,
      top: '5%',
      width: '45%',
      height: '90%',
      zIndex: 1,
      opacity: 0.15,
      pointerEvents: 'none',
    }}>
      <img
        src={puzzleImg}
        alt=""
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          objectPosition: 'left center',
          filter: 'grayscale(100%)'
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 30%, var(--forest-deep) 75%)',
      }} />
    </div>

    <div style={{
      position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(121,174,111,0.1) 0%, transparent 70%)',
      top: '-200px', right: '-200px', pointerEvents: 'none', zIndex: 0
    }} />

    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
      <div className="section-split">
        <div className="image-spacer" />
        <div className="content-block">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900, lineHeight: 1.1,
            color: 'var(--cream)', marginBottom: '1.5rem', letterSpacing: '-0.02em'
          }}>
            {t.strategyTitle1}{' '}
            <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>{t.strategyTitle2}</span>{' '}
            {t.strategyTitle3}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(242,237,194,0.7)', lineHeight: 1.75, fontWeight: 300, marginBottom: '2.5rem' }}>
            {t.strategySub}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {[
              ['Technical', 'Engineering & Remediation', <IconGear />],
              ['Financial', 'Funding & Grant Alignment', <IconCoin />],
              ['Regulatory', 'Compliance & Reporting', <IconClipboard />],
              ['Legal', 'Defensible Documentation', <IconScale />]
            ].map(([title, sub, icon]) => (
              <div key={title} className="stat-card">
                <div style={{ marginBottom: '0.6rem', display: 'flex' }}>{icon}</div>
                <div style={{ color: 'var(--mint)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{title}</div>
                <div style={{ color: 'rgba(242,237,194,0.5)', fontSize: '0.8rem' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- CONTACT ---
const Contact = ({ t }) => (
  <section id="contact" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <img src={waterCupImg} alt="bg" className="animate-slow-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(26,58,29,0.97) 0%, rgba(45,90,49,0.75) 55%, rgba(26,58,29,0.5) 100%)' }} />
    </div>

    <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', width: '100%' }} className="contact-grid">
      <div className="contact-details">
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 900, color: 'var(--cream)',
          lineHeight: 0.92, letterSpacing: '-0.03em',
          marginBottom: '1.75rem'
        }}>
          {t.contactTitle.split(' ').map((word, i) => (
            <span key={i} style={{ display: 'block' }}>{word}</span>
          ))}
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(242,237,194,0.65)', lineHeight: 1.7, fontWeight: 300, maxWidth: '400px', marginBottom: '2.5rem' }}>
          Coordinating technical, financial, and regulatory pieces into a single, defensible environmental program.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            [<IconMapPin />, '103 Rotary Drive, West Hazleton, PA'],
            [<IconPhone />, '(844) 878-7347'],
            [<IconMail />, 'info@jcrew-env.com']
          ].map(([icon, val]) => (
            <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(242,237,194,0.6)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', opacity: 0.7 }}>{icon}</span>
              <span>{val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-card">
        <div style={{
          background: 'rgba(26,58,29,0.5)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(159,203,152,0.15)',
          borderRadius: '2rem',
          padding: '2.5rem',
          boxShadow: '0 24px 60px rgba(0,0,0,0.4)'
        }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.5rem', fontWeight: 700 }}>Send a Request</h3>
          <p style={{ fontSize: '0.85rem', color: 'rgba(242,237,194,0.4)', marginBottom: '2rem' }}>We typically respond within 24 hours.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { label: 'Full Name', type: 'text', placeholder: 'Ex: Michael Chen' },
              { label: 'Institutional Email', type: 'email', placeholder: 'm.chen@municipality.gov' },
              { label: 'Organization', type: 'text', placeholder: 'City of Philadelphia' },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>{label}</label>
                <input type={type} placeholder={placeholder} className="form-input" />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>Assistance Required</label>
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

// --- FOOTER ---
const Footer = () => (
  <footer style={{ background: 'var(--forest-deep)', borderTop: '1px solid rgba(121,174,111,0.15)', padding: '2.5rem 2rem' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto', gap: '1rem' }} className="footer-inner">
      <div style={{ fontFamily: "'Playfair Display', serif", color: 'var(--mint)', fontWeight: 700, fontSize: '1.1rem' }}></div>
      <p style={{ fontSize: '0.7rem', color: 'rgba(159,203,152,0.5)', letterSpacing: '0.1em' }}>© 2026 JCrew Environmental Solution. All rights reserved.</p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {['103 Rotary Drive, West Hazleton PA', '(844) 878-7347'].map(item => (
          <span key={item} style={{ fontSize: '0.7rem', color: 'rgba(159,203,152,0.5)', letterSpacing: '0.05em' }}>{item}</span>
        ))}
      </div>
    </div>
  </footer>
);

// --- APP ---
export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const [route, setRoute] = useState(() => {
    const h = window.location.hash || '';
    return h.startsWith('#/') ? h.slice(1) : '';
  });

  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash || '';
      setRoute(h.startsWith('#/') ? h.slice(1) : '');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timer);
  }, [route]);

  const pageMotion = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar lang={lang} setLang={setLang} t={t} forceSolid={route !== ''} activeRoute={route} />
        <main>
          <AnimatePresence mode="wait" initial={false}>
            {loading ? (
              <motion.div key={`loading:${route || 'home'}`} {...pageMotion}>
                {route === '' ? <SkeletonHome /> : <SkeletonPage />}
              </motion.div>
            ) : (
              <motion.div key={route || 'home'} {...pageMotion}>
                {route === '' && (
                  <>
                    <Hero t={t} />
                    <Sectors t={t} />
                    <Strategy t={t} />
                    <Contact t={t} />
                  </>
                )}
                {route === '/about' && <AboutPage />}
                {route === '/services' && <ServicesPage />}
                {route === '/insights' && <InsightsPage />}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}