import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import React, { useState, useEffect, useContext } from "react";
import "./LanguageChoice.css";
import { Redirect } from "react-router-dom";
import { Context } from "../Store";

const POLISH = "Polski";
const ENGLISH = "English";
const SPANISH = "Español";

const LanguageChoice = ({ onLanguageChosen, nextPagePath }) => {
  const [redirect, setRedirect] = useState(false);
  const [language, setLanguage] = useState(ENGLISH);
  const [userDataInfo, setUserDataInfo] = useState({});

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    onLanguageChosen(language);
    dispatch({ type: `SET_LANGUAGE`, payload: language });
    // context.setLanguage(prevLanguage => ({...prevLanguage, language}) );
  }, [redirect, onLanguageChosen, language]);


  const handleClick = (language) => {
    setUserDataInfo({ lang: language });
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
          color="secondary"
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
