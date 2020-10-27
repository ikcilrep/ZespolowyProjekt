import React from "react";
import "./Baloon.css";

export default function Baloon({ onSuccessfulPump, onExplosion }) {
  const [pump, setPump] = React.useState(0);
  const [pumps, setPumps] = React.useState(0);
  const handleClick = () => {
    setPump(1);
    if (pumps % 5 === 4) {
      onExplosion();
    } else {
      onSuccessfulPump();
    }
    setPumps(pumps + 1);

  };

  const handleAnimationEnd = () => {
    setPump(0);
  };

  return (
    <div>
      <div className="container" onClick={handleClick} onAnimationEnd={handleAnimationEnd} pump={pump} pumps={pumps}>
        <div className="ground" pump={pump}></div>
        <div className="hose" pump={pump}></div>
        <div className="piston" pump={pump}>
          <div className="stick1" pump={pump}></div>
          <div className="stick2" pump={pump}></div>
          <div className="box" pump={pump}></div>
          <div className="stamp-balloon" pump={pump}></div>
          <div className="stamp-triangle" pump={pump}></div>
        </div>
        <div className="baloon" pump={pump} pumps={pumps}></div>
      </div>
    </div>
  );
}

