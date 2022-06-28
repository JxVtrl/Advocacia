import React from 'react';

export function Button({ text, styles, setIsHover=false }) {
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles}
    >
      {text}
    </div>
  );
}
