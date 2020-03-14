import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReactSelect from 'react-select';
import ImageCard from './components/ImageCard';
import Pokedex from './components/Pokedex';
import { GET_POKEMONS } from './graphql/typeDefs.js';
import './App.css';

function App() {
  const [select, setSelect] = React.useState('');
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error =(</p>;

  const [pokemons] = Object.values(data);
  const options = pokemons.map(({ Pokemon, GIF }) => ({
    value: GIF,
    label: Pokemon
  }));
  const handleSelect = pokemon => setSelect(pokemon);

  return (
    <div className='App'>
      <header className='App-header'>
        <Pokedex Pokemon={select.label} GIF={select.value} />
        <ReactSelect
          className='react-select'
          options={options}
          onChange={handleSelect}
        />
      </header>
    </div>
  );
}

export default App;
