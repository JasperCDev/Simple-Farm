import React, { CSSProperties, useState } from "react";
import CSSColor from "../util/CSSColor.types";
import { TileObj } from "../util/tileMap";
import styles from "./Tile.module.scss";

interface Props {
  tile: TileObj;
}

export default function Tile(props: Props) {
  const [color, setColor] = useState<CSSColor>("PaleGreen");

  const handleTileClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (props.tile.section !== "FARMLAND") return;
    setColor("BurlyWood");
  };

  function getTileColor(section: typeof props.tile.section): CSSColor {
    switch (section) {
      case "DIRTLAND":
        return "Sienna";
      case "RIVER":
        return "DarkTurquoise";
      case "FARMLAND":
        return color;
    }
  }

  return (
    <div
      onClick={handleTileClick}
      style={
        {
          "--color": getTileColor(props.tile.section),
        } as CSSProperties
      }
      className={styles.tile}
    ></div>
  );
}
