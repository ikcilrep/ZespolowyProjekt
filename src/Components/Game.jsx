import React, { useState } from 'react';
import Baloon from './Baloon';

const Game = () => {
    const [prize, setPrize] = useState(0);

    const MONEY_FOR_PUMP = 5;

    const onSuccessfulPump = () => {
        setPrize(prize + MONEY_FOR_PUMP);
    };

    const onExplosion = () => {
        setPrize(0);
    };

    return <div>
        <h1>Prize: {prize}$</h1>
        <Baloon onSuccessfulPump={onSuccessfulPump} onExplosion={onExplosion} />
    </div>;
};

export default Game;