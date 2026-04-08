import React from 'react';
import { IconCheck } from '../components/icons';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

import heroPFASVideo from '../assets/Hero-PSAF-small.mp4';
import riverImg from '../assets/river1.webp';
import wastewater2Img from '../assets/wastewater2.webp';
import waterTreatmentPlantImg from '../assets/water-treatment-plant.webp';

const pfasCapabilities = [
  { title: 'Investigation Program Management', desc: 'Coordinating sampling events, QA/QC, and laboratory turnaround to build a coherent site characterization record.' },
  { title: 'Regulatory Coordination', desc: 'Managing agency communication, RFI responses, and compliance milestone tracking across jurisdictions.' },
  { title: 'Procurement & Contractor Management', desc: 'Developing scopes of work, qualifying vendors, and overseeing field contractors through delivery.' },
  { title: 'Public Records & Reporting', desc: 'Building documentation systems that are organized, transparent, and defensible in public records requests.' },
  { title: 'Stakeholder Communication', desc: 'Coordinating among legal counsel, regulatory agencies, consultants, and affected communities.' },
  { title: 'Remediation Program Structuring', desc: 'Translating investigation findings into scoped remediation programs with phased delivery and clear budgets.' },
];

const serviceCards = [
  ['Sampling & QA/QC', 'Field coordination and data integrity support across multi-phase investigations.'],
  ['Program Documentation', 'Audit-ready files, reporting packages, and decision logs for every phase.'],
  ['Stakeholder Alignment', 'Agencies, consultants, legal teams, and community coordination in one managed workflow.'],
  ['Implementation Support', 'From investigation findings to scoped remediation procurement and delivery.'],
];

const PFASResponseDivisionPage = ({ t }) => (
  <section style={{ background: 'var(--cream)' }}>
    <PageHero
      videoSrc={heroPFASVideo}
      eyebrow1="PFAS"
      eyebrow2="Response Division"
      titlePlain="Programs"
      titleItalic="PFAS"
      titleItalicFirst={true}
      description="JCrew Environmental Solution supports agencies and facilities with PFAS investigation coordination, program management, and reporting—built to stand up to audits, public records, and long-term operational realities."
    />

    {/* Main capability card */}
    <section data-reveal style={{ padding: '7rem 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{
          position: 'relative', borderRadius: '2.25rem', overflow: 'hidden',
          border: '1px solid rgba(121,174,111,0.18)',
          boxShadow: '0 24px 80px rgba(26,58,29,0.1)',
          backgroundImage: `url(${riverImg})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(242,237,194,0.84)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.16) 0%, rgba(26,58,29,0.05) 60%, transparent 100%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '3.5rem 3.25rem' }}>
            <div style={{ color: 'var(--forest-light)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
              Compliance-First Program Structure
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
              fontWeight: 900, lineHeight: 1.05, color: 'var(--forest)',
              letterSpacing: '-0.02em', marginBottom: '1rem'
            }}>
              Built for compliance{' '}
              <span style={{ color: 'var(--sage)', fontStyle: 'italic' }}>and public accountability</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(45,90,49,0.7)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 780 }}>
              PFAS programs require coordinated sampling strategy, stakeholder communication, procurement discipline, and defensible
              documentation. We help turn investigation and remediation tasks into a managed program with clear deliverables.
            </p>

            {/* Service cards grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.15rem', marginBottom: '2rem' }}>
              {serviceCards.map(([title, sub]) => (
                <div key={title} style={{
                  border: '1px solid rgba(121,174,111,0.22)', borderRadius: '1.5rem',
                  background: 'rgba(255,255,255,0.68)', padding: '1.5rem 1.5rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(26,58,29,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <div style={{ fontWeight: 900, color: 'var(--forest)', marginBottom: '0.55rem', letterSpacing: '0.01em', fontSize: '0.98rem' }}>{title}</div>
                  <div style={{ color: 'rgba(45,90,49,0.68)', lineHeight: 1.65, fontSize: '0.88rem' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Full capabilities list */}
    <section data-reveal style={{ padding: '0 0 5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '2.25rem' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--forest)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            What we deliver
          </h3>
          <p style={{ color: 'rgba(45,90,49,0.62)', fontSize: '1rem', lineHeight: 1.65, maxWidth: 560 }}>
            A structured PFAS program that moves from investigation through remediation with defensible documentation at every step.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.15rem' }}>
          {pfasCapabilities.map(({ title, desc }) => (
            <div key={title} className="info-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconCheck /></span>
                <div style={{ color: 'var(--forest)', fontWeight: 800, fontSize: '0.98rem', letterSpacing: '0.01em' }}>{title}</div>
              </div>
              <p style={{ color: 'rgba(45,90,49,0.68)', lineHeight: 1.7, fontSize: '0.9rem', paddingLeft: '1.6rem' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image panels */}
    <section data-reveal style={{ padding: '0 0 6rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { img: wastewater2Img, title: 'Wastewater systems', sub: 'Planning and coordination for monitoring, treatment, and reporting workflows.' },
            { img: waterTreatmentPlantImg, title: 'Water treatment plants', sub: 'Support for compliance programs, procurement packages, and operational continuity.' },
          ].map(({ img, title, sub }) => (
            <div key={title} style={{
              position: 'relative', borderRadius: '2rem', overflow: 'hidden',
              border: '1px solid rgba(121,174,111,0.18)',
              boxShadow: '0 20px 70px rgba(26,58,29,0.12)',
              minHeight: 300,
              backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,58,29,0.8) 0%, rgba(26,58,29,0.4) 55%, rgba(26,58,29,0.22) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 2, padding: '2.5rem 2.25rem' }}>
                <div style={{ color: 'rgba(159,203,152,0.85)', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.68rem', marginBottom: '0.9rem' }}>PFAS program delivery</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)', color: 'var(--cream)', lineHeight: 1.1, marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'rgba(242,237,194,0.72)', lineHeight: 1.75, fontSize: '0.98rem', maxWidth: 480 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Consultation */}
    <section id="pfas-consultation" data-reveal style={{ padding: '0 0 8rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }} className="contact-grid">
        <div className="contact-details">
          <div style={{ color: 'var(--forest-light)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
            PFAS Response Division
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
            No obligation. We'll review your PFAS program scope, deadlines, stakeholders, and documentation requirements and recommend a
            defensible next-step plan.
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
            textareaPlaceholder="Briefly describe your PFAS program needs..."
          />
        </div>
      </div>
    </section>
  </section>
);

export default PFASResponseDivisionPage;
