import React, { useState } from 'react';
import Balloon from './Balloon';
import { ENGLISH, POLISH, SPANISH } from './LanguageChoice';


const NUMBER_OF_BALLOONS = 5;

const Game = ({ language }) => {
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

    const dictionary = {};

    dictionary[ENGLISH] = { collectedMoney: "Collected money", expectedPrize: "Expected prize" };
    dictionary[POLISH] = { collectedMoney: "Zebrane pieniądze", expectedPrize: "Oczekiwana nagroda" };
    dictionary[SPANISH] = { collectedMoney: "Dinero recolectado", expectedPrize: "Recompensa esperada" };



    if (baloonNumber < NUMBER_OF_BALLOONS+1) {
        return (<div>
            <h3>{dictionary[language].collectedMoney}: {collectedMoney}$</h3>
            <h4>{dictionary[language].expectedPrize}: {prize}$</h4>
            <h5>{baloonNumber}/{NUMBER_OF_BALLOONS}</h5>
            <Balloon numberOfBaloons={NUMBER_OF_BALLOONS+1}
                number={baloonNumber}
                onSuccessfulPump={onSuccessfulPump}
                onExplosion={onExplosion}
                onResign={onResign}
                language={language}/>
        </div>);
    } else {
        return (<div className="centered">
            <h1>{dictionary[language].collectedMoney}: {collectedMoney}$</h1>
        </div>);
    }
};

export default Game;