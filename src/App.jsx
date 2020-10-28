import React, { useState } from "react";
import LanguageChoice, {
  POLISH,
  ENGLISH,
  SPANISH,
} from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Reading from "./Components/Reading";
import Instruction from "./Components/Instruction";
import Quiz from "./Components/Quiz";
import Game from "./Components/Game";
import UserPersonalData from "./Components/UserPersonalData";

const getInstruction = () => {
  const instruction = {};
  instruction[POLISH] = [
    "Wpisz dane osobowe.",
    "Przeczytaj tekst.",
    "Odpowiedz na pytania.",
    "Pompuj balonika zarabiając pieniądze i ryzykując, że pęknie albo weź pieniądze, które zarobiłeś dotychczas.",
    "Powtórz punkt powyższy na pięciu balonikach.",
  ];
  instruction[ENGLISH] = [
    "Enter personal data.",
    "Read the text.",
    "Answer the questions.",
    "Pump the balloon earning money and risking it'll pop or take the money you earned.",
    "Repeat the above on five baloons.",
  ];
  instruction[SPANISH] = [
    "Ingrese datos personales.",
    "Lee el texto.",
    "Responde a las preguntas.",
    "Bombea el globo ganando dinero y arriesgando que explote o se lleve el dinero que ganaste.",
    "Repite lo anterior en cinco globos.",
  ];
  return instruction;
};

const App = () => {
  const [language, setLanguage] = useState(ENGLISH);

  const chooseLanguage = (language) => {
    setLanguage(language);
  };

  const onDataEntered = ({ firstName, lastName, age, sex }) => {
    // do something with data
  };

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const instruction = getInstruction();

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <LanguageChoice
              onLanguageChosen={chooseLanguage}
              nextPagePath="/instruction"
            />
          )}
        />
        <Route
          path="/instruction"
          component={() => (
            <Instruction points={instruction[language]} nextPagePath="/data" />
          )}
        />
        <Route
          path="/data"
          component={() => (
            <UserPersonalData
              language={language}
              onDataEntered={onDataEntered}
              nextPagePath="/reading"
            />
          )}
        />
        <Route
          path="/reading"
          component={() => <Reading text={text} nextPagePath="/quiz" />}
        />
         <Route
          path="/quiz"
          component={() => (
            <Quiz language={language} nextPagePath="/game" />
          )}
          />
        <Route path="/game" component={() => <Game language={language} />} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
