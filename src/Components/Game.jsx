import React, { useState } from "react";
import Balloon from "./Balloon";
import dictionary from "../dictionary.json";

const NUMBER_OF_BALLOONS = 5;

const Game = ({ language, handleEarnedMoney }) => {
  const [collectedMoney, setCollectedMoney] = useState(0);
  const [prize, setPrize] = useState(0);
  const [baloonNumber, setBaloonNumber] = useState(0);

  const MONEY_FOR_PUMP = 5;

  const onSuccessfulPump = () => {
    setPrize(prize + MONEY_FOR_PUMP);
  };

  const onExplosion = () => {
    setPrize(0);
    setBaloonNumber(baloonNumber + 1);
  };

  const onResign = () => {
    setCollectedMoney(collectedMoney + prize);
    setPrize(0);
    setBaloonNumber(baloonNumber + 1);
  };

  if (baloonNumber < NUMBER_OF_BALLOONS + 1) {
    return (
      <div textAlign='center'>
        <h3>
          {dictionary[language].collectedMoney}: {collectedMoney}$
        </h3>
        <h4>
          {dictionary[language].expectedPrize}: {prize}$
        </h4>
        <h5>
          {baloonNumber}/{NUMBER_OF_BALLOONS}
        </h5>
        <Balloon
          numberOfBaloons={NUMBER_OF_BALLOONS + 1}
          number={baloonNumber}
          onSuccessfulPump={onSuccessfulPump}
          onExplosion={onExplosion}
          onResign={onResign}
          language={language}
        />
      </div>
    );
  } else {
    handleEarnedMoney(collectedMoney);
    return (
      <div className="centered">
        <h1>
          {dictionary[language].collectedMoney}: {collectedMoney}$
        </h1>
      </div>
    );
  }
};

export default Game;
