import { classicMap } from "./classicMap";
import { donutMap } from "./donutMap";
import { spiralMap } from "./spiralMap";
import { mazeMap } from "./mazeMap";
import { openFieldMap } from "./openFieldMap";

export const MAPS = {
  classic: classicMap,
  donut: donutMap,
  spiral: spiralMap,
  maze: mazeMap,
  open: openFieldMap,
};

export const getMap = (type) => {
  if (type === "random") {
    const keys = Object.keys(MAPS);
    const rand = keys[Math.floor(Math.random() * keys.length)];
    return MAPS[rand];
  }

  return MAPS[type] || classicMap;
};
