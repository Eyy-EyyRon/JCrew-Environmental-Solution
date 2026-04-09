import React, { useState } from 'react';

const activeStates = {
  PA: { name: 'Pennsylvania', info: 'Headquarters — West Hazleton' },
  NJ: { name: 'New Jersey', info: 'PFAS response & water treatment' },
  NY: { name: 'New York', info: 'Clean energy & infrastructure' },
  DE: { name: 'Delaware', info: 'Environmental compliance' },
  MD: { name: 'Maryland', info: 'Funding & accountability' },
  VA: { name: 'Virginia', info: 'Program integration' },
  CT: { name: 'Connecticut', info: 'PFAS investigation' },
  MA: { name: 'Massachusetts', info: 'Clean energy programs' },
  OH: { name: 'Ohio', info: 'Infrastructure delivery' },
  WV: { name: 'West Virginia', info: 'Environmental remediation' },
  NC: { name: 'North Carolina', info: 'Water infrastructure' },
  FL: { name: 'Florida', info: 'PFAS & water treatment' },
};

const statePaths = {
  PA: 'M731,218 L780,210 L790,230 L785,250 L740,260 L720,245 Z',
  NJ: 'M790,220 L800,215 L808,240 L800,265 L790,260 L785,250 L790,230 Z',
  NY: 'M730,160 L790,145 L800,175 L800,215 L780,210 L731,218 L720,195 Z',
  DE: 'M788,262 L798,258 L800,275 L792,278 Z',
  MD: 'M740,260 L785,250 L790,260 L798,258 L800,275 L780,280 L750,278 L735,270 Z',
  VA: 'M680,280 L735,270 L750,278 L780,280 L770,310 L720,320 L670,305 Z',
  CT: 'M795,180 L810,175 L815,190 L800,195 Z',
  MA: 'M795,165 L825,158 L830,172 L810,175 L795,180 Z',
  OH: 'M660,210 L710,200 L720,245 L720,260 L680,260 L660,240 Z',
  WV: 'M660,260 L680,260 L700,265 L710,280 L700,300 L680,290 L660,280 Z',
  NC: 'M670,305 L720,320 L770,310 L760,340 L700,350 L665,335 Z',
  FL: 'M680,370 L720,360 L740,380 L730,440 L710,470 L690,450 L680,410 Z',
};

const ServiceMap = () => {
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  return (
    <section data-reveal style={{ padding: '6rem 0', background: 'var(--forest-deep)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ color: 'rgba(159,203,152,0.7)', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Coverage Area
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 900, color: 'var(--cream)', lineHeight: 1.1,
            letterSpacing: '-0.02em', marginBottom: '0.5rem',
          }}>
            Where we <span style={{ color: 'var(--mint)', fontStyle: 'italic' }}>operate</span>
          </h2>
          <p style={{ fontSize: '0.92rem', color: 'rgba(242,237,194,0.4)', maxWidth: 480, margin: '0 auto' }}>
            Headquartered in Pennsylvania, deployed nationally
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto' }}>
          <svg
            viewBox="550 130 350 370"
            style={{ width: '100%', height: 'auto' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            {/* Background US outline hint */}
            <rect x="555" y="135" width="340" height="360" rx="12" fill="rgba(159,203,152,0.03)" stroke="rgba(159,203,152,0.08)" strokeWidth="1" />

            {Object.entries(statePaths).map(([code, d]) => (
              <path
                key={code}
                d={d}
                fill={hovered === code ? 'rgba(159,203,152,0.35)' : code === 'PA' ? 'rgba(159,203,152,0.25)' : 'rgba(159,203,152,0.12)'}
                stroke={hovered === code ? 'var(--mint)' : 'rgba(159,203,152,0.3)'}
                strokeWidth={hovered === code ? 2 : 1}
                style={{ cursor: 'pointer', transition: 'fill 0.2s, stroke 0.2s' }}
                onMouseEnter={() => setHovered(code)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}

            {/* HQ marker */}
            <circle cx="755" cy="235" r="5" fill="var(--mint)" stroke="var(--cream)" strokeWidth="2">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* Tooltip */}
          {hovered && activeStates[hovered] && (
            <div style={{
              position: 'absolute', left: tooltip.x + 12, top: tooltip.y - 50,
              background: 'rgba(26,58,29,0.95)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(159,203,152,0.25)', borderRadius: '0.75rem',
              padding: '0.65rem 1rem', pointerEvents: 'none', zIndex: 10,
              minWidth: 160,
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--cream)', marginBottom: '0.15rem' }}>
                {activeStates[hovered].name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(159,203,152,0.7)' }}>
                {activeStates[hovered].info}
              </div>
            </div>
          )}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--mint)', border: '2px solid var(--cream)' }} />
            <span style={{ fontSize: '0.72rem', color: 'rgba(242,237,194,0.5)', fontWeight: 600 }}>Headquarters</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 12, height: 12, borderRadius: '3px', background: 'rgba(159,203,152,0.2)', border: '1px solid rgba(159,203,152,0.4)' }} />
            <span style={{ fontSize: '0.72rem', color: 'rgba(242,237,194,0.5)', fontWeight: 600 }}>Active Service Area</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
