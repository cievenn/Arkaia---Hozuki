import React, { useEffect, useState } from 'react';

/**
 * LiquidCursor (Hozuki Theme)
 * Remplace l'encre lourde par un point lumineux (verre / eau) léger et optimisé.
 */
export const LiquidCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Media query pour désactiver sur mobile
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frameId;
    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.2; // Lerp pour la fluidité
      currentY += (targetY - currentY) * 0.2;
      
      setPosition({ x: currentX, y: currentY });
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
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          borderRadius: '50%',
          border: '1px solid rgba(56, 189, 248, 0.5)',
          background: isPointer ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
          backdropFilter: 'blur(2px)',
          transform: `translate3d(${position.x - (isPointer ? 20 : 10)}px, ${position.y - (isPointer ? 20 : 10)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s, height 0.2s, background 0.2s',
          willChange: 'transform',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--cyan-bright)',
          boxShadow: '0 0 10px var(--cyan-bright)',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          pointerEvents: 'none',
          zIndex: 10000,
          willChange: 'transform',
        }}
      />
    </>
  );
};
