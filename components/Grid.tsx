import React from "react";
import styles from "./Grid.module.scss";
import Tile from "./Tile";

export default function Grid() {
  return (
    <div className={styles.grid}>
      {new Array(576).fill(null).map((_, indx) => {
        return <Tile key={indx} />;
      })}
    </div>
  );
}
