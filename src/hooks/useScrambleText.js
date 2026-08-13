import { useState, useEffect } from 'react';

export const useScrambleText = (text, trigger) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#_血死殺狂暗';
  
  useEffect(() => {
    let iteration = 0;
    let interval = null;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      setDisplayText(text.split('').map((letter, index) => {
        if(index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(''));
      
      if(iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3; // Speed of decode
    }, 30);
    
    return () => clearInterval(interval);
  }, [text, trigger]);
  
  return displayText;
};
