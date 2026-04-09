import React, { useEffect, useRef } from 'react';
import animationData from './assets/offline-animation.json';

// Lightweight Lottie renderer using lottie-web via CDN script injection
// This avoids the broken lottie-react ESM/CJS interop issue entirely.
function useLottie(containerRef, animData) {
  useEffect(() => {
    let anim = null;
    let script = null;

    const init = () => {
      if (!containerRef.current || !window.lottie) return;
      anim = window.lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animData,
      });
    };

    if (window.lottie) {
      init();
    } else {
      script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js';
      script.onload = init;
      document.head.appendChild(script);
    }

    return () => {
      if (anim) anim.destroy();
    };
  }, [containerRef, animData]);
}

export default function OfflineFallback() {
  const containerRef = useRef(null);
  useLottie(containerRef, animationData);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
        backgroundColor: '#fff',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <div ref={containerRef} style={{ width: 300, height: 300 }} />
      <h1 style={{ fontSize: '2.5rem', marginTop: 20, color: '#000000' }}>
        You seem to be offline. Please check your connection.
      </h1>
    </div>
  );
}