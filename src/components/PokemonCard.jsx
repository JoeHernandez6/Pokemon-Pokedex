import { useState, useEffect } from "react";

export function PokemonCard({ pokemon }) {
  const [sprite, setSprite] = useState("");

  useEffect(() => {
    if (!pokemon) return;

    const fetchSprite = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`);
        const data = await res.json();
        const animated =
          data.sprites.versions["generation-v"]["black-white"].animated.front_default;

        setSprite(animated || data.sprites.front_default);
      } catch (err) {
        console.error("Not Found:", pokemon.name);
      }
    };

    fetchSprite();
  }, [pokemon]);

  if (!pokemon) return null;

  return (
    <div className="card">
      {sprite ? <img src={sprite} alt={pokemon.name} /> : <p>Loading...</p>}
      <h3>{pokemon.name.toUpperCase()}</h3>
    </div>
  );
}
