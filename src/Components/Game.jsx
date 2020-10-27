import React, { useState } from 'react';
import Baloon from './Baloon';

const NUMBER_OF_BALOONS = 5;

const Game = () => {
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

    if (baloonNumber < NUMBER_OF_BALOONS) {
        return (<div>
            <h3>Collected money: {collectedMoney}$</h3>
            <h4>Expected prize: {prize}$</h4>
            <h5>{baloonNumber}/{NUMBER_OF_BALOONS}</h5>
            <Baloon numberOfBaloons={NUMBER_OF_BALOONS}
                number={baloonNumber}
                onSuccessfulPump={onSuccessfulPump}
                onExplosion={onExplosion}
                onResign={onResign} />
        </div>);
    } else {
        return (<div className="centered">
            <h1>Collected money: {collectedMoney}$</h1>
        </div>);
    }
};

export default Game;