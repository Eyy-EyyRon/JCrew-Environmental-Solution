import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SkeletonHome, SkeletonPage } from './components/Skeletons';
import translations from './translations';

import HomePage from './pages/HomePage';
import CleanEnergyVisionPage from './pages/CleanEnergyVisionPage';
import PFASResponseDivisionPage from './pages/PFASResponseDivisionPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import FundingAndAccountabilityPage from './pages/FundingAndAccountabilityPage';

const pageMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function App() {
  const t = translations.en;
  const [activeSection, setActiveSection] = useState('');
  const [loading, setLoading] = useState(true);

  const [route, setRoute] = useState(() => {
    const h = window.location.hash || '';
    return h.startsWith('#/') ? h.slice(1) : '';
  });

  useEffect(() => {
    const onHashChange = () => {
      const h = window.location.hash || '';
      setRoute(h.startsWith('#/') ? h.slice(1) : '');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 650);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timer);
  }, [route]);

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll('[data-reveal]'));
    revealEls.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('reveal-in');
        io.unobserve(entry.target);
      }),
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    revealEls.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [route, loading]);

  useEffect(() => {
    if (loading) return;
    const timer = setTimeout(() => {
      const cards = Array.from(document.querySelectorAll('.slide-card'));
      if (!cards.length) return;
      cards.forEach(c => c.classList.remove('slide-in'));
      cards.forEach((c, i) => setTimeout(() => c.classList.add('slide-in'), i * 150));
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting && !e.target.classList.contains('slide-in')) {
            e.target.classList.add('slide-in');
            obs.unobserve(e.target);
          }
        }),
        { threshold: 0.1, rootMargin: '50px 0px -20% 0px' }
      );
      cards.forEach(c => obs.observe(c));
      return () => obs.disconnect();
    }, 300);
    return () => clearTimeout(timer);
  }, [route, loading]);

  useEffect(() => {
    if (route !== '') return;
    const sections = ['sectors', 'pfas-response', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { threshold: [0.35, 0.5, 0.65], rootMargin: '-20% 0px -55% 0px' }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [route]);

  return (
    <>
      <GlobalStyles />
      <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar t={t} forceSolid={route !== ''} activeRoute={route} activeSection={activeSection} />
        <main>
          <AnimatePresence mode="wait" initial={false}>
            {loading ? (
              <motion.div key={`loading:${route || 'home'}`} {...pageMotion}>
                {route === '' ? <SkeletonHome /> : <SkeletonPage />}
              </motion.div>
            ) : (
              <motion.div key={route || 'home'} {...pageMotion}>
                {route === '' && <HomePage t={t} />}
                {route === '/clean-energy-vision' && <CleanEnergyVisionPage t={t} />}
                {route === '/pfas-response-division' && <PFASResponseDivisionPage t={t} />}
                {route === '/how-we-work' && <HowWeWorkPage t={t} />}
                {route === '/funding-and-accountability' && <FundingAndAccountabilityPage t={t} />}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
