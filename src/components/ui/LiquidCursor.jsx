import React, { useEffect, useRef } from 'react';

/**
 * LiquidCursor (Hozuki Theme)
 * Remplace l'encre lourde par un point lumineux (verre / eau) léger et optimisé.
 */
export const LiquidCursor = () => {
  const blobRef = useRef(null);
  const dotRef = useRef(null);
  const isPointer = useRef(false);
  const mouse = useRef({ x: -100, y: -100, currentX: -100, currentY: -100 });

  useEffect(() => {
    // Media query pour désactiver sur mobile
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frameId;

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      const target = e.target;
      isPointer.current = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
    };

    const animate = () => {
      mouse.current.currentX += (mouse.current.x - mouse.current.currentX) * 0.2; // Lerp pour la fluidité
      mouse.current.currentY += (mouse.current.y - mouse.current.currentY) * 0.2;
      
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${mouse.current.currentX - (isPointer.current ? 20 : 10)}px, ${mouse.current.currentY - (isPointer.current ? 20 : 10)}px, 0)`;
        blobRef.current.style.width = isPointer.current ? '40px' : '20px';
        blobRef.current.style.height = isPointer.current ? '40px' : '20px';
        blobRef.current.style.background = isPointer.current ? 'rgba(56, 189, 248, 0.1)' : 'transparent';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.currentX - 3}px, ${mouse.current.currentY - 3}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: '1px solid rgba(56, 189, 248, 0.5)',
          background: 'transparent',
          backdropFilter: 'blur(2px)',
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s, height 0.2s, background 0.2s',
          willChange: 'transform, width, height',
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--cyan-bright)',
          boxShadow: '0 0 10px var(--cyan-bright)',
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
        }}
      />
    </>
  );
};
