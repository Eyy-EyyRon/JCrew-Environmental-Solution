import React from 'react';

export const SkeletonHome = () => (
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

export const SkeletonPage = () => (
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
