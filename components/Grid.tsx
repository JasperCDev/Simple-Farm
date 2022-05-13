import React, { useState } from "react";
import styles from "./Grid.module.scss";

export default function Grid() {
  return (
    <div className={styles.grid}>
      {new Array(576).fill(null).map((_, indx) => {
        return <GridItem key={indx} />;
      })}
    </div>
  );
}

function GridItem() {
  const [color, setColor] = useState("peru");
  return (
    <div
      onClick={() => setColor("lightgreen")}
      style={{
        backgroundColor: color,
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        transition: "background-color 1s",
      }}
    ></div>
  );
}
