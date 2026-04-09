const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --forest: #2d5a31;
      --forest-deep: #1a3a1d;
      --forest-light: #4a7c50;
      --sage: #79ae6f;
      --mint: #9fcb98;
      --cream: #f2edc2;
      --cream-warm: #ede8b8;
      --white-glass: rgba(242,237,194,0.06);
      --white-glass-hover: rgba(242,237,194,0.12);
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--cream);
      color: var(--forest-deep);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    a, button { -webkit-tap-highlight-color: transparent; }

    :where(a, button, input, textarea):focus-visible {
      outline: 3px solid rgba(159,203,152,0.55);
      outline-offset: 3px;
    }

    /* ── Button system ── */
    .btn {
      display: inline-flex; align-items: center; justify-content: center;
      gap: 0.6rem; border-radius: 1rem; padding: 1rem 2.25rem;
      text-decoration: none; font-size: 0.9rem; font-weight: 700;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
      will-change: transform;
    }
    .btn:active { transform: translateY(0) scale(0.99); }
    .btn-primary {
      background: var(--cream); color: var(--forest);
      box-shadow: 0 10px 34px rgba(0,0,0,0.24);
    }
    .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 18px 52px rgba(0,0,0,0.3); }
    .btn-ghost {
      background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);
      color: var(--cream); border: 1px solid rgba(255,255,255,0.2);
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.18); transform: translateY(-2px); }
    .btn-forest {
      background: var(--forest); color: var(--cream);
      box-shadow: 0 8px 28px rgba(45,90,49,0.35);
    }
    .btn-forest:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(45,90,49,0.45); }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
        scroll-behavior: auto !important;
      }
      .reveal { transform: none; }
    }

    /* ── Scroll reveal ── */
    .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal-in { opacity: 1; transform: translateY(0); }

    /* ── Staggered reveal children ── */
    [data-stagger] > * {
      opacity: 0; transform: translateY(18px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    [data-stagger].stagger-in > *:nth-child(1) { transition-delay: 0s; }
    [data-stagger].stagger-in > *:nth-child(2) { transition-delay: 0.08s; }
    [data-stagger].stagger-in > *:nth-child(3) { transition-delay: 0.16s; }
    [data-stagger].stagger-in > *:nth-child(4) { transition-delay: 0.24s; }
    [data-stagger].stagger-in > *:nth-child(5) { transition-delay: 0.32s; }
    [data-stagger].stagger-in > *:nth-child(6) { transition-delay: 0.40s; }
    [data-stagger].stagger-in > *:nth-child(7) { transition-delay: 0.48s; }
    [data-stagger].stagger-in > *:nth-child(8) { transition-delay: 0.56s; }
    [data-stagger].stagger-in > * { opacity: 1; transform: translateY(0); }

    /* ── Logo marquee ── */
    .marquee-wrapper { overflow: hidden; width: 100%; }
    .marquee-track {
      display: flex; gap: 1rem; width: max-content;
      animation: marqueeScroll 35s linear infinite;
    }
    .marquee-wrapper:hover .marquee-track { animation-play-state: paused; }
    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* ── Typed text cursor ── */
    .typed-cursor {
      display: inline-block; width: 2px; height: 1em;
      background: var(--sage); margin-left: 2px;
      vertical-align: text-bottom;
      animation: cursorBlink 0.8s step-end infinite;
    }
    @keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

    /* ── Parallax helper ── */
    .parallax-bg {
      will-change: transform;
      transition: transform 0.1s linear;
    }

    /* ── Ambient blobs ── */
    .ambient { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
    .blob {
      position: absolute; width: 520px; height: 520px; border-radius: 50%;
      filter: blur(40px); opacity: 0.55; mix-blend-mode: screen;
      animation: drift 18s ease-in-out infinite alternate;
    }
    .blob.blob-a {
      left: -140px; top: 10%;
      background: radial-gradient(circle at 30% 30%, rgba(159,203,152,0.9), rgba(159,203,152,0) 60%);
    }
    .blob.blob-b {
      right: -180px; bottom: 6%;
      background: radial-gradient(circle at 30% 30%, rgba(121,174,111,0.85), rgba(121,174,111,0) 62%);
      animation-duration: 22s;
    }
    @keyframes drift {
      from { transform: translate3d(0,0,0) scale(1); }
      to   { transform: translate3d(40px,-28px,0) scale(1.06); }
    }

    /* ── Navbar ── */
    .navbar-inner { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .navbar-actions { display: flex; align-items: center; gap: 1rem; }

    /* Desktop nav links — open, premium layout */
    .navbar-links-pill {
      display: flex; align-items: center; gap: 0.15rem;
      background: transparent;
      border: none;
      padding: 0;
      transition: none;
    }

    /* Scrolled state — no container changes needed */
    .navbar-links-pill[data-scrolled="true"] {
      background: transparent;
      border-color: transparent;
    }
    .navbar-links-pill[data-scrolled="true"] .nav-link:hover {
      background: transparent;
      opacity: 1;
    }
    .navbar-links-pill[data-scrolled="true"] .nav-link-active {
      background: transparent !important;
      color: var(--forest-deep) !important;
      opacity: 1;
      box-shadow: none;
    }
    .navbar-links-pill[data-scrolled="true"] .nav-link-active::after {
      background: var(--forest);
    }

    .nav-toggle {
      display: none; width: 44px; height: 44px; border-radius: 999px;
      border: 1px solid rgba(121,174,111,0.35); background: rgba(242,237,194,0.12);
      cursor: pointer; align-items: center; justify-content: center;
      transition: transform 0.2s ease, background 0.2s ease;
    }
    .nav-toggle:hover { background: rgba(242,237,194,0.22); }
    .nav-toggle:active { transform: scale(0.95); }

    .nav-toggle-lines { width: 18px; height: 12px; position: relative; }
    .nav-toggle-lines span {
      position: absolute; left: 0; right: 0; height: 2px;
      background: var(--forest); border-radius: 999px;
      transition: transform 0.22s ease, top 0.22s ease, opacity 0.22s ease;
    }
    .nav-toggle-lines span:nth-child(1) { top: 0; }
    .nav-toggle-lines span:nth-child(2) { top: 5px; }
    .nav-toggle-lines span:nth-child(3) { top: 10px; }
    .nav-toggle-open .nav-toggle-lines span:nth-child(1) { top: 5px; transform: rotate(45deg); }
    .nav-toggle-open .nav-toggle-lines span:nth-child(2) { opacity: 0; }
    .nav-toggle-open .nav-toggle-lines span:nth-child(3) { top: 5px; transform: rotate(-45deg); }

    .mobile-nav { display: none; position: fixed; left: 0; right: 0; top: 72px; z-index: 120; padding: 0 1rem 1rem; }
    .mobile-nav-panel {
      background: rgba(242,237,194,0.98); border: 1px solid rgba(121,174,111,0.25);
      border-radius: 1.25rem; box-shadow: 0 20px 60px rgba(26,58,29,0.18);
      backdrop-filter: blur(14px); overflow: hidden;
    }
    .mobile-nav-links { display: flex; flex-direction: column; padding: 0.75rem; }
    .mobile-nav-links a {
      padding: 0.95rem 1rem; border-radius: 1rem; text-decoration: none;
      color: var(--forest); font-size: 0.8rem; font-weight: 700;
      letter-spacing: 0.14em; text-transform: uppercase;
      background: transparent; transition: background 0.2s ease;
    }
    .mobile-nav-links a:hover { background: rgba(121,174,111,0.12); }
    .mobile-nav-links a.mobile-active {
      background: rgba(121,174,111,0.14); border: 1px solid rgba(121,174,111,0.25);
    }
    .mobile-nav-divider {
      height: 1px; background: linear-gradient(to right, transparent, rgba(121,174,111,0.35), transparent);
      margin: 0.25rem 0.75rem;
    }
    .mobile-nav-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.35); z-index: 110; }

    /* ── Skeleton ── */
    .skeleton { position: relative; overflow: hidden; background: rgba(45,90,49,0.08); border-radius: 1rem; }
    .skeleton::after {
      content: ''; position: absolute; inset: 0; transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, rgba(242,237,194,0.55), transparent);
      animation: shimmer 1.2s infinite;
    }
    @keyframes shimmer { 100% { transform: translateX(100%); } }

    /* ── Layout helpers ── */
    .hero-inner { max-width: 780px; }
    .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
    .section-split { display: flex; gap: 5rem; align-items: center; flex-wrap: wrap; }
    .image-spacer { flex: 1 1 400px; min-height: 300px; }
    .content-block { flex: 1 1 500px; }
    .contact-grid { display: flex; gap: 5rem; align-items: center; flex-wrap: wrap; }
    .contact-details { flex: 1 1 380px; min-width: 280px; }
    .contact-card { flex: 1 1 420px; min-width: 280px; }
    .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }

    /* ── Nav links — premium underline style ── */
    .nav-link {
      position: relative; font-size: 0.68rem; font-weight: 600;
      letter-spacing: 0.16em; text-transform: uppercase;
      padding: 0.5rem 1rem; border-radius: 0;
      background: transparent;
      opacity: 0.75;
      transition: opacity 0.3s ease, color 0.3s ease;
      white-space: nowrap;
    }
    .nav-link::after {
      content: ''; position: absolute;
      bottom: 0; left: 50%; width: 0; height: 1.5px;
      background: currentColor;
      transition: width 0.35s cubic-bezier(0.25,0.46,0.45,0.94), left 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .nav-link:hover {
      background: transparent;
      opacity: 1;
    }
    .nav-link:hover::after {
      width: 60%; left: 20%;
    }
    .nav-link-active {
      background: transparent !important;
      color: white !important;
      opacity: 1 !important;
      font-weight: 700;
      box-shadow: none;
    }
    .nav-link-active::after {
      width: 60% !important; left: 20% !important;
      background: currentColor;
    }

    /* ── Form inputs (dark bg) ── */
    .form-input {
      width: 100%; background: rgba(255,255,255,0.06); color: var(--cream);
      border: 1px solid rgba(255,255,255,0.1); padding: 1.1rem 1.4rem;
      border-radius: 1rem; outline: none; font-family: 'DM Sans', sans-serif;
      font-size: 0.95rem; transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    }
    .form-input::placeholder { color: rgba(242,237,194,0.25); }
    .form-input:focus {
      border-color: var(--mint); background: rgba(255,255,255,0.1);
      box-shadow: 0 0 0 3px rgba(159,203,152,0.15);
    }

    /* ── Form inputs (light bg) ── */
    .form-input-light {
      width: 100%; background: rgba(255,255,255,0.8); color: var(--forest-deep);
      border: 1px solid rgba(121,174,111,0.2); padding: 0.95rem 1.2rem;
      border-radius: 0.85rem; outline: none; font-family: 'DM Sans', sans-serif;
      font-size: 0.92rem; transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
    }
    .form-input-light::placeholder { color: rgba(45,90,49,0.3); }
    .form-input-light:focus {
      border-color: var(--sage); background: #fff;
      box-shadow: 0 0 0 3px rgba(121,174,111,0.12);
    }

    /* ── Contact form split card ── */
    @media (max-width: 640px) {
      .cf-split { flex-direction: column !important; min-height: auto !important; }
      .cf-split-left { flex: none !important; padding: 2rem 1.75rem !important; }
      .cf-split-right { padding: 2rem 1.75rem !important; }
    }

    /* ── Misc ── */
    .divider { height: 1px; background: linear-gradient(to right, transparent, var(--sage), transparent); }

    .badge {
      display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.3rem 1rem;
      border-radius: 999px; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; border: 1px solid rgba(159,203,152,0.4);
      background: rgba(159,203,152,0.12); color: var(--mint); margin-bottom: 1.5rem;
    }
    .badge-dot {
      width: 6px; height: 6px; border-radius: 50%; background: var(--mint);
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%,100% { opacity: 1; transform: scale(1); }
      50%      { opacity: 0.5; transform: scale(0.7); }
    }

    /* ── Sector cards ── */
    .sector-card {
      position: relative; border-radius: 1.5rem; overflow: hidden;
      aspect-ratio: 3/4; cursor: default;
      transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease;
      box-shadow: 0 8px 32px rgba(26,58,29,0.18);
      border: 1px solid rgba(121,174,111,0.12);
    }
    .sector-card:hover { transform: translateY(-8px) scale(1.016); box-shadow: 0 28px 70px rgba(45,90,49,0.38); border-color: rgba(121,174,111,0.3); }
    .sector-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
    .sector-card:hover img { transform: scale(1.1); }
    .sector-card-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(to top, rgba(26,58,29,0.98) 0%, rgba(26,58,29,0.55) 50%, rgba(26,58,29,0.1) 75%, transparent 100%);
      transition: opacity 0.4s;
    }
    .sector-card-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 1.75rem 1.5rem; }
    .sector-card-desc {
      max-height: 0; overflow: hidden;
      transition: max-height 0.45s ease, opacity 0.45s ease; opacity: 0;
    }
    .sector-card:hover .sector-card-desc { max-height: 90px; opacity: 1; }

    /* ── Stat cards ── */
    .stat-card {
      background: rgba(255,255,255,0.05); border: 1px solid rgba(159,203,152,0.15);
      border-radius: 1.25rem; padding: 1.75rem 2rem; backdrop-filter: blur(8px);
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }
    .stat-card:hover { transform: translateY(-3px); border-color: rgba(159,203,152,0.3); box-shadow: 0 12px 36px rgba(0,0,0,0.18); }

    /* ── Info cards (light bg pages) ── */
    .info-card {
      border: 1px solid rgba(121,174,111,0.22); border-radius: 1.5rem;
      padding: 2rem; background: rgba(255,255,255,0.62);
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    }
    .info-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(26,58,29,0.12); border-color: rgba(121,174,111,0.4); }

    /* ── Slide-in cards ── */
    .slide-card {
      opacity: 1; transform: translateX(0);
      transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
      will-change: opacity, transform;
    }
    .slide-card:not(.slide-in) { opacity: 0; }
    .slide-card:not(.slide-in):nth-child(odd) { transform: translateX(-60px); }
    .slide-card:not(.slide-in):nth-child(even) { transform: translateX(60px); }
    .slide-card-dark {
      border: 1px solid rgba(159,203,152,0.15); border-radius: 1.5rem; padding: 1.75rem;
      background: rgba(255,255,255,0.06); backdrop-filter: blur(6px);
      transition: transform 0.25s ease, border-color 0.25s ease;
    }
    .slide-card-dark:hover { transform: translateY(-3px); border-color: rgba(159,203,152,0.3); }
    .slide-card-light {
      border: 1px solid rgba(121,174,111,0.25); border-radius: 1.5rem; padding: 2rem;
      background: rgba(255,255,255,0.55);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }
    .slide-card-light:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(26,58,29,0.1); }
    .slide-card:nth-child(1) { transition-delay: 0ms; }
    .slide-card:nth-child(2) { transition-delay: 120ms; }
    .slide-card:nth-child(3) { transition-delay: 240ms; }
    .slide-card:nth-child(4) { transition-delay: 360ms; }

    /* ── Carousel ── */
    .carousel-track { display: flex; transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); will-change: transform; }
    .carousel-slide { flex: 0 0 calc(33.333% - 1.33rem); min-width: calc(33.333% - 1.33rem); }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up-1 { animation: fadeUp 0.8s ease both 0.2s; }
    .fade-up-2 { animation: fadeUp 0.8s ease both 0.45s; }
    .fade-up-3 { animation: fadeUp 0.8s ease both 0.7s; }
    .fade-up-4 { animation: fadeUp 0.8s ease both 0.95s; }

    @keyframes slowZoom {
      from { transform: scale(1); }
      to   { transform: scale(1.06); }
    }
    .animate-slow-zoom { animation: slowZoom 20s ease-in-out infinite alternate; }

    /* ── Page hero overlay ── */
    .page-hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.14) 100%);
    }
    .page-hero-fade {
      position: absolute; inset: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.5) 100%);
    }

    /* ── Scrollbar ── */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--cream); }
    ::-webkit-scrollbar-thumb { background: var(--sage); border-radius: 3px; }

    /* ── Responsive ── */
    @media (max-width: 1024px) {
      .navbar-links-pill { gap: 0; }
      .nav-link { padding: 0.45rem 0.65rem; font-size: 0.62rem; }
      .section-split { gap: 3rem; }
      .contact-grid { gap: 2.5rem; }
      .carousel-slide { flex: 0 0 calc(50% - 1rem); min-width: calc(50% - 1rem); }
    }

    @media (max-width: 768px) {
      nav { padding: 0.9rem 0; }
      .mobile-nav { top: 88px; }
      .page-title { font-size: clamp(2.25rem, 9vw, 3.4rem) !important; }
      .navbar-links-pill { display: none; }
      .navbar-actions { width: auto; justify-content: flex-end; }
      .nav-toggle { display: inline-flex; }
      .mobile-nav { display: block; }
      .mobile-nav-overlay { display: block; }
      .hero-actions { flex-direction: column; align-items: stretch; }
      .section-split { flex-direction: column; gap: 2rem; }
      .image-spacer { display: none; }
      .contact-grid { flex-direction: column; gap: 2rem; }
      .contact-details, .contact-card { width: 100%; }
      .footer-inner { justify-content: flex-start; }
      .sector-card { min-height: 420px; }
    }

    @media (max-width: 640px) {
      .carousel-slide { flex: 0 0 calc(88% - 0rem); min-width: calc(88% - 0rem); }
    }

    @media (max-width: 520px) {
      .navbar-actions { gap: 0.75rem; }
      .hero-actions a { width: 100%; justify-content: center; }
      .footer-inner { text-align: left; }
    }

    @media (hover: none) {
      .sector-card-desc { max-height: 120px; opacity: 1; }
      .sector-card:hover { transform: none; }
      .sector-card:hover img { transform: none; }
    }

    @media (min-width: 1024px) {
      .nav-get-started { display: none !important; }
    }

    /* ── FAQ scrollbar ── */
    .faq-scroll::-webkit-scrollbar { width: 4px; }
    .faq-scroll::-webkit-scrollbar-track { background: transparent; }
    .faq-scroll::-webkit-scrollbar-thumb { background: rgba(159,203,152,0.25); border-radius: 4px; }
    .faq-scroll::-webkit-scrollbar-thumb:hover { background: rgba(159,203,152,0.4); }
    .faq-scroll { scrollbar-width: thin; scrollbar-color: rgba(159,203,152,0.25) transparent; }

    /* ── FAQ floating widget responsive ── */
    @media (max-width: 480px) {
      .faq-fab { bottom: 1.25rem !important; right: 1.25rem !important; width: 50px !important; height: 50px !important; }
    }

    /* ── Footer aurora effect ── */
    .aurora-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.35;
      mix-blend-mode: screen;
      will-change: transform, opacity;
    }
    .aurora-a {
      width: 500px; height: 320px;
      top: -10%; left: 10%;
      background: radial-gradient(ellipse at 40% 50%, rgba(159,203,152,0.7), rgba(121,174,111,0) 70%);
      animation: auroraA 12s ease-in-out infinite alternate;
    }
    .aurora-b {
      width: 450px; height: 280px;
      top: 20%; right: 5%;
      background: radial-gradient(ellipse at 60% 50%, rgba(121,174,111,0.6), rgba(45,90,49,0) 70%);
      animation: auroraB 16s ease-in-out infinite alternate;
    }
    .aurora-c {
      width: 380px; height: 260px;
      bottom: 5%; left: 35%;
      background: radial-gradient(ellipse at 50% 50%, rgba(159,203,152,0.5), rgba(159,203,152,0) 70%);
      animation: auroraC 14s ease-in-out infinite alternate;
    }
    @keyframes auroraA {
      0%   { transform: translate(0, 0) scale(1); opacity: 0.3; }
      50%  { transform: translate(60px, 20px) scale(1.15); opacity: 0.45; }
      100% { transform: translate(-30px, 30px) scale(1.05); opacity: 0.25; }
    }
    @keyframes auroraB {
      0%   { transform: translate(0, 0) scale(1); opacity: 0.25; }
      50%  { transform: translate(-50px, -15px) scale(1.1); opacity: 0.4; }
      100% { transform: translate(40px, 25px) scale(0.95); opacity: 0.3; }
    }
    @keyframes auroraC {
      0%   { transform: translate(0, 0) scale(1); opacity: 0.2; }
      50%  { transform: translate(30px, -20px) scale(1.2); opacity: 0.38; }
      100% { transform: translate(-40px, 10px) scale(1); opacity: 0.22; }
    }

    /* ── Footer hills responsive ── */
    @media (max-width: 768px) {
      footer img[loading="lazy"] { height: 200px !important; }
    }

    /* ── Clean Energy split layout ── */
    @media (max-width: 768px) {
      .cev-split { flex-direction: column !important; }
      .cev-split-img { flex: none !important; min-height: 280px; }
      .cev-split-content { padding: 2.25rem 1.75rem !important; }
    }

    /* ── Service card slide-up (PFAS page) ── */
    .service-card-slide {
      opacity: 0;
      transform: translateY(24px);
    }
    .service-card-slide.animated {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Stat card slide-up (Strategy section) ── */
    .stat-card-slide {
      opacity: 0;
      transform: translateY(32px);
      transition: opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .stat-card-slide.animated {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Panel slide-in (two-panel imagery cards) ── */
    @keyframes panelSlideUp {
      from { opacity: 0; transform: translateY(36px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .panel-slide-in {
      opacity: 0;
      transform: translateY(36px);
      transition: opacity 0.7s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .panel-slide-in.animated {
      opacity: 1;
      transform: translateY(0);
    }

    /* ── Energy card slide-in from left ── */
    .energy-card-slide {
      opacity: 0;
      transform: translateX(-48px);
      transition: opacity 0.65s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    .energy-card-slide.animated {
      opacity: 1;
      transform: translateX(0);
    }

    /* ── Energy card image pane — hide on mobile ── */
    @media (max-width: 640px) {
      .energy-img-pane { display: none !important; }
    }

    /* ── Image-bg text card — mobile full width ── */
    @media (max-width: 768px) {
      .card-text-right {
        width: 100% !important;
        margin-left: 0 !important;
      }
    }
  `}</style>
);

export default GlobalStyles;
