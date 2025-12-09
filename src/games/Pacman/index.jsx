import { useState } from "react";
import MapSelect from "./MapSelect";
import ModeSelect from "./ModeSelect";
import GameCore from "./GameCore";

export default function Pacman() {
  const [selectedMap, setSelectedMap] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [startGame, setStartGame] = useState(false);

  // Step 1: Pick Map
  if (!selectedMap && !startGame) {
    return <MapSelect onSelect={(map) => setSelectedMap(map)} />;
  }

  // Step 2: Pick Mode
  if (!selectedMode && !startGame) {
    return <ModeSelect onSelect={(mode) => setSelectedMode(mode)} />;
  }

  // Step 3: Start Game (IMPORTANT: freeze selection)
  if (!startGame) {
    setStartGame(true);
    return null; // temporary render
  }

  // Step 4: Game Runs WITHOUT remounting wrapper
  return (
    <GameCore
      mapType={selectedMap}
      mode={selectedMode}
      onFinish={(score) => {
        console.log("GAME OVER", score);
      }}
    />
  );
}
