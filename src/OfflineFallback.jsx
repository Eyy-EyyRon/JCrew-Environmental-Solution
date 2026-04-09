import React, { useEffect, useRef, useState } from 'react';
import animationData from './assets/offline-animation.json';

// Lightweight Lottie renderer using lottie-web via CDN script injection
// This avoids the broken lottie-react ESM/CJS interop issue entirely.
function useLottie(containerRef, animData) {
  useEffect(() => {
    let anim = null;
    let script = null;

    const init = () => {
      if (!containerRef.current || !window.lottie) return;
      
      // Clear any existing animations in the container
      if (containerRef.current.children.length > 0) {
        containerRef.current.innerHTML = '';
      }
      
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
      if (anim) {
        anim.destroy();
        anim = null;
      }
    };
  }, [animData]);
}

// Hook to detect screen size and return responsive values
function useResponsiveValues() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;
  const isDesktop = windowSize.width >= 1024;

  return {
    isMobile,
    isTablet,
    isDesktop,
    animationSize: isMobile ? 200 : isTablet ? 280 : 420,
    headingFontSize: isMobile ? '1.75rem' : isTablet ? '2.5rem' : '3rem',
    marginTop: isMobile ? 24 : isTablet ? 32 : 48,
    contentMaxWidth: isMobile ? '85%' : isTablet ? '550px' : '700px',
    containerPadding: isMobile ? '20px' : '40px',
  };
}

export default function OfflineFallback() {
  const containerRef = useRef(null);
  const responsiveValues = useResponsiveValues();
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
        padding: responsiveValues.containerPadding,
        boxSizing: 'border-box',
        overflow: 'auto',
        paddingBottom: '40px',
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: responsiveValues.animationSize,
          height: responsiveValues.animationSize,
          flexShrink: 0,
        }}
      />
      <h1
        style={{
          fontSize: responsiveValues.headingFontSize,
          marginTop: responsiveValues.marginTop,
          color: '#000000',
          maxWidth: responsiveValues.contentMaxWidth,
          lineHeight: 1.4,
        }}
      >
        You seem to be offline. Please check your connection.
      </h1>
    </div>
  );
}