import { useRef, useEffect } from 'react';

export const useMouseLerp = () => {
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.targetX = e.clientX;
      mouse.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mouse;
};
