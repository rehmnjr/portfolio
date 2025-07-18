
import { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const elements = document.querySelectorAll('.mouse-cursor-gradient-tracking');
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      elements.forEach((elem: Element) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (elem as HTMLElement).style.setProperty('--x', `${x}px`);
        (elem as HTMLElement).style.setProperty('--y', `${y}px`);
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      <div 
        className="pointer-events-none fixed -top-10 -left-10 w-20 h-20 rounded-full 
                  bg-primary/30 blur-xl opacity-50 z-50 transition-transform duration-300"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          mixBlendMode: 'lighten',
        }}
      />
      <div 
        className="pointer-events-none fixed -top-5 -left-5 w-10 h-10 rounded-full 
                  bg-accent/40 blur-md opacity-70 z-50 transition-transform duration-200"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          mixBlendMode: 'lighten',
          transitionDelay: '50ms'
        }}
      />
    </>
  );
}
