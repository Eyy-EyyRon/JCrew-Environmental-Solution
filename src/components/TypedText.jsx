import React, { useState, useEffect } from 'react';

const TypedText = ({ text, speed = 55, delay = 800, className = '', style = {} }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) { setDone(true); return; }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed]);

  return (
    <span className={className} style={style}>
      {displayed}
      {!done && <span className="typed-cursor" />}
    </span>
  );
};

export default TypedText;
