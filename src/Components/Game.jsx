import React, { useState, useContext, useEffect } from "react";
import Balloon from "./Balloon";
import dictionary from "../dictionary.json";
import Box from '@material-ui/core/Box';
import { Button, Typography } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { Context } from "../Store"
import "./Game.css";

const NUMBER_OF_BALLOONS = 5;

const Game = ({ language, handleEarnedMoney, nextPagePath }) => {
  const [redirect, setRedirect] = useState(false);
  const [collectedMoney, setCollectedMoney] = useState(0);
  const [prize, setPrize] = useState(0);
  const [baloonNumber, setBaloonNumber] = useState(0);

  const MONEY_FOR_PUMP = 5;

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({ type: `ADD_BALLOON`, payload: {baloonNumber, prize, collectedMoney} });
  }, [baloonNumber, prize, collectedMoney]);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

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

  if (baloonNumber < NUMBER_OF_BALLOONS) {
    return (
      <div className="game">
        <h1>
          {dictionary[language].collectedMoney}: {collectedMoney}$
        </h1>
        <h2>
          {dictionary[language].expectedPrize}: {prize}$
        </h2>
        <h3>
         {dictionary[language].expectedBalloons} : {baloonNumber + 1} / {NUMBER_OF_BALLOONS}
        </h3>
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
        <Box textAlign='center'>
          <Button onClick={handleClick} size="large" variant="contained" color="primary" >
            OK
          </Button>
        </Box>
      </div>
    );
  }
};

export default Game;
