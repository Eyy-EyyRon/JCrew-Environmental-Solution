import React, { useState, useRef, useCallback } from 'react';

const BeforeAfterSlider = ({ beforeImg, afterImg, beforeLabel = 'Before', afterLabel = 'After' }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    containerRef.current?.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };
  const onPointerMove = (e) => { if (dragging.current) updatePosition(e.clientX); };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: 'relative', width: '100%', aspectRatio: '16/9',
        borderRadius: '1.5rem', overflow: 'hidden', cursor: 'ew-resize',
        border: '1px solid rgba(121,174,111,0.18)',
        boxShadow: '0 16px 48px rgba(26,58,29,0.12)',
        userSelect: 'none', touchAction: 'none',
      }}
    >
      {/* After (full) */}
      <img src={afterImg} alt={afterLabel} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      {/* Before (clipped) */}
      <div style={{ position: 'absolute', inset: 0, width: `${position}%`, overflow: 'hidden' }}>
        <img src={beforeImg} alt={beforeLabel} style={{ width: containerRef.current?.offsetWidth || '100%', height: '100%', objectFit: 'cover', maxWidth: 'none' }} />
      </div>
      {/* Divider line */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: `${position}%`,
        width: 3, background: 'var(--cream)', transform: 'translateX(-50%)',
        boxShadow: '0 0 8px rgba(0,0,0,0.3)',
      }}>
        {/* Handle */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 40, height: 40, borderRadius: '50%',
          background: 'var(--cream)', border: '3px solid var(--forest)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--forest)" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="8 4 4 12 8 20" /><polyline points="16 4 20 12 16 20" />
          </svg>
        </div>
      </div>
      {/* Labels */}
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(26,58,29,0.7)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.8rem', borderRadius: '999px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream)' }}>
        {beforeLabel}
      </div>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(26,58,29,0.7)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.8rem', borderRadius: '999px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--mint)' }}>
        {afterLabel}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
