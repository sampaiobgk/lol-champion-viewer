// src/components/ChampionCard.jsx
export default function ChampionCard({ champion }) {
    const imgUrl = `https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/${champion.image.full}`;
  
    return (
      <div className="card">
        <img src={imgUrl} alt={champion.name} />
        <h3>{champion.name}</h3>
        <p>{champion.title}</p>
      </div>
    );
  }
  