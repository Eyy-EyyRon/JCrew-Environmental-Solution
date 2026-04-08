import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Assets Imports
import heroVideo from './assets/Hero-Home-small.mp4';
import irrigation2Img from './assets/irrigation2.jpg';
import rainwaterCollectionImg from './assets/rainwatercollection.webp';
import wastewaterImg from './assets/wastewater1.webp';
import riverImg from './assets/river1.webp';
import recyclingImg from './assets/recycling1.webp';
import segregationImg from './assets/segregation.webp';
import puzzleImg from './assets/puzzle.jpg';
import waterCupImg from './assets/watercup.jpg';
import heroEnergyVideo from './assets/Hero-Energy-small.mp4';
import heroPFASVideo from './assets/Hero-PSAF-small.mp4';
import cleanEnergyImg from './assets/clean-energy.webp';
import cleanEnergy1Img from './assets/clean energy1.webp';
import cleanEnergy2Img from './assets/clean energy2.jpg';
import wastewater2Img from './assets/wastewater2.webp';
import waterTreatmentPlantImg from './assets/water-treatment-plant.webp';
import biomassImg from './assets/wooden-fuel-for-bio-power-plant-1024x714.webp';
import nuclearImg from './assets/nuclear-power-plant-cooling-towers-51828269.webp';
import hydroelectricImg from './assets/hydroelectric.webp';
import geothermalImg from './assets/aerial-view-of-geothermal-power-plant.webp';
import bambooImg from './assets/bamboo.jpg';
import heroHowVideo from './assets/Hero-How-small.mp4';
import heroFundingVideo from './assets/Hero-Funding-small.mp4';

// --- TRANSLATIONS ---
const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    insights: "Insights",
    cleanEnergyVision: "Clean Energy Vision",
    sectors: "Sectors",
    pfas: "PFAS Response",
    getStarted: "Get Started",
    heroTitle1: "JCrew",
    heroTitle2: "Environmental Solution.",
    heroSub: "Program management and field execution for PFAS response, infrastructure compliance, and clean energy deployment—built for public agencies and complex sites.",
    consultation: "Request a Consultation",
    sectorsTitle1: "Where",
    sectorsTitle2: "We Deliver.",
    sectorsSub: "Practical support across the sites where environmental risk, operational urgency, and public accountability intersect.",
    strategyTitle1: "Turning risk into",
    strategyTitle2: "a defensible program",
    strategyTitle3: ".",
    strategySub: "Environmental work fails when strategy and execution are separated. JCrew Environmental Solution aligns engineering, funding, and compliance into one accountable plan—then drives it through procurement, delivery, and reporting.",
    contactTitle: "Tell us what you’re facing.",
    submit: "Submit Request"
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    insights: "Recursos",
    cleanEnergyVision: "Visión de Energía Limpia",
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

