import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ENGLISH, POLISH, SPANISH } from "./LanguageChoice";
import "./Balloon.css";
import "./LanguageChoice.css";

export default function Balloon({
  language,
  onSuccessfulPump,
  onExplosion,
  number,
  numberOfBaloons,
  onResign,
}) {
  const [pump, setPump] = useState(0);
  const [pumps, setPumps] = useState(0);
  const [pop, setPop] = useState(0);

  const handleClick = () => {
    setPump(1);
    if (pumps % 4 === 3) {
      setPop(1);
      setPumps(0);
      onExplosion();
    } else {
      onSuccessfulPump();
      setPumps(pumps + 1);
    }
  };

  const handleAnimationEnd = () => {
    setPump(0);
  };

  const handleResign = () => {
    setPump(0);
    setPop(1);
    onResign();
  };

  const dictionary = {};

  dictionary[ENGLISH] = { next: "Next" };
  dictionary[POLISH] = { next: "Następny" };
  dictionary[SPANISH] = { next: "Siguiente" };

  return (
    <div>
      <Button onClick={handleResign} variant="contained" color="secondary">
        {number < numberOfBaloons - 1 ? dictionary[language].next : "OK"}
      </Button>

      <div
        className="container"
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        pump={pump}
        pumps={pumps}
      >
        <div className="ground" pump={pump}></div>
        <div className="hose" pump={pump}></div>
        <div className="piston" pump={pump}>
          <div className="stick1" pump={pump}></div>
          <div className="stick2" pump={pump}></div>
          <div className="box" pump={pump}></div>
          <div className="stamp-balloon" pump={pump}></div>
          <div className="stamp-triangle" pump={pump}></div>
        </div>
        <div
          className="baloon"
          pump={pump}
          pumps={pumps}
          pop={pop}
          onAnimationEnd={() => {
            setPop(0);
          }}
        ></div>
      </div>
    </div>
  );
}
