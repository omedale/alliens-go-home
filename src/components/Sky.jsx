import React from 'react';

const Sky = () => {
  const skyStyle = {
    fill: '#30abef',
  };
  const skyWidth = 5000;
  const gameHeight = 1200;
  // const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  );
};

export default Sky;