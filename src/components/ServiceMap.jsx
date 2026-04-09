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

// Actual US state boundary paths (simplified)
const allStates = {
  WA: 'M108,42 L174,58 L172,100 L152,100 L148,82 L108,80 Z',
  OR: 'M108,80 L148,82 L152,100 L168,100 L170,144 L104,140 Z',
  CA: 'M104,140 L120,142 L132,180 L138,236 L100,236 L88,180 Z',
  NV: 'M120,142 L170,144 L164,224 L138,236 L132,180 Z',
  ID: 'M170,54 L192,60 L192,142 L170,144 L152,100 L172,100 L174,58 Z',
  MT: 'M174,30 L280,40 L276,88 L192,80 L192,60 L174,58 Z',
  WY: 'M192,80 L276,88 L274,136 L192,130 Z',
  UT: 'M170,144 L192,130 L192,142 L210,142 L208,220 L164,224 Z',
  CO: 'M210,142 L296,150 L294,206 L208,200 Z',
  AZ: 'M120,220 L164,224 L208,220 L208,296 L148,300 L120,276 Z',
  NM: 'M208,220 L294,206 L294,296 L208,296 Z',
  ND: 'M280,40 L370,42 L368,82 L276,80 Z',
  SD: 'M276,80 L368,82 L368,126 L276,124 Z',
  NE: 'M276,124 L368,126 L362,168 L270,166 Z',
  KS: 'M296,168 L390,170 L390,216 L294,214 Z',
  OK: 'M294,214 L390,216 L390,252 L342,250 L340,270 L296,270 L294,248 Z',
  TX: 'M294,270 L340,270 L342,250 L390,252 L400,310 L380,370 L326,382 L280,350 L260,300 Z',
  MN: 'M370,42 L430,42 L432,118 L368,114 Z',
  IA: 'M368,114 L432,118 L434,162 L368,158 Z',
  MO: 'M390,170 L456,172 L460,236 L392,232 Z',
  AR: 'M392,232 L460,236 L460,280 L392,276 Z',
  LA: 'M392,276 L460,280 L468,326 L440,336 L412,320 L392,310 Z',
  WI: 'M432,42 L482,52 L484,118 L432,118 Z',
  IL: 'M460,120 L488,122 L492,196 L460,200 Z',
  MI: 'M484,32 L520,42 L530,94 L510,108 L488,110 L484,52 Z',
  IN: 'M492,120 L524,122 L524,198 L492,196 Z',
  OH: 'M524,122 L558,120 L562,190 L524,192 Z',
  KY: 'M490,200 L558,194 L570,230 L498,238 Z',
  TN: 'M468,238 L570,234 L574,262 L468,268 Z',
  MS: 'M440,268 L468,268 L470,330 L444,336 Z',
  AL: 'M468,268 L520,264 L524,334 L470,330 Z',
  GA: 'M520,264 L574,262 L578,334 L524,334 Z',
  FL: 'M524,334 L578,334 L592,360 L576,420 L548,400 L536,364 Z',
  SC: 'M574,262 L608,244 L614,280 L578,298 Z',
  NC: 'M560,234 L640,214 L642,244 L608,244 L574,262 Z',
  VA: 'M558,194 L630,186 L640,214 L570,228 Z',
  WV: 'M558,190 L584,182 L590,214 L570,222 Z',
  PA: 'M570,140 L640,132 L644,170 L576,178 Z',
  NY: 'M580,88 L650,72 L660,130 L640,132 L600,140 L580,124 Z',
  NJ: 'M644,152 L660,148 L662,186 L648,180 Z',
  CT: 'M650,120 L678,114 L678,132 L650,136 Z',
  RI: 'M678,120 L690,118 L690,132 L678,132 Z',
  MA: 'M650,100 L696,92 L698,118 L650,120 Z',
  VT: 'M648,62 L666,58 L668,92 L652,96 Z',
  NH: 'M668,56 L682,52 L684,92 L668,94 Z',
  ME: 'M682,18 L710,22 L702,80 L682,82 Z',
  DE: 'M648,176 L662,172 L662,192 L650,192 Z',
  MD: 'M608,180 L648,176 L650,196 L614,200 Z',
};

// HQ approximate position (Pennsylvania — West Hazleton)
const HQ = { x: 610, y: 156 };

