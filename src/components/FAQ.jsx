import React, { useState } from 'react';

const ChevronIcon = ({ open }) => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.3s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const FAQItem = ({ q, a, open, onClick }) => (
  <div style={{
    borderRadius: '0.85rem', overflow: 'hidden',
    background: open ? 'rgba(45,90,49,0.12)' : 'transparent',
    border: '1px solid',
    borderColor: open ? 'rgba(121,174,111,0.25)' : 'rgba(121,174,111,0.1)',
    transition: 'background 0.3s, border-color 0.3s',
  }}>
    <button onClick={onClick} style={{
      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '0.75rem', padding: '0.9rem 1.1rem',
      background: 'none', border: 'none', cursor: 'pointer',
      textAlign: 'left', color: open ? 'var(--cream)' : 'rgba(242,237,194,0.72)',
      fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 600,
      transition: 'color 0.3s',
    }}>
      <span>{q}</span>
      <ChevronIcon open={open} />
    </button>
    <div style={{
      maxHeight: open ? '600px' : '0', opacity: open ? 1 : 0,
      overflow: 'hidden',
      transition: 'max-height 0.35s ease, opacity 0.25s ease, padding 0.3s ease',
      padding: open ? '0 1.1rem 0.9rem' : '0 1.1rem',
    }}>
      <p style={{ fontSize: '0.8rem', lineHeight: 1.7, color: 'rgba(242,237,194,0.48)', margin: 0 }}>{a}</p>
    </div>
  </div>
);

const categories = [
  { key: 'general', label: 'General' },
  { key: 'energy', label: 'Clean Energy' },
  { key: 'pfas', label: 'PFAS' },
  { key: 'process', label: 'Process' },
  { key: 'funding', label: 'Funding' },
];

const allFAQs = {
  general: [
    { q: 'What types of organizations does JCrew work with?', a: 'We primarily serve public agencies, municipalities, water authorities, and utilities managing complex environmental infrastructure programs. We also support private entities involved in public-sector compliance and federally funded projects.' },
    { q: 'How quickly can a program be initiated?', a: 'Most engagements begin within 2–4 weeks of the initial consultation. Timeline depends on regulatory requirements, stakeholder alignment, and project scope. We provide a clear implementation roadmap during our first assessment.' },
    { q: 'Do you provide equipment or construction services directly?', a: 'No. JCrew is a program integrator, not an equipment vendor or general contractor. We organize, align, and manage the full delivery ecosystem—coordinating procurement, permitting, workforce, and operations on your behalf.' },
    { q: 'Is the initial consultation free?', a: 'Yes. The initial conversation is exploratory and confidential—an opportunity to understand your goals, constraints, and timeline, and to determine whether a structured program approach is the right fit.' },
    { q: 'What geographic areas do you serve?', a: 'We operate across the United States with particular experience in the Northeast and Mid-Atlantic regions. Our headquarters is in West Hazleton, Pennsylvania, but our team deploys nationally for field execution and program management.' },
  ],
  energy: [
    { q: 'What clean energy technologies do you support?', a: 'We support anaerobic digestion, biomass-to-energy, biogas upgrading, renewable natural gas (RNG), combined heat and power (CHP), and waste-to-energy systems. Technology selection is driven by feedstock availability and site conditions.' },
    { q: 'How long does a typical clean energy project take?', a: 'From feasibility through commissioning, most projects span 18–36 months. We structure the program in phases—feasibility, permitting, procurement, construction, and operations—with clear milestones at each stage.' },
    { q: 'Do you help secure funding for clean energy projects?', a: 'Yes. We identify and align federal, state, and private funding sources including IRA incentives, USDA programs, state energy grants, and private offtake agreements.' },
    { q: 'What happens after the facility is built?', a: 'We provide long-term operations support including performance monitoring, compliance reporting, maintenance coordination, and offtake management to ensure sustained value.' },
    { q: 'Can you work with existing waste infrastructure?', a: 'Absolutely. Many of our programs integrate with existing wastewater treatment, solid waste, or agricultural operations. We design energy recovery systems that complement what is already in place.' },
  ],
  pfas: [
    { q: 'What PFAS services does JCrew provide?', a: 'End-to-end PFAS program management including site investigation, sampling and analysis, remediation planning, regulatory compliance documentation, stakeholder communication, and long-term monitoring.' },
    { q: 'Which PFAS regulations do you address?', a: 'We work across federal EPA guidelines, state-specific MCLs, and emerging regulatory frameworks. Our team stays current with evolving PFAS standards to ensure full compliance.' },
    { q: 'How do you handle PFAS in drinking water?', a: 'We manage treatment system evaluations, pilot testing, technology selection (GAC, IX, RO/NF), and full-scale implementation—all backed by defensible data.' },
    { q: 'Can you support litigation or regulatory defense?', a: 'We produce the technical documentation, chain-of-custody records, and defensible program narratives that legal teams rely on for regulatory proceedings and enforcement responses.' },
    { q: 'What about community communication on PFAS?', a: 'We develop clear, transparent communication materials for public meetings, stakeholder briefings, and regulatory reporting. Trust and clarity are essential.' },
  ],
  process: [
    { q: 'What does "program integration" mean?', a: 'We serve as the single point of coordination across all workstreams—procurement, permitting, environmental review, workforce readiness, construction delivery, and long-term operations.' },
    { q: 'How is JCrew different from a traditional consultant?', a: 'Traditional consultants advise. We execute. JCrew takes ownership of program delivery—managing schedules, budgets, stakeholders, and field operations with clear accountability.' },
    { q: 'What does your reporting look like?', a: 'Structured milestone reports, budget tracking, compliance documentation, and executive summaries—designed to withstand audit and regulatory review.' },
    { q: 'Can you join a program already underway?', a: 'Yes. We frequently step into programs that need additional structure, accountability, or execution capacity, integrating seamlessly with existing teams.' },
    { q: 'How do you ensure quality across workstreams?', a: 'Disciplined program management—defined scopes, documented processes, regular check-ins, and a single accountable program lead.' },
  ],
  funding: [
    { q: 'What funding sources do you work with?', a: 'Federal grants (EPA, USDA, DOE, FEMA), state revolving funds (SRF/DWSRF), IRA and IIJA allocations, private capital, and public-private partnerships.' },
    { q: 'Do you write grant applications?', a: 'Yes. We prepare complete applications including technical narratives, budget justifications, environmental reviews, and supporting documentation structured to meet scoring criteria.' },
    { q: 'How do you handle compliance reporting?', a: 'We design and implement reporting frameworks covering financial tracking, milestone documentation, Davis-Bacon compliance, environmental justice metrics, and audit-ready records.' },
    { q: 'Can you help post-award?', a: 'Absolutely. We support drawdown scheduling, quarterly reporting, compliance monitoring, and closeout documentation to ensure all grant conditions are met.' },
    { q: 'What is your success rate with applications?', a: 'Our structured approach—rooted in defensible technical narratives and precise budget alignment—has consistently delivered strong results for our clients.' },
  ],
};

const FAQWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setOpenIndex(null);
  };

  return (
    <>
      {/* Floating circle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-fab"
        style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: 'var(--forest)', color: 'var(--cream)',
          border: '2px solid rgba(159,203,152,0.3)',
          boxShadow: '0 8px 32px rgba(26,58,29,0.4)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 800,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,58,29,0.5)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(26,58,29,0.4)'; }}
      >
        {isOpen ? <CloseIcon /> : 'FAQ'}
      </button>

      {/* Panel */}
      <div style={{
        position: 'fixed', bottom: '5.5rem', right: '2rem', zIndex: 9998,
        width: 380, maxHeight: '70vh',
        borderRadius: '1.25rem', overflow: 'hidden',
        background: 'var(--forest-deep)',
        border: '1px solid rgba(159,203,152,0.18)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column',
        transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.95)',
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.25s ease',
        transformOrigin: 'bottom right',
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.25rem 0.75rem',
          borderBottom: '1px solid rgba(121,174,111,0.12)',
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontSize: '1.15rem',
            color: 'var(--cream)', fontWeight: 700, margin: '0 0 0.3rem',
          }}>
            Frequently Asked Questions
          </h3>
          <p style={{ fontSize: '0.75rem', color: 'rgba(242,237,194,0.38)', margin: 0 }}>
            Select a topic below
          </p>
        </div>

        {/* Category tabs */}
        <div style={{
          display: 'flex', gap: '0.35rem', padding: '0.75rem 1.25rem',
          overflowX: 'auto', flexShrink: 0,
        }}>
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              style={{
                padding: '0.35rem 0.75rem', borderRadius: '999px',
                fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', whiteSpace: 'nowrap',
                border: '1px solid',
                borderColor: activeTab === key ? 'rgba(159,203,152,0.4)' : 'rgba(121,174,111,0.15)',
                background: activeTab === key ? 'rgba(159,203,152,0.15)' : 'transparent',
                color: activeTab === key ? 'var(--mint)' : 'rgba(242,237,194,0.45)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQ items */}
        <div className="faq-scroll" style={{
          flex: 1, overflowY: 'auto', padding: '0.5rem 1.25rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          maxHeight: 'calc(70vh - 140px)', paddingBottom: '1.5rem',
        }}>
          {allFAQs[activeTab].map((item, i) => (
            <FAQItem
              key={`${activeTab}-${i}`}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQWidget;
