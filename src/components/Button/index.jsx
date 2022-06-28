import React from 'react';

export function Button({ text, styles, setIsHover=false, action=false, actionVar }) {
  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  
  return (
    <div
      onClick={() => action(!actionVar)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles}
    >
      {text}
    </div>
  );
}
