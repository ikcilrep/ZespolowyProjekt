import React from "react";
import styles from "../Style/Baloon.css"

export default function Baloon () {
    const [pump, setPump] = React.useState(0);
    const [pumps, setPumps] = React.useState(0);
      return (
        <div>
        <div class="container" onClick={() => {setPump(1); setPumps(pumps+1)}} onAnimationEnd={() => setPump(0)} pump={pump} pumps={pumps}>
        <div class="ground" pump={pump}></div>
        <div class="hose" pump={pump}></div>
        <div class="piston" pump={pump}>
            <div class="stick1" pump={pump}></div>
            <div class="stick2" pump={pump}></div>
            <div class="box" pump={pump}></div>
            <div class="stamp-balloon" pump={pump}></div>
            <div class="stamp-triangle" pump={pump}></div>
        </div>
        <div class="baloon" pump={pump} pumps={pumps}></div>
    </div>
    </div>
      )
  }

