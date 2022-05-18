import React from "react";
import styles from "./Grid.module.scss";
import Tile from "./Tile";
import TileMap from "../util/tileMap";

export default function Grid() {
  return (
    <div className={styles.grid}>
      {TileMap.tiles.map((tile, indx) => {
        return <Tile key={indx} tile={tile} />;
      })}
    </div>
  );
}
