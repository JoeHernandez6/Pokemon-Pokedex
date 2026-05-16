import { useState } from 'react'
import './App.css'
import { SearchBar, PokeDisplay } from './components/index';

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [error, setError] = useState(null)

  const fetchPokemon = async (name) => {
    try {
      setError(null)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      if (!res.ok) throw new Error("Pokemon not found")
      const data = await res.json()
      setPokemon(data)
    } catch (err) {
      setPokemon(null)
      setError(err.message)
    }
  }

  return (
    <div className="App">
      <h1>My Pokedex</h1>

      <SearchBar onSearch={fetchPokemon} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {pokemon && (
        <PokeDisplay pokemon={pokemon} />
      )}
    </div>
  )
}

export default App
