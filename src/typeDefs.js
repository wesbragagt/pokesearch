import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
query {
  getPokemons {
    Pokemon
    Type1
    Type2
    GIF
    Description
  }
}
`
