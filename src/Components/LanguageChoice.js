import Button from '@material-ui/core/Button';
import React from 'react';

const POLISH = 'Polski';
const ENGLISH = 'English';
const SPANISH = 'Español';

const LanguageChoice = ({ onLanguageChosen }) => {
    return (<div>
        <Button onClick={() => onLanguageChosen(POLISH)}>{POLISH}</Button>
        <Button onClick={() => onLanguageChosen(ENGLISH)}>{ENGLISH}</Button>
        <Button onClick={() => onLanguageChosen(SPANISH)}>{SPANISH}</Button>
    </div>);
};

export { POLISH, ENGLISH, SPANISH };
export default LanguageChoice;