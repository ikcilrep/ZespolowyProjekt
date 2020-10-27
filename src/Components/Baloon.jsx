import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Baloon.css";
import "./LanguageChoice.css";

export default function Baloon({ onSuccessfulPump, onExplosion, number, numberOfBaloons, onResign }) {
  const [pump, setPump] = useState(0);
  const [pumps, setPumps] = useState(0);
  const handleClick = () => {
    setPump(1);
    if (pumps % 4 === 3) {
      onExplosion();
    } else {
      onSuccessfulPump();
    }

    setPumps(pumps + 1);
  };


  const handleAnimationEnd = () => {
    setPump(0);
  };

  const handleResign = () => {
    setPump(0);
    onResign();
  };

  return (
    <div>
      <Button onClick={handleResign} variant="contained" color="secondary">
        {number < numberOfBaloons - 1 ? "Next" : "OK"}
      </Button>


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

