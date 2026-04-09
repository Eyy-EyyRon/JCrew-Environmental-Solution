import React from 'react';

/* Simplified SVG icons representing each agency */
const EPALogo = () => (
  <svg viewBox="0 0 120 40" fill="none" style={{ height: 28 }}>
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M13 14h14M13 20h10M13 26h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <text x="42" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.5">EPA</text>
  </svg>
);

const USDALogo = () => (
  <svg viewBox="0 0 130 40" fill="none" style={{ height: 28 }}>
    <path d="M20 6c-4 6-10 12-10 20a14 14 0 0028 0c0-8-6-14-10-20a70 70 0 01-8 0z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M16 22c2-3 5-4 8 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <text x="44" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.5">USDA</text>
  </svg>
);

const DOELogo = () => (
  <svg viewBox="0 0 120 40" fill="none" style={{ height: 28 }}>
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <path d="M20 6v6M20 28v6M6 20h6M28 20h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <text x="42" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.5">DOE</text>
  </svg>
);

const FEMALogo = () => (
  <svg viewBox="0 0 140 40" fill="none" style={{ height: 28 }}>
    <path d="M10 30L20 8l10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M14 22h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.6" />
    <text x="38" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.5">FEMA</text>
  </svg>
);

const HUDLogo = () => (
  <svg viewBox="0 0 120 40" fill="none" style={{ height: 28 }}>
    <path d="M8 30V16l12-8 12 8v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="16" y="22" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <text x="38" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="13" fontWeight="700" letterSpacing="0.5">HUD</text>
  </svg>
);

const ArmyCorpsLogo = () => (
  <svg viewBox="0 0 190 40" fill="none" style={{ height: 28 }}>
    <rect x="6" y="12" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 12V8h16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 18v8M16 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <text x="42" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.3">ARMY CORPS</text>
  </svg>
);

const StateDEPLogo = () => (
  <svg viewBox="0 0 170 40" fill="none" style={{ height: 28 }}>
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M14 16c2-2 4-2 6 0s4 2 6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    <path d="M14 22c2-2 4-2 6 0s4 2 6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    <text x="42" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.3">STATE DEP</text>
  </svg>
);

const WaterAuthLogo = () => (
  <svg viewBox="0 0 210 40" fill="none" style={{ height: 28 }}>
    <path d="M20 6c-6 8-12 14-12 22a12 12 0 0024 0c0-8-6-14-12-22z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M14 24c2-1.5 4-1.5 6 0s4 1.5 6 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <text x="40" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.3">WATER AUTH</text>
  </svg>
);

const MunicipalLogo = () => (
  <svg viewBox="0 0 190 40" fill="none" style={{ height: 28 }}>
    <rect x="8" y="18" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M8 18l12-10 12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <rect x="16" y="24" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <text x="40" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.3">MUNICIPAL</text>
  </svg>
);

const TribalLogo = () => (
  <svg viewBox="0 0 210 40" fill="none" style={{ height: 28 }}>
    <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M20 8v24M12 12l16 16M28 12L12 28M8 20h24" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <text x="42" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.3">TRIBAL NATIONS</text>
  </svg>
);

const RuralUtilLogo = () => (
  <svg viewBox="0 0 210 40" fill="none" style={{ height: 28 }}>
    <path d="M10 30V18l6-4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 30V14l6-4v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 30V10l6-4v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 30h24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <text x="38" y="26" fill="currentColor" fontFamily="'DM Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="0.3">RURAL UTILITIES</text>
  </svg>
);

const logos = [
  <EPALogo />, <USDALogo />, <DOELogo />, <FEMALogo />, <HUDLogo />,
  <ArmyCorpsLogo />, <StateDEPLogo />, <WaterAuthLogo />,
  <MunicipalLogo />, <TribalLogo />, <RuralUtilLogo />,
];

const LogoMarquee = () => (
  <section style={{ padding: '3rem 0', overflow: 'hidden', background: 'var(--forest-deep)', borderTop: '1px solid rgba(121,174,111,0.08)', borderBottom: '1px solid rgba(121,174,111,0.08)' }}>
    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(159,203,152,0.45)' }}>
        Trusted by agencies & institutions
      </span>
    </div>
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '0.55rem 1.75rem', minWidth: 140,
            border: '1px solid rgba(121,174,111,0.12)', borderRadius: '999px',
            color: 'rgba(242,237,194,0.4)',
            flexShrink: 0, transition: 'color 0.3s, border-color 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'rgba(242,237,194,0.7)'; e.currentTarget.style.borderColor = 'rgba(159,203,152,0.3)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(242,237,194,0.4)'; e.currentTarget.style.borderColor = 'rgba(121,174,111,0.12)'; }}
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoMarquee;
