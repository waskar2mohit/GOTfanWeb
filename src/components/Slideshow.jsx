import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../styles/Slideshow.css';

const Slideshow = ({ images = [], isOpen, onClose, title = '' }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const count = images.length;
  const current = useMemo(() => images[index] || null, [images, index]);

  const next = useCallback(() => {
    if (count === 0) return;
    setIndex((i) => (i + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    if (count === 0) return;
    setIndex((i) => (i - 1 + count) % count);
  }, [count]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
      // arrows disabled (no visible buttons); keep keyboard nav optional
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, next, prev, onClose]);

  useEffect(() => {
    if (isOpen) setIndex(0);
  }, [isOpen]);

  // Autoplay
  useEffect(() => {
    if (!isOpen || count <= 1) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [isOpen, count, next]);

  // Basic touch swipe
  const touchX = useRef(null);
  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next(); else prev();
    }
    touchX.current = null;
  };

  if (!isOpen) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title || 'Gallery'}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content" ref={containerRef}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="slides" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {current && (
            <img className="slide-image kenburns" src={current} alt={`${title} ${index + 1}`} />
          )}
        </div>

        {/* Dots removed as requested */}
      </div>
    </div>
  );
};

export default Slideshow;


