// src/App.jsx
import { useEffect, useState } from 'react';
import ChampionCard from './components/ChampionCard';
import './index.css';

export default function App() {
  const [champions, setChampions] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/14.12.1/data/en_US/champion.json")
      .then(res => res.json())
      .then(data => setChampions(data.data));
  }, []);

  const filteredChampions = Object.values(champions).filter(champ =>
    champ.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>League of Legends Champions</h1>
      <input
        type="text"
        placeholder="Search Champion"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
      <div className="champions-grid">
        {filteredChampions.map(champ => (
          <ChampionCard key={champ.id} champion={champ} />
        ))}
      </div>
    </div>
  );
}
