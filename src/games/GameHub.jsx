import { useNavigate } from "react-router-dom";
import "./gamehub.css";

export default function GameHub() {
  const navigate = useNavigate();

  const games = [
    {
      name: "Pac-Man",
      desc: "Classic arcade maze chase",
      route: "/games/pacman",
      thumb: "pacman",
    },
    {
      name: "Speed Tap Frenzy",
      desc: "Tap as fast as you can",
      route: "/games/speed-tap",
      thumb: "tap",
    },
  ];

  return (
    <div className="gamehub-container">
      <h2 className="gamehub-title">Mini Games</h2>

      <div className="game-grid">
        {games.map((g, i) => (
          <div key={i} className="game-card" onClick={() => navigate(g.route)}>
            <div className={`game-thumb thumb-${g.thumb}`}></div>
            <h3 className="game-name">{g.name}</h3>
            <p className="game-desc">{g.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
