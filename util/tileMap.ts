export interface TileObj {
  section: "DIRTLAND" | "FARMLAND" | "RIVER";
}

type TileMap = { columns: number; rows: number; tiles: Array<TileObj> };

function createTileMap(): TileMap {
  const tileMap: TileMap = { columns: 32, rows: 18, tiles: [] };

  // dirtLand section
  const dirtLandSectionEnd = tileMap.columns * 3;
  for (let i = 0; i < dirtLandSectionEnd; i++) {
    tileMap.tiles.push({ section: "DIRTLAND" });
  }

  // river section
  const riverSectionEnd = dirtLandSectionEnd + tileMap.columns * 2;
  for (let i = dirtLandSectionEnd; i < riverSectionEnd; i++) {
    tileMap.tiles.push({ section: "RIVER" });
  }

  // farmLand section
  const farmSectionEnd = riverSectionEnd + tileMap.columns * 13;
  for (let i = riverSectionEnd; i < farmSectionEnd; i++) {
    tileMap.tiles.push({ section: "FARMLAND" });
  }

  return tileMap;
}

export default createTileMap();
