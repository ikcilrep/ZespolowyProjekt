import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React from "react";
import "./LanguageChoice.css";
import { Redirect } from "react-router-dom";

const POLISH = "Polski";
const ENGLISH = "English";
const SPANISH = "Español";

const LanguageChoice = ({
  onLanguageChosen,
  onRedirect,
  nextPagePath,
  redirect,
}) => {
  if (redirect) {
    onRedirect();
    return <Redirect to={nextPagePath} />;
  }

  return (
    <div>
      <div className="centered">
        <ButtonGroup
          size="large"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={() => onLanguageChosen(POLISH)}>{POLISH}</Button>
          <Button onClick={() => onLanguageChosen(ENGLISH)}>{ENGLISH}</Button>
          <Button onClick={() => onLanguageChosen(SPANISH)}>{SPANISH}</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export { POLISH, ENGLISH, SPANISH };
export default LanguageChoice;
