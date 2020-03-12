import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import ReactSelect from 'react-select'
import ImageCard from './ImageCard'
import './App.css'
const GET_POKEMONS = gql`
query {
  getPokemons {
    Pokemon
    Type1
    Type2
    GIF
    Description
    PNG
  }
}
`
function App () {
  const [select, setSelect] = React.useState('')
  const { loading, error, data } = useQuery(GET_POKEMONS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error =(</p>
  const [pokemons] = Object.values(data)
  const options = pokemons.map(({ Pokemon, PNG }) => ({
    value: PNG,
    label: Pokemon
  }))
  const handleSelect = pokemon => setSelect(pokemon.value)

  console.log(options)
  return (
    <div className='App'>
      <header className='App-header'>
        {select !== '' ? <ImageCard PNG={select} /> : <span>...</span>}
        <ReactSelect className='react-select' options={options} onChange={handleSelect} />
      </header>
    </div>
  )
}

export default App
