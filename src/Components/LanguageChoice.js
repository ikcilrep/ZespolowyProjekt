import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import React from 'react';

const POLISH = 'Polski';
const ENGLISH = 'English';
const SPANISH = 'Español';

const LanguageChoice = ({ onLanguageChosen }) => {
    return (<div>
        <ButtonGroup size="large"
            variant="contained"
            color="primary"
            aria-label="contained primary button group">
            <Button onClick={() => onLanguageChosen(POLISH)}>{POLISH}</Button>
            <Button onClick={() => onLanguageChosen(ENGLISH)}>{ENGLISH}</Button>
            <Button onClick={() => onLanguageChosen(SPANISH)}>{SPANISH}</Button>
        </ButtonGroup>

    </div>);
};

export { POLISH, ENGLISH, SPANISH };
export default LanguageChoice;