const CleanEnergyVisionPage = ({ t }) => (
  <section style={{ background: 'var(--cream)' }}>
    <header style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={heroEnergyVideo} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.12) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 55%, rgba(0,0,0,0.45) 100%)' }} />
      </div>

      <div data-reveal style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '9rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          <div style={{ color: 'rgba(242,237,194,0.72)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.75rem' }}>From</div>
          <div style={{ color: 'rgba(242,237,194,0.92)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Waste & Infrastructure</div>
        </div>

        <h1 className="page-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3.2rem, 7.4vw, 6.6rem)',
          fontWeight: 900,
          color: 'var(--cream)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '1.15rem',
          textShadow: '0 10px 40px rgba(0,0,0,0.35)'
        }}>
          Integrated
          {' '}
          <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>Clean Energy</span>
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'rgba(242,237,194,0.84)', maxWidth: 740, lineHeight: 1.75, fontWeight: 300 }}>
          The Clean Energy Division of JCrew Environmental Solution designs and coordinates waste-to-clean-energy programs that reduce
          landfill dependence, stabilize operating costs, and deliver measurable emissions reduction through clean fuels and
          electrification pathways.
        </p>
      </div>
    </header>

    <section data-reveal style={{ padding: '6rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.25)',
          boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
          backgroundImage: `url(${cleanEnergyImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(242,237,194,0.78)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.16) 0%, rgba(26,58,29,0.06) 60%, rgba(26,58,29,0.03) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '3.25rem 3rem' }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            color: 'var(--forest)',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Designed for execution
            {' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>Built for delivery</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We manage multi-stakeholder clean energy programs end-to-end—aligning feedstock, permitting, offtake, and financing into a
            deliverable infrastructure plan with clear reporting and accountability.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Clean energy projects are long-horizon infrastructure programs—not demos. Success requires disciplined coordination across
            procurement, environmental review, permitting, workforce readiness, construction delivery, and long-term operations.
          </p>
          <div style={{ border: '1px solid rgba(121,174,111,0.25)', borderRadius: '1.5rem', padding: '1.5rem 1.5rem', background: 'rgba(255,255,255,0.55)' }}>
            <div style={{ fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--forest)', marginBottom: '0.75rem', fontSize: '0.8rem' }}>
              End-to-End Clean Energy Project Coordination
            </div>
            <div style={{ color: 'rgba(45,90,49,0.72)', lineHeight: 1.75, fontSize: '0.98rem' }}>
              The Clean Energy Division serves as the Program Integrator for Waste-to-Energy and Clean Fuel Infrastructure Projects.
            </div>
            <div className="divider" style={{ margin: '1.25rem 0' }} />
            <ul style={{ paddingLeft: '1.1rem', display: 'grid', gap: '0.7rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.7, fontSize: '0.98rem' }}>
              <li>Feedstock sourcing and long-term supply alignment</li>
              <li>Technology evaluation and integration planning (non-proprietary)</li>
              <li>Project siting, stakeholder alignment, and community engagement</li>
              <li>Offtake strategy and end-market coordination (aviation, industrial, and grid)</li>
              <li>Permitting pathway, environmental review, and compliance planning</li>
              <li>Financing readiness support and capital stack coordination</li>
              <li>Workforce readiness and local supplier participation planning</li>
              <li>Delivery oversight through construction, commissioning, and handoff</li>
              <li>Ongoing performance reporting and operational continuity planning</li>
            </ul>
            <div className="divider" style={{ margin: '1.25rem 0 0.9rem' }} />
            <div style={{ fontWeight: 900, color: 'var(--forest)', letterSpacing: '0.02em' }}>
              We do not operate as an equipment vendor or speculative developer.
            </div>
            <div style={{ color: 'rgba(45,90,49,0.72)', lineHeight: 1.7, marginTop: '0.35rem' }}>
              We organize, align, and manage the full delivery ecosystem.
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="clean-energy-panels" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1.5rem' }}>
          {[{
            img: cleanEnergy1Img,
            title: 'Project delivery clarity',
            sub: 'Scope, permitting, procurement, and reporting—organized into a single execution plan.'
          }, {
            img: cleanEnergy2Img,
            title: 'Infrastructure-ready outcomes',
            sub: 'Programs structured for financing readiness, construction delivery, and long-term operations.'
          }].map(({ img, title, sub }) => (
            <div key={title} style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              border: '1px solid rgba(121,174,111,0.22)',
              boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
              minHeight: 280,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.72) 0%, rgba(26,58,29,0.35) 55%, rgba(26,58,29,0.22) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '2.25rem 2.25rem' }}>
                <div style={{ color: 'rgba(159,203,152,0.9)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.7rem', marginBottom: '0.85rem' }}>Clean energy delivery</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.65rem, 3.6vw, 2.4rem)', color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(242,237,194,0.78)', lineHeight: 1.75, fontSize: '1rem', maxWidth: 520 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem'
        }}>
          {[
            { title: 'Biomass & bio-power', img: biomassImg },
            { title: 'Nuclear & grid reliability', img: nuclearImg },
            { title: 'Hydroelectric systems', img: hydroelectricImg },
            { title: 'Geothermal generation', img: geothermalImg },
          ].map(({ title, img }) => (
            <div key={title} style={{
              position: 'relative',
              borderRadius: '1.75rem',
              overflow: 'hidden',
              border: '1px solid rgba(121,174,111,0.22)',
              boxShadow: '0 18px 60px rgba(26,58,29,0.1)',
              minHeight: 240,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,58,29,0.9) 0%, rgba(26,58,29,0.35) 55%, rgba(26,58,29,0.22) 100%)' }} />
              <div style={{ position: 'absolute', left: '1.25rem', right: '1.25rem', bottom: '1.25rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(242,237,194,0.22)',
                  background: 'rgba(242,237,194,0.12)',
                  color: 'rgba(242,237,194,0.92)',
                  fontSize: '0.62rem',
                  fontWeight: 800,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase'
                }}>{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section data-reveal style={{ padding: '1rem 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          background: 'var(--forest-deep)',
          border: '1px solid rgba(159,203,152,0.15)'
        }}>
          <img src={bambooImg} alt="Sustainable materials" loading="lazy" decoding="async" style={{ width: '100%', height: 420, objectFit: 'cover', opacity: 0.32, filter: 'blur(1px) saturate(0.95)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(26,58,29,0.92) 0%, rgba(45,90,49,0.62) 55%, rgba(26,58,29,0.45) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: '3.25rem 3rem', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ maxWidth: 760 }}>
              <div style={{ color: 'rgba(159,203,152,0.9)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.7rem', marginBottom: '0.75rem' }}>Environmental programs that strengthen communities</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.6vw, 3.25rem)', color: 'var(--cream)', lineHeight: 1.05, marginBottom: '0.85rem' }}>
                Aligned with Environmental Justice,
                {' '}
                <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>workforce readiness</span>
              </h3>
              <p style={{ color: 'rgba(242,237,194,0.82)', lineHeight: 1.75, fontSize: '1.02rem' }}>
                JCrew Environmental Solution aligns clean energy work with environmental justice, workforce readiness, and domestic
                supply-chain priorities. Programs are structured to deliver long-term public value through jobs, durable infrastructure,
                and transparent reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="clean-energy-consultation" data-reveal style={{ padding: '1rem 0 7rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900,
            color: 'var(--forest)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Start with a
            {' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>confidential conversation</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            No obligation. An initial conversation is exploratory—an opportunity to understand your goals, constraints, and timeline,
            and to determine whether a clean energy program is feasible for your waste streams and infrastructure.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge" style={{ marginBottom: 0, color: 'var(--forest)', borderColor: 'rgba(121,174,111,0.35)', background: 'rgba(121,174,111,0.12)' }}>
              <span className="badge-dot" style={{ background: 'var(--forest)' }} />
              Call: (844) 878-7347
            </span>
          </div>
        </div>

        <div className="contact-card">
          <div style={{
            background: 'rgba(10,24,12,0.78)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(159,203,152,0.22)',
            borderRadius: '2rem',
            padding: '2.5rem',
            boxShadow: '0 28px 78px rgba(0,0,0,0.55)'
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
                <textarea rows={4} placeholder="Briefly describe your clean energy infrastructure program..." className="form-input" style={{ resize: 'none' }} />
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
              <div style={{ color: 'rgba(242,237,194,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Submitting this form does not create any obligation. Information provided will be treated as confidential and used solely
                to determine whether an initial discussion is appropriate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

const PFASResponseDivisionPage = ({ t }) => (
  <section style={{ background: 'var(--cream)' }}>
    <header style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={heroPFASVideo} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.14) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 55%, rgba(0,0,0,0.5) 100%)' }} />
      </div>

      <div data-reveal style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '9rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          <div style={{ color: 'rgba(242,237,194,0.72)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.75rem' }}>PFAS</div>
          <div style={{ color: 'rgba(242,237,194,0.92)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Response Division</div>
        </div>

        <h1 className="page-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3.2rem, 7.4vw, 6.6rem)',
          fontWeight: 900,
          color: 'var(--cream)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '1.15rem',
          textShadow: '0 10px 40px rgba(0,0,0,0.35)'
        }}>
          Defensible
          {' '}
          <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>PFAS</span>
          {' '}
          Programs
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'rgba(242,237,194,0.84)', maxWidth: 760, lineHeight: 1.75, fontWeight: 300 }}>
          JCrew Environmental Solution supports agencies and facilities with PFAS investigation coordination, program management, and
          reporting—built to stand up to audits, public records, and long-term operational realities.
        </p>
      </div>
    </header>

    <section data-reveal style={{ padding: '6rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.22)',
          boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
          backgroundImage: `url(${riverImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(242,237,194,0.78)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.18) 0%, rgba(26,58,29,0.06) 60%, rgba(26,58,29,0.03) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '3.25rem 3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: 'var(--forest)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>
              Built for compliance
              {' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>and public accountability</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              PFAS programs require coordinated sampling strategy, stakeholder communication, procurement discipline, and defensible
              documentation. We help turn investigation and remediation tasks into a managed program with clear deliverables.
            </p>
            <div className="slide-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {[
                ['Sampling & QA/QC', 'Field coordination and data integrity support.'],
                ['Program Documentation', 'Audit-ready files, reporting, and decision logs.'],
                ['Stakeholder Alignment', 'Agencies, consultants, and community coordination.'],
                ['Implementation Support', 'From findings to scopes, procurement, and delivery.']
              ].map(([title, sub]) => (
                <div key={title} className="slide-card slide-card-alt">
                  <div style={{ fontWeight: 900, color: 'var(--forest)', marginBottom: '0.5rem', letterSpacing: '0.02em' }}>{title}</div>
                  <div style={{ color: 'rgba(45,90,49,0.72)', lineHeight: 1.65 }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              img: wastewater2Img,
              title: 'Wastewater systems',
              sub: 'Planning and coordination for monitoring, treatment, and reporting workflows.'
            },
            {
              img: waterTreatmentPlantImg,
              title: 'Water treatment plants',
              sub: 'Support for compliance programs, procurement packages, and operational continuity.'
            }
          ].map(({ img, title, sub }) => (
            <div key={title} style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              border: '1px solid rgba(121,174,111,0.22)',
              boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
              minHeight: 280,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.76) 0%, rgba(26,58,29,0.38) 55%, rgba(26,58,29,0.22) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '2.25rem 2.25rem' }}>
                <div style={{ color: 'rgba(159,203,152,0.9)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.7rem', marginBottom: '0.85rem' }}>PFAS program delivery</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.65rem, 3.6vw, 2.4rem)', color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(242,237,194,0.78)', lineHeight: 1.75, fontSize: '1rem', maxWidth: 520 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="pfas-consultation" data-reveal style={{ padding: '0 0 7rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900,
            color: 'var(--forest)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Start with a
            {' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>confidential conversation</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            No obligation. We’ll review your PFAS program scope, deadlines, stakeholders, and documentation requirements and recommend a
            defensible next-step plan.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge" style={{ marginBottom: 0, color: 'var(--forest)', borderColor: 'rgba(121,174,111,0.35)', background: 'rgba(121,174,111,0.12)' }}>
              <span className="badge-dot" style={{ background: 'var(--forest)' }} />
              Call: (844) 878-7347
            </span>
          </div>
        </div>

        <div className="contact-card">
          <div style={{
            background: 'rgba(10,24,12,0.78)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(159,203,152,0.22)',
            borderRadius: '2rem',
            padding: '2.5rem',
            boxShadow: '0 28px 78px rgba(0,0,0,0.55)'
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
                <textarea rows={4} placeholder="Briefly describe your PFAS program needs..." className="form-input" style={{ resize: 'none' }} />
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
              <div style={{ color: 'rgba(242,237,194,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Submitting this form does not create any obligation. Information provided will be treated as confidential and used solely
                to determine whether an initial discussion is appropriate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
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

    a, button { -webkit-tap-highlight-color: transparent; }
    a:focus-visible, button:focus-visible {
      outline: 3px solid rgba(159,203,152,0.55);
      outline-offset: 3px;
    }

    /* Premium button system */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      border-radius: 1rem;
      padding: 1rem 2.25rem;
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 700;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
      will-change: transform;
    }
    .btn:active { transform: translateY(0) scale(0.99); }
    .btn-primary {
      background: var(--cream);
      color: var(--forest);
      box-shadow: 0 10px 34px rgba(0,0,0,0.24);
    }
    .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 18px 52px rgba(0,0,0,0.3); }
    .btn-ghost {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(8px);
      color: var(--cream);
      border: 1px solid rgba(255,255,255,0.2);
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.18); }

    :where(a, button, input, textarea):focus-visible {
      outline: 3px solid rgba(159,203,152,0.55);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
        scroll-behavior: auto !important;
      }
      .reveal { transform: none; }
    }

    /* Scroll reveal */
    .reveal {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .reveal-in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Ambient blobs */
    .ambient {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
    }
    .blob {
      position: absolute;
      width: 520px;
      height: 520px;
      border-radius: 50%;
      filter: blur(40px);
      opacity: 0.55;
      mix-blend-mode: screen;
      animation: drift 18s ease-in-out infinite alternate;
    }
    .blob.blob-a {
      left: -140px;
      top: 10%;
      background: radial-gradient(circle at 30% 30%, rgba(159,203,152,0.9), rgba(159,203,152,0) 60%);
    }
    .blob.blob-b {
      right: -180px;
      bottom: 6%;
      background: radial-gradient(circle at 30% 30%, rgba(121,174,111,0.85), rgba(121,174,111,0) 62%);
      animation-duration: 22s;
    }
    @keyframes drift {
      from { transform: translate3d(0,0,0) scale(1); }
      to { transform: translate3d(40px,-28px,0) scale(1.06); }
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

    @media (hover: none) {
      .sector-card-desc {
        max-height: 120px;
        opacity: 1;
      }
      .sector-card:hover {
        transform: none;
      }
      .sector-card:hover img { transform: none; }
    }

    @media (max-width: 800px) {
      .clean-energy-panels { grid-template-columns: 1fr !important; }
    }

    @media (min-width: 1024px) {
      .nav-get-started { display: none !important; }
    }

    /* Slide-in animation for cards - left/right alternating */
    .slide-card {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    /* Animation active - cards start hidden and offset */
    .slide-card.animate {
      opacity: 0;
    }

    .slide-card.animate:nth-child(odd) {
      transform: translateX(-80px);
    }

    .slide-card.animate:nth-child(even) {
      transform: translateX(80px);
    }

    /* Revealed state */
    .slide-card.revealed {
      opacity: 1;
      transform: translateX(0) !important;
    }

    /* Fallback: ensure cards are visible if JS fails */
    @media (prefers-reduced-motion: reduce) {
      .slide-card { opacity: 1 !important; transform: none !important; }
    }

    /* Card style variants */
    .slide-card-dark {
      border: 1px solid rgba(159,203,152,0.15);
      border-radius: 1.5rem;
      padding: 1.75rem;
      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(6px);
    }

    .slide-card-light {
      border: 1px solid rgba(121,174,111,0.25);
      border-radius: 1.5rem;
      padding: 2rem;
      background: rgba(255,255,255,0.55);
    }

    .slide-card-alt {
      border: 1px solid rgba(121,174,111,0.22);
      border-radius: 1.25rem;
      background: rgba(255,255,255,0.62);
      padding: 1.5rem;
    }

    /* Stagger delays for cascading effect */
    .slide-card:nth-child(1) { transition-delay: 0ms; }
    .slide-card:nth-child(2) { transition-delay: 120ms; }
    .slide-card:nth-child(3) { transition-delay: 240ms; }
    .slide-card:nth-child(4) { transition-delay: 360ms; }

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
      cursor: default;
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
const Navbar = ({ t, forceSolid = false, activeRoute = '', activeSection = '' }) => {
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
    if (href === '#sectors') return activeRoute === '' && activeSection === 'sectors';
    if (href === '#pfas-response') return activeRoute === '' && activeSection === 'pfas-response';
    if (href === '#contact') return activeRoute === '' && activeSection === 'contact';
    return false;
  }, [activeRoute, activeSection]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = prev || '';
    return () => {
      document.body.style.overflow = prev || '';
    };
  }, [mobileOpen]);

  return (
    <>
    {mobileOpen && (
      <div className="mobile-nav-overlay" onClick={closeMobile} />
    )}
    {mobileOpen && (
      <div className="mobile-nav">
        <div className="mobile-nav-panel" id="mobile-nav" role="dialog" aria-label="Mobile navigation">
          <div className="mobile-nav-links">
            {[['#', t.home], ['#/clean-energy-vision', t.cleanEnergyVision], ['#/pfas-response-division', 'PFAS Response Division'], ['#/how-we-work', 'How We Work'], ['#/funding-and-accountability', 'Funding & Accountability']].map(([href, label]) => (
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
        <div className="flex items-center gap-3" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div 
            style={{ width: currentSize, height: currentSize }}
            className="flex items-center justify-center overflow-hidden transition-all duration-300"
          >
            <img 
              src="/logo.png" 
              alt="JCrew Environmental Logo" 
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
            >JCrew</div>
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
            aria-controls="mobile-nav"
          >
            <span className="nav-toggle-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="navbar-links">
            {[['#', t.home], ['#/clean-energy-vision', t.cleanEnergyVision], ['#/pfas-response-division', 'PFAS Response Division'], ['#/how-we-work', 'How We Work'], ['#/funding-and-accountability', 'Funding & Accountability']].map(([href, label]) => (
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

          <a href="#contact" onClick={goHomeAndScroll('contact')} className="btn nav-get-started" style={{
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

// --- HERO ---
const Hero = ({ t }) => (
  <header style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.92) 0%, rgba(45,90,49,0.65) 50%, rgba(26,58,29,0.4) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--cream) 100%)' }} />
    </div>

    <div className="ambient" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
    </div>

    <div data-reveal style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '8rem' }} className="hero-inner">
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
        <a href="#contact" className="btn btn-primary">
          {t.consultation}
          <IconArrowRight size={16} />
        </a>
        <a href="#sectors" className="btn btn-ghost">
          {t.sectors} ↓
        </a>
      </div>
    </div>
  </header>
);

// --- SECTORS CAROUSEL ---
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

  const onCarouselKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
      resetAuto();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
      resetAuto();
    }
  };

  const GAP = 16;
  const slideWidthPct = slidesVisible === 1 ? 88 : slidesVisible === 2 ? 50 : 33.333;
  const translateX = `calc(-${current * (slideWidthPct + (GAP / (containerRef.current?.offsetWidth || 1000)) * 100)}% + ${dragDelta}px)`;

  return (
    <section id="sectors" data-reveal style={{ padding: '7rem 0 6rem', background: 'var(--cream)', overflow: 'hidden' }}>
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
                aria-label={dir === -1 ? 'Previous' : 'Next'}
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
          role="region"
          aria-label="Sectors carousel"
          tabIndex={0}
          onKeyDown={onCarouselKeyDown}
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
                  <img src={s.img} alt={s.title} draggable={false} loading="lazy" decoding="async" />
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
              aria-label={`Go to slide ${i + 1}`}
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
  <section id="pfas-response" data-reveal style={{ padding: '7rem 0', background: 'var(--forest-deep)', position: 'relative', overflow: 'hidden' }}>
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
              ['Technical', 'Investigation & Engineering Oversight', <IconGear />],
              ['Financial', 'Funding Strategy & Procurement Support', <IconCoin />],
              ['Regulatory', 'Compliance, Reporting & Public Records', <IconClipboard />],
              ['Legal', 'Audit-Ready, Defensible Documentation', <IconScale />]
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

/// --- CONTACT ---
const Contact = ({ t }) => (
  <section id="contact" data-reveal style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 2rem', overflow: 'hidden' }}>
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
          Clear scope. Clear documentation. Clear delivery—so your environmental program holds up in the field and on the record.
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
const HowWeWorkPage = ({ t }) => (
  <section style={{ background: 'var(--cream)' }}>
    <header style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={heroHowVideo} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.24) 55%, rgba(0,0,0,0.12) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 55%, rgba(0,0,0,0.52) 100%)' }} />
      </div>

      <div data-reveal style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '9rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          <div style={{ color: 'rgba(242,237,194,0.72)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.75rem' }}>Our</div>
          <div style={{ color: 'rgba(242,237,194,0.92)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Approach</div>
        </div>

        <h1 className="page-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3.2rem, 7.4vw, 6.6rem)',
          fontWeight: 900,
          color: 'var(--cream)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '1.15rem',
          textShadow: '0 10px 40px rgba(0,0,0,0.35)'
        }}>
          How
          {' '}
          <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>We Work</span>
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'rgba(242,237,194,0.84)', maxWidth: 760, lineHeight: 1.75, fontWeight: 300 }}>
          JCrew Environmental Solution delivers environmental programs through clear scope, coordinated execution, and
          defensible documentation—so your infrastructure and compliance work holds up from planning through operations.
        </p>
      </div>
    </header>

    <section data-reveal style={{ padding: '6rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.22)',
          boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
          background: 'var(--forest-deep)'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.95) 0%, rgba(45,90,49,0.75) 50%, rgba(26,58,29,0.55) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '3.25rem 3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: 'var(--cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}>
              Four phases of
              {' '}
              <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>program delivery</span>
            </h2>
            <div className="slide-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {[
                { num: '01', title: 'Discovery & Scoping', desc: 'We clarify goals, constraints, stakeholders, and compliance requirements before any field work begins.' },
                { num: '02', title: 'Program Design', desc: 'We structure the work into phased deliverables with clear decision points, budgets, and accountability.' },
                { num: '03', title: 'Execution & Coordination', desc: 'We manage procurement, contractors, reporting, and stakeholder communication throughout delivery.' },
                { num: '04', title: 'Documentation & Handoff', desc: 'We compile audit-ready records, operational guidance, and continuity plans for long-term success.' }
              ].map(({ num, title, desc }) => (
                <div key={num} className="slide-card slide-card-dark">
                  <div style={{ color: 'var(--mint)', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{num}</div>
                  <div style={{ color: 'var(--cream)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</div>
                  <p style={{ color: 'rgba(242,237,194,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="slide-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            ['Technical Oversight', 'Engineering review, QA/QC coordination, and field accountability.'],
            ['Financial Planning', 'Grant alignment, capital planning, and procurement support.'],
            ['Regulatory Navigation', 'Permitting, compliance reporting, and public records.'],
            ['Stakeholder Management', 'Community engagement, agency coordination, and transparency.']
          ].map(([title, desc]) => (
            <div key={title} className="slide-card slide-card-light">
              <div style={{ color: 'var(--forest)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.6rem', letterSpacing: '0.02em' }}>{title}</div>
              <p style={{ color: 'rgba(45,90,49,0.72)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="how-consultation" data-reveal style={{ padding: '0 0 7rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900,
            color: 'var(--forest)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Ready to
            {' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>work together?</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Share your program scope, timeline, and constraints. We’ll propose a clear approach and next steps.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge" style={{ marginBottom: 0, color: 'var(--forest)', borderColor: 'rgba(121,174,111,0.35)', background: 'rgba(121,174,111,0.12)' }}>
              <span className="badge-dot" style={{ background: 'var(--forest)' }} />
              Call: (844) 878-7347
            </span>
          </div>
        </div>

        <div className="contact-card">
          <div style={{
            background: 'rgba(10,24,12,0.78)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(159,203,152,0.22)',
            borderRadius: '2rem',
            padding: '2.5rem',
            boxShadow: '0 28px 78px rgba(0,0,0,0.55)'
          }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.5rem', fontWeight: 700 }}>Start a conversation</h3>
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
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>Tell us about your program</label>
                <textarea rows={4} placeholder="Describe your environmental or infrastructure program..." className="form-input" style={{ resize: 'none' }} />
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
              <div style={{ color: 'rgba(242,237,194,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Submitting this form does not create any obligation. Information provided will be treated as confidential.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

const FundingAndAccountabilityPage = ({ t }) => (
  <section style={{ background: 'var(--cream)' }}>
    <header style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video autoPlay loop muted playsInline preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={heroFundingVideo} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.26) 55%, rgba(0,0,0,0.14) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 55%, rgba(0,0,0,0.48) 100%)' }} />
      </div>

      <div data-reveal style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', paddingTop: '9rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
          <div style={{ color: 'rgba(242,237,194,0.72)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.75rem' }}>Financial</div>
          <div style={{ color: 'rgba(242,237,194,0.92)', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Governance</div>
        </div>

        <h1 className="page-title" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(3.2rem, 7.4vw, 6.6rem)',
          fontWeight: 900,
          color: 'var(--cream)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '1.15rem',
          textShadow: '0 10px 40px rgba(0,0,0,0.35)'
        }}>
          Funding
          {' '}
          <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>& Accountability</span>
        </h1>

        <p style={{ fontSize: '1.15rem', color: 'rgba(242,237,194,0.84)', maxWidth: 760, lineHeight: 1.75, fontWeight: 300 }}>
          JCrew Environmental Solution structures environmental programs with clear financial pathways, grant alignment, and
          defensible accountability—ensuring every dollar is traceable and every deliverable is verifiable.
        </p>
      </div>
    </header>

    <section data-reveal style={{ padding: '6rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative',
          borderRadius: '2rem',
          overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.22)',
          boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
          background: 'var(--forest-deep)'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.95) 0%, rgba(45,90,49,0.75) 50%, rgba(26,58,29,0.55) 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '3.25rem 3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: 'var(--cream)',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}>
              Financial integrity,
              {' '}
              <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>programmatic accountability</span>
            </h2>
            <div className="slide-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { num: '01', title: 'Funding Strategy', desc: 'Grant alignment, capital stack planning, and resource optimization for long-horizon environmental programs.' },
                { num: '02', title: 'Procurement Support', desc: 'Transparent bidding, contractor qualification, and contract structures that protect public interest.' },
                { num: '03', title: 'Financial Reporting', desc: 'Clear documentation, milestone tracking, and audit-ready records for every phase of delivery.' },
                { num: '04', title: 'Risk Management', desc: 'Cost controls, contingency planning, and accountability frameworks that keep programs on track.' }
              ].map(({ num, title, desc }) => (
                <div key={num} className="slide-card slide-card-dark">
                  <div style={{ color: 'var(--mint)', fontWeight: 900, fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>{num}</div>
                  <div style={{ color: 'var(--cream)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>{title}</div>
                  <p style={{ color: 'rgba(242,237,194,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div className="slide-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            ['Grant Writing', 'Federal, state, and foundation funding applications with technical clarity.'],
            ['Budget Planning', 'Phased allocation, contingency reserves, and cash flow management.'],
            ['Contract Oversight', 'Scope verification, change order management, and payment authorization.'],
            ['Audit Readiness', 'Documentation systems, compliance tracking, and transparency protocols.']
          ].map(([title, desc]) => (
            <div key={title} className="slide-card slide-card-light">
              <div style={{ color: 'var(--forest)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.6rem', letterSpacing: '0.02em' }}>{title}</div>
              <p style={{ color: 'rgba(45,90,49,0.72)', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="funding-consultation" data-reveal style={{ padding: '0 0 7rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900,
            color: 'var(--forest)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Let's discuss
            {' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>your funding strategy</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Share your program scope and budget constraints. We'll propose a funding and accountability framework tailored to your environmental goals.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge" style={{ marginBottom: 0, color: 'var(--forest)', borderColor: 'rgba(121,174,111,0.35)', background: 'rgba(121,174,111,0.12)' }}>
              <span className="badge-dot" style={{ background: 'var(--forest)' }} />
              Call: (844) 878-7347
            </span>
          </div>
        </div>

        <div className="contact-card">
          <div style={{
            background: 'rgba(10,24,12,0.78)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(159,203,152,0.22)',
            borderRadius: '2rem',
            padding: '2.5rem',
            boxShadow: '0 28px 78px rgba(0,0,0,0.55)'
          }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--cream)', marginBottom: '0.5rem', fontWeight: 700 }}>Request a consultation</h3>
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
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--mint)', marginBottom: '0.5rem' }}>Funding or Accountability Needs</label>
                <textarea rows={4} placeholder="Describe your financial planning, grant, or accountability requirements..." className="form-input" style={{ resize: 'none' }} />
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
              <div style={{ color: 'rgba(242,237,194,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Submitting this form does not create any obligation. Information provided will be treated as confidential.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

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
  const t = translations.en;

  const [activeSection, setActiveSection] = useState('');

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

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    revealEls.forEach((el) => {
      el.classList.add('reveal');
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [route, loading]);

  // Slide-in animation for How We Work cards - triggers on scroll
  useEffect(() => {
    if (loading) return;

    // Small delay to let React render complete
    const initTimer = setTimeout(() => {
      const slideCards = Array.from(document.querySelectorAll('.slide-card'));
      if (slideCards.length === 0) return;

      // Add animate class to enable animation states
      slideCards.forEach((card) => card.classList.add('animate'));

      // Function to reveal a card
      const revealCard = (card, delay = 0) => {
        setTimeout(() => {
          card.classList.add('revealed');
        }, delay);
      };

      // Check which cards are already in viewport
      const checkAndReveal = () => {
        slideCards.forEach((card, index) => {
          if (card.classList.contains('revealed')) return;

          const rect = card.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // Card is in viewport if its top is within 80% of screen height
          const isInViewport = rect.top < viewportHeight * 0.85 && rect.bottom > 0;

          if (isInViewport) {
            revealCard(card, index * 120); // Stagger delay
          }
        });
      };

      // Initial check
      checkAndReveal();

      // Set up observer for cards not yet visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const card = entry.target;
            if (entry.isIntersecting && !card.classList.contains('revealed')) {
              const index = slideCards.indexOf(card);
              revealCard(card, index * 120);
              observer.unobserve(card);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
      );

      // Observe cards that aren't revealed yet
      slideCards.forEach((card) => {
        if (!card.classList.contains('revealed')) {
          observer.observe(card);
        }
      });

      // Also listen to scroll as backup
      const handleScroll = () => {
        checkAndReveal();
      };
      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, 150);

    return () => clearTimeout(initTimer);
  }, [route, loading]);

  useEffect(() => {
    if (route !== '') return;

    const sections = ['sectors', 'pfas-response', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.35, 0.5, 0.65], rootMargin: '-20% 0px -55% 0px' }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
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
        <Navbar t={t} forceSolid={route !== ''} activeRoute={route} activeSection={activeSection} />
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
                {route === '/clean-energy-vision' && <CleanEnergyVisionPage t={t} />}
                {route === '/pfas-response-division' && <PFASResponseDivisionPage t={t} />}
                {route === '/how-we-work' && <HowWeWorkPage t={t} />}
                {route === '/funding-and-accountability' && <FundingAndAccountabilityPage t={t} />}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}