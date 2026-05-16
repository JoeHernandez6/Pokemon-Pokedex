import "./PokeDisplay.css";
import { PokeStats } from "./PokeStats";

export function PokeDisplay({ pokemon }) {
  if (!pokemon) return null;

  const type = pokemon.types[0].type.name;

  const backgrounds = {
    fire: "/environments/volcano.png",
    water: "/environments/beach.png",
    grass: "/environments/forest.png",
    electric: "/environments/powerplant.png",
    rock: "/environments/cave.png",
    ice: "/environments/snow.png",
    default: "/environments/plain.png",
  };

  const bg = backgrounds[type] || backgrounds.default;

  const animated =
    pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;

  const sprite = animated || pokemon.sprites.front_default;

  return (
    <div className="display-frame">
      <div
        className="display-background"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img className="display-sprite" src={sprite} alt={pokemon.name} />
      </div>

      {/* Pokémon name */}
      <h2 className="pokemon-name">{pokemon.name.toUpperCase()}</h2>

      {/* Stats */}
      <PokeStats pokemon={pokemon} />
    </div>
  );
}
