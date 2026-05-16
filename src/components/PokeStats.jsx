import {useState} from "react"
import "./PokeStats.css";


export function PokeStats({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="stats-container">
      <h3>Stats</h3>
      {pokemon.stats.map((s) => (
        <div key={s.stat.name} className="stat-row">
          <span className="stat-name">{s.stat.name.toUpperCase()}</span>
          <div className="stat-bar">
            <div
              className="stat-fill"
              style={{ width: `${s.base_stat / 2}%` }}
            ></div>
          </div>
          <span className="stat-value">{s.base_stat}</span>
        </div>
      ))}
    </div>
  );
}
