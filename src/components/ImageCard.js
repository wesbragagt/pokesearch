import React from 'react';
export default function ImageCard({ GIF, Pokemon }) {
  if (!GIF && !Pokemon) return <span>...</span>;
  return (
    <React.Fragment>
      <img className='pokemon-gif' src={GIF} alt={Pokemon} />
    </React.Fragment>
  );
}