const ServiceMap = () => {
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });

  const getStateFill = (code) => {
    if (hovered === code) return 'rgba(159,203,152,0.4)';
    if (code === 'PA') return 'rgba(159,203,152,0.3)';
    if (activeStates[code]) return 'rgba(159,203,152,0.18)';
    return 'rgba(159,203,152,0.04)';
  };

  const getStateStroke = (code) => {
    if (hovered === code) return 'rgba(159,203,152,0.8)';
    if (activeStates[code]) return 'rgba(159,203,152,0.35)';
    return 'rgba(159,203,152,0.1)';
  };

  return (
    <section data-reveal style={{ padding: '6rem 0', background: 'var(--forest-deep)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle ambient glow */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(159,203,152,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem' }}>
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

        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <svg
            viewBox="60 0 680 440"
            style={{ width: '100%', height: 'auto' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            {/* All states */}
            {Object.entries(allStates).map(([code, d]) => (
              <path
                key={code}
                d={d}
                fill={getStateFill(code)}
                stroke={getStateStroke(code)}
                strokeWidth={hovered === code ? 2 : 0.8}
                strokeLinejoin="round"
                style={{ cursor: activeStates[code] ? 'pointer' : 'default', transition: 'fill 0.25s, stroke 0.25s, stroke-width 0.25s' }}
                onMouseEnter={() => activeStates[code] && setHovered(code)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}

            {/* Connection lines from HQ to active states */}
            {Object.keys(activeStates).filter(c => c !== 'PA' && allStates[c]).map(code => {
              const path = allStates[code];
              const nums = path.match(/[\d.]+/g)?.map(Number) || [];
              const xs = nums.filter((_, i) => i % 2 === 0);
              const ys = nums.filter((_, i) => i % 2 === 1);
              const cx = xs.reduce((a, b) => a + b, 0) / xs.length;
              const cy = ys.reduce((a, b) => a + b, 0) / ys.length;
              return (
                <line key={`line-${code}`} x1={HQ.x} y1={HQ.y} x2={cx} y2={cy}
                  stroke="rgba(159,203,152,0.08)" strokeWidth="1" strokeDasharray="4 4" />
              );
            })}

            {/* HQ pulsing marker */}
            <circle cx={HQ.x} cy={HQ.y} r="12" fill="rgba(159,203,152,0.1)" stroke="none">
              <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={HQ.x} cy={HQ.y} r="6" fill="var(--mint)" stroke="var(--cream)" strokeWidth="2">
              <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Active state dot markers */}
            {Object.keys(activeStates).filter(c => c !== 'PA' && allStates[c]).map(code => {
              const path = allStates[code];
              const nums = path.match(/[\d.]+/g)?.map(Number) || [];
              const xs = nums.filter((_, i) => i % 2 === 0);
              const ys = nums.filter((_, i) => i % 2 === 1);
              const cx = xs.reduce((a, b) => a + b, 0) / xs.length;
              const cy = ys.reduce((a, b) => a + b, 0) / ys.length;
              return (
                <circle key={`dot-${code}`} cx={cx} cy={cy} r="3"
                  fill={hovered === code ? 'var(--mint)' : 'rgba(159,203,152,0.5)'}
                  stroke="rgba(26,58,29,0.8)" strokeWidth="1"
                  style={{ transition: 'fill 0.2s' }}
                />
              );
            })}
          </svg>

          {/* Tooltip */}
          {hovered && activeStates[hovered] && (
            <div style={{
              position: 'absolute', left: Math.min(tooltip.x + 14, 650), top: tooltip.y - 56,
              background: 'rgba(26,58,29,0.95)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(159,203,152,0.25)', borderRadius: '0.75rem',
              padding: '0.7rem 1.1rem', pointerEvents: 'none', zIndex: 10,
              minWidth: 180,
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--cream)', marginBottom: '0.2rem' }}>
                {activeStates[hovered].name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(159,203,152,0.7)', lineHeight: 1.4 }}>
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
            <div style={{ width: 12, height: 12, borderRadius: '3px', background: 'rgba(159,203,152,0.18)', border: '1px solid rgba(159,203,152,0.35)' }} />
            <span style={{ fontSize: '0.72rem', color: 'rgba(242,237,194,0.5)', fontWeight: 600 }}>Active Service Area</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 12, height: 12, borderRadius: '3px', background: 'rgba(159,203,152,0.04)', border: '1px solid rgba(159,203,152,0.1)' }} />
            <span style={{ fontSize: '0.72rem', color: 'rgba(242,237,194,0.5)', fontWeight: 600 }}>Available for Deployment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMap;
