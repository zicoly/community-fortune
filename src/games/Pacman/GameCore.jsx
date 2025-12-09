import { useEffect, useState } from "react";
import { getMap } from "./maps";
import { moveEntity, randomDirection, isWall } from "./logic";
import "./style.css";

export default function GameCore({ mapType, mode, onFinish }) {
  const [map, setMap] = useState(() => getMap(mapType).map((r) => r.split("")));

  const [score, setScore] = useState(0);
  const [powered, setPowered] = useState(false);

  const [pacman, setPacman] = useState({
    x: 1,
    y: 1,
    dir: { x: 1, y: 0 },
  });

  // initial ghosts
  const [ghosts, setGhosts] = useState([
    { x: 9, y: 7, dir: { x: 1, y: 0 }, color: "red" },
    { x: 10, y: 7, dir: { x: -1, y: 0 }, color: "cyan" },
  ]);

  // ------------------------------
  // PACMAN MOVES WITH ARROW KEYS
  // ------------------------------
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") pacman.dir = { x: 0, y: -1 };
      if (e.key === "ArrowDown") pacman.dir = { x: 0, y: 1 };
      if (e.key === "ArrowLeft") pacman.dir = { x: -1, y: 0 };
      if (e.key === "ArrowRight") pacman.dir = { x: 1, y: 0 };
      setPacman({ ...pacman });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pacman]);

  // ------------------------------
  // MAIN GAME LOOP
  // ------------------------------
  useEffect(() => {
    const loop = setInterval(() => {
      // ----- MOVE PACMAN -----
      moveEntity(pacman, map);
      const cell = map[pacman.y][pacman.x];

      // Eat dot
      if (cell === ".") {
        map[pacman.y][pacman.x] = " ";
        setScore((s) => s + 10);
      }

      // Eat power pellet
      if (cell === "o") {
        map[pacman.y][pacman.x] = " ";
        setScore((s) => s + 50);
        setPowered(true);

        // turn off power mode after 6 seconds
        setTimeout(() => setPowered(false), 6000);
      }

      setMap([...map]);
      setPacman({ ...pacman });

      // ----- MOVE GHOSTS -----
      setGhosts((prevGhosts) =>
        prevGhosts.map((g) => {
          // movement
          moveEntity(g, map);

          // slight random movement
          if (Math.random() < 0.1) {
            g.dir = randomDirection();

            // ensure ghost doesn't get stuck in walls
            if (isWall(map, g.x + g.dir.x, g.y + g.dir.y)) {
              g.dir = randomDirection();
            }
          }

          // ----- COLLISION -----
          if (g.x === pacman.x && g.y === pacman.y) {
            if (!powered) {
              clearInterval(loop);
              onFinish && onFinish(score, mode);
            } else {
              // Pacman eats ghost
              setScore((s) => s + 200);
              return { ...g, x: 9, y: 7 }; // Reset ghost spawn position
            }
          }

          return { ...g };
        })
      );
    }, 150);

    return () => clearInterval(loop);
  }, [map, pacman, ghosts]);

  // ------------------------------
  // RENDER GAME GRID
  // ------------------------------
  return (
    <div className="pacman-container">
      <h2 className="pacman-score">Score: {score}</h2>

      <div className="pacman-grid">
        {map.map((row, y) => (
          <div key={y} className="row">
            {row.map((cell, x) => {
              const isPacman = pacman.x === x && pacman.y === y;
              const ghost = ghosts.find((g) => g.x === x && g.y === y);

              return (
                <div key={x} className="cell">
                  {cell === "#" && <div className="wall" />}
                  {cell === "." && <div className="dot" />}
                  {cell === "o" && <div className="power" />}
                  {isPacman && (
                    <div className={`pacman ${powered ? "powered" : ""}`} />
                  )}
                  {ghost && <div className={`ghost ghost-${ghost.color}`} />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
