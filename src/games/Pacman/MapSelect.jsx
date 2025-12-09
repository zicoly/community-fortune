import "./style.css";

const maps = [
  { type: "classic", name: "Classic Maze" },
  { type: "donut", name: "Donut Arena" },
  { type: "spiral", name: "Spiral Labyrinth" },
  { type: "maze", name: "Ultra Maze" },
  { type: "open", name: "Open Field" },
  { type: "random", name: "Random Map" },
];

export default function MapSelect({ onSelect }) {
  return (
    <div className="pacman-select-container">
      <h2 className="select-title">Select Map</h2>

      <div className="map-grid">
        {maps.map((m) => (
          <div
            key={m.type}
            className="map-card"
            onClick={() => onSelect(m.type)}
          >
            <div className={`map-thumb thumb-${m.type}`}></div>
            <p className="map-name">{m.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
