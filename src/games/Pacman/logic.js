export const isWall = (map, x, y) => {
  if (y < 0 || y >= map.length) return true;
  if (x < 0 || x >= map[0].length) return true;
  return map[y][x] === "#";
};

export const moveEntity = (entity, map) => {
  const nx = entity.x + entity.dir.x;
  const ny = entity.y + entity.dir.y;

  if (!isWall(map, nx, ny)) {
    entity.x = nx;
    entity.y = ny;
  }
};

export const randomDirection = () => {
  const dirs = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];
  return dirs[Math.floor(Math.random() * dirs.length)];
};
