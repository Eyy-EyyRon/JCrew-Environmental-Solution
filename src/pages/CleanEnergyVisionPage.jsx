import React from 'react';
import { IconArrowRight, IconCheck } from '../components/icons';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

import heroEnergyVideo from '../assets/Hero-Energy-small.mp4';
import cleanEnergyImg from '../assets/clean-energy.webp';
import cleanEnergy1Img from '../assets/clean energy1.webp';
import cleanEnergy2Img from '../assets/clean energy2.jpg';
import biomassImg from '../assets/wooden-fuel-for-bio-power-plant-1024x714.webp';
import nuclearImg from '../assets/nuclear-power-plant-cooling-towers-51828269.webp';
import hydroelectricImg from '../assets/hydroelectric.webp';
import geothermalImg from '../assets/aerial-view-of-geothermal-power-plant.webp';
import bambooImg from '../assets/bamboo.jpg';

const deliverables = [
  'Feedstock sourcing and long-term supply alignment',
  'Technology evaluation and integration planning (non-proprietary)',
  'Project siting, stakeholder alignment, and community engagement',
  'Offtake strategy and end-market coordination (aviation, industrial, and grid)',
  'Permitting pathway, environmental review, and compliance planning',
  'Financing readiness support and capital stack coordination',
  'Workforce readiness and local supplier participation planning',
  'Delivery oversight through construction, commissioning, and handoff',
  'Ongoing performance reporting and operational continuity planning',
];

const energySources = [
  { title: 'Biomass & Bio-Power', img: biomassImg },
  { title: 'Nuclear & Grid Reliability', img: nuclearImg },
  { title: 'Hydroelectric Systems', img: hydroelectricImg },
  { title: 'Geothermal Generation', img: geothermalImg },
];

