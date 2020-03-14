import React from 'react';
import pokedexPNG from './../assets/pokedex.png';
import ImageCard from './ImageCard';
const Pokedex = props => (
  <React.Fragment>
    <img
      className='pokedex'
      src={pokedexPNG}
      alt='pokedex'
      style={{ width: '45%', height: 'auto' }}
    />
    <ImageCard {...props} />
  </React.Fragment>
);
export default Pokedex;
