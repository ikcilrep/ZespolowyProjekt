import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState, useEffect } from "react";
import "./LanguageChoice.css";
import { Redirect } from "react-router-dom";

const POLISH = "Polski";
const ENGLISH = "English";
const SPANISH = "Español";

const LanguageChoice = ({ onLanguageChosen, nextPagePath }) => {
  const [redirect, setRedirect] = useState(false);
  const [language, setLanguage] = useState(ENGLISH);
  const [userDataInfo, setUserDataInfo] = useState({});

  useEffect(() => {
    onLanguageChosen(language);
  }, [redirect, onLanguageChosen, language]);

  useEffect(() => {
    console.log(userDataInfo);
  }, [userDataInfo]);

  const handleClick = (language) => {
    setLanguage(language);
    setUserDataInfo({ lang: language });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  return (
    <div>
      <div className="centered" style={{ color: "white" }}>
        <ButtonGroup
          size="large"
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={() => handleClick(POLISH)}>{POLISH}</Button>
          <Button onClick={() => handleClick(ENGLISH)}>{ENGLISH}</Button>
          <Button onClick={() => handleClick(SPANISH)}>{SPANISH}</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export { POLISH, ENGLISH, SPANISH };
export default LanguageChoice;
