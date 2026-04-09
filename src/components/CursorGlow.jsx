import React, { useState, useEffect } from 'react';

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 5, overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: pos.x - 180, top: pos.y - 180,
          width: 360, height: 360, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(159,203,152,0.06) 0%, transparent 70%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s ease',
          willChange: 'left, top',
        }}
      />
    </div>
  );
};

export default CursorGlow;