const CleanEnergyVisionPage = ({ t }) => (
  <section style={{ background: 'var(--cream)' }}>
    <PageHero
      videoSrc={heroEnergyVideo}
      eyebrow1="From Waste &amp; Infrastructure"
      eyebrow2="Clean Energy Division"
      titlePlain="Integrated"
      titleItalic="Clean Energy"
      description="The Clean Energy Division of JCrew Environmental Solution designs and coordinates waste-to-clean-energy programs that reduce landfill dependence, stabilize operating costs, and deliver measurable emissions reduction through clean fuels and electrification pathways."
    />

    {/* Main content card */}
    <section data-reveal style={{ padding: '7rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative', borderRadius: '2.25rem', overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.2)',
          boxShadow: '0 24px 80px rgba(26,58,29,0.12)',
          backgroundImage: `url(${cleanEnergyImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          minHeight: 560,
          display: 'flex',
        }}>
          {/* Full-bg subtle overlay — image visible everywhere */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(242,237,194,0.72)' }} />
          {/* Left-side gentle vignette to improve text legibility */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(242,237,194,0.45) 0%, rgba(242,237,194,0.18) 55%, rgba(242,237,194,0) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.12) 0%, transparent 60%)' }} />

          {/* Left: text content */}
          <div className="card-text-right" style={{ position: 'relative', zIndex: 2, padding: '3.5rem 3.25rem', marginLeft: 0, width: '58%', minWidth: 320 }}>
            <div style={{ color: 'var(--forest-light)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
              End-to-End Program Integration
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
              fontWeight: 900, lineHeight: 1.05, color: 'var(--forest)',
              letterSpacing: '-0.02em', marginBottom: '1rem'
            }}>
              Designed for execution,{' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>built for delivery</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(45,90,49,0.72)', lineHeight: 1.8, marginBottom: '1rem' }}>
              We manage multi-stakeholder clean energy programs end-to-end—aligning feedstock, permitting, offtake, and financing into a
              deliverable infrastructure plan with clear reporting and accountability.
            </p>
            <p style={{ fontSize: '1rem', color: 'rgba(45,90,49,0.68)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Clean energy projects are long-horizon infrastructure programs—not demos. Success requires disciplined coordination across
              procurement, environmental review, permitting, workforce readiness, construction delivery, and long-term operations.
            </p>

            {/* Deliverables panel */}
            <div style={{
              border: '1px solid rgba(121,174,111,0.25)', borderRadius: '1.75rem',
              padding: '1.75rem 1.75rem', background: 'rgba(255,255,255,0.65)',
              backdropFilter: 'blur(12px)'
            }}>
              <div style={{ fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--forest)', marginBottom: '1.1rem', fontSize: '0.75rem' }}>
                Program Integrator Scope
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {deliverables.map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{ marginTop: '1px', flexShrink: 0 }}><IconCheck /></span>
                    <span style={{ color: 'rgba(45,90,49,0.75)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(121,174,111,0.4), transparent)', margin: '1.25rem 0 1rem' }} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ background: 'var(--forest)', color: 'var(--cream)', borderRadius: '999px', padding: '0.4rem 1.1rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Not an equipment vendor
                </div>
                <span style={{ color: 'rgba(45,90,49,0.65)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  We organize, align, and manage the full delivery ecosystem.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Two-panel imagery */}
    <section data-reveal style={{ padding: '0 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            { img: cleanEnergy1Img, label: 'Project delivery clarity', sub: 'Scope, permitting, procurement, and reporting—organized into a single execution plan.', delay: '0ms' },
            { img: cleanEnergy2Img, label: 'Infrastructure-ready outcomes', sub: 'Programs structured for financing readiness, construction delivery, and long-term operations.', delay: '150ms' },
          ].map(({ img, label, sub, delay }) => (
            <div key={label} className="panel-slide-in" style={{
              position: 'relative', borderRadius: '2rem', overflow: 'hidden',
              border: '1px solid rgba(121,174,111,0.18)',
              boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
              minHeight: 360,
              backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
              animationDelay: delay,
            }}>
              {/* Subtle full-bg overlay — image visible everywhere */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,29,0.42)' }} />
              {/* Left-side text legibility boost */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(26,58,29,0.55) 0%, rgba(26,58,29,0.18) 55%, rgba(26,58,29,0) 100%)' }} />
              {/* Text anchored bottom-left */}
              <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2.5rem 2.25rem' }}>
                <div style={{ color: 'rgba(159,203,152,0.9)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.65rem', marginBottom: '0.65rem' }}>Clean energy delivery</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.6rem' }}>{label}</h3>
                <p style={{ color: 'rgba(242,237,194,0.72)', lineHeight: 1.7, fontSize: '0.9rem', maxWidth: 380 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Energy source grid */}
    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--forest)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Clean energy pathways we support
          </h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.15rem' }}>
          {energySources.map(({ title, img }, i) => (
            <div key={title} className="energy-card-slide" style={{
              position: 'relative', borderRadius: '1.75rem', overflow: 'hidden',
              border: '1px solid rgba(121,174,111,0.2)',
              boxShadow: '0 16px 50px rgba(26,58,29,0.12)',
              minHeight: 280,
              backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
              animationDelay: `${i * 100}ms`,
              transition: 'transform 0.35s ease, box-shadow 0.35s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.01)'; e.currentTarget.style.boxShadow = '0 28px 70px rgba(26,58,29,0.22)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 16px 50px rgba(26,58,29,0.12)'; }}
            >
              {/* Very light full-bg overlay — image dominant */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,58,29,0.28)' }} />
              {/* Bottom fade for label readability */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,58,29,0.82) 0%, rgba(26,58,29,0.15) 45%, rgba(26,58,29,0) 70%)' }} />
              {/* Label bottom-left */}
              <div style={{ position: 'absolute', left: '1.25rem', right: '1.25rem', bottom: '1.25rem', zIndex: 2 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '0.35rem 0.9rem', borderRadius: '999px',
                  border: '1px solid rgba(242,237,194,0.25)',
                  background: 'rgba(26,58,29,0.5)',
                  backdropFilter: 'blur(6px)',
                  color: 'rgba(242,237,194,0.95)',
                  fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase'
                }}>{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Environmental justice banner */}
    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ position: 'relative', borderRadius: '2.25rem', overflow: 'hidden', background: 'var(--forest-deep)', border: '1px solid rgba(159,203,152,0.12)' }}>
          <img src={bambooImg} alt="Sustainable materials" loading="lazy" decoding="async"
            style={{ width: '100%', height: 420, objectFit: 'cover', opacity: 0.3, filter: 'blur(1px) saturate(0.9)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(26,58,29,0.95) 0%, rgba(45,90,49,0.65) 55%, rgba(26,58,29,0.45) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, padding: '3.5rem 3.25rem', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ maxWidth: 760 }}>
              <div style={{ color: 'rgba(159,203,152,0.8)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.68rem', marginBottom: '0.85rem' }}>
                Community-Centered Programs
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4.6vw, 3.25rem)', color: 'var(--cream)', lineHeight: 1.05, marginBottom: '0.9rem' }}>
                Aligned with Environmental Justice,{' '}
                <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>workforce readiness</span>
              </h3>
              <p style={{ color: 'rgba(242,237,194,0.78)', lineHeight: 1.8, fontSize: '1.02rem', maxWidth: 640 }}>
                JCrew Environmental Solution aligns clean energy work with environmental justice, workforce readiness, and domestic
                supply-chain priorities. Programs are structured to deliver long-term public value through jobs, durable infrastructure,
                and transparent reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Consultation section */}
    <section id="clean-energy-consultation" data-reveal style={{ padding: '0 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <div style={{ color: 'var(--forest-light)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
            Clean Energy Division
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
            fontWeight: 900, color: 'var(--forest)',
            lineHeight: 1.02, letterSpacing: '-0.02em', marginBottom: '1.25rem'
          }}>
            Start with a{' '}
            <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>confidential conversation</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.7)', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: 440 }}>
            No obligation. An initial conversation is exploratory—an opportunity to understand your goals, constraints, and timeline,
            and to determine whether a clean energy program is feasible for your waste streams and infrastructure.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge" style={{ marginBottom: 0, color: 'var(--forest)', borderColor: 'rgba(121,174,111,0.35)', background: 'rgba(121,174,111,0.1)' }}>
              <span className="badge-dot" style={{ background: 'var(--forest)' }} />
              Call: (844) 878-7347
            </span>
          </div>
        </div>
        <div className="contact-card">
          <ContactForm t={t}
            title="Send a Request"
            subtitle="We typically respond within 24 hours."
            textareaLabel="Assistance Required"
            textareaPlaceholder="Briefly describe your clean energy infrastructure program..."
          />
        </div>
      </div>
    </section>
  </section>
);

export default CleanEnergyVisionPage;
