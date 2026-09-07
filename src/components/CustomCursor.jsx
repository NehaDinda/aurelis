import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, .interactive');
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Outer Smooth Ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full border border-forest/40 transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'w-14 h-14 bg-forest/10 border-forest' : 'w-9 h-9'
        } ${isClicked ? 'scale-75 bg-coral/20' : 'scale-100'}`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 bg-forest rounded-full transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </>
  );
}
