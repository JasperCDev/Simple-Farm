import React, { CSSProperties, useState } from "react";
import styles from "./Tile.module.scss";

export default function Tile() {
  const [color, setColor] = useState("peru");
  return (
    <div
      onClick={() => setColor("lightgreen")}
      style={
        {
          "--color": color,
        } as CSSProperties
      }
      className={styles.tile}
    ></div>
  );
}
