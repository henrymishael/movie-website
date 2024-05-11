import React from "react";

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2 overflow-hidden'>
      <div className='triangle-svg'>
        <svg width='80px' height='80px' viewBox='-4 -1 38 34'>
          <polygon
            fill='transparent'
            stroke='red'
            strokeWidth='1.0'
            points='15, 0, 30, 30, 0, 30'
          ></polygon>
        </svg>
      </div>
      <h2 className='animate-pulse text-2xl font-semibold'>streamtube</h2>
    </div>
  );
};

export default Loading;
