import React from "react";
import LanguageChoice, { ENGLISH } from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Reading from "./Components/Reading";
import Instruction from "./Components/Instruction";
import Quiz from "./Components/Quiz";
import Game from "./Components/Game";
import UserPersonalData from "./Components/UserPersonalData";
import { useCookies } from "react-cookie";
import dictionary from "./dictionary.json";

const App = () => {
  const [cookies, setCookie] = useCookies(["language"]);
  const chooseLanguage = (language) => {
    setCookie("language", language);
  };

  const handleData = ({ firstName, lastName, age, sex }) => {
    // do something with data
  };

  const handleEarnedMoney = (amount) => {};

  const handleQuizResult = (score) => {};

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  let instruction;
  if (cookies["language"]) {
    instruction = dictionary[cookies["language"]].instruction;
  } else {
    setCookie("language", ENGLISH);
    instruction = dictionary[ENGLISH].instruction;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <LanguageChoice
              onLanguageChosen={chooseLanguage}
              nextPagePath="/data"
            />
          )}
        />
        <Route
          path="/data"
          component={() => (
            <UserPersonalData
              language={cookies["language"]}
              handleData={handleData}
              nextPagePath="/instruction"
            />
          )}
        />
        <Route
          path="/instruction"
          component={() => (
            <Instruction points={instruction} nextPagePath="/reading" />
          )}
        />
        <Route
          path="/reading"
          component={() => <Reading text={text} nextPagePath="/quiz" />}
        />
        <Route
          path="/quiz"
          component={() => (
            <Quiz
              handleQuizResult={handleQuizResult}
              nextPagePath="/game"
              language={cookies["language"]}
            />
          )}
        />

        <Route
          path="/game"
          component={() => (
            <Game
              handleEarnedMoney={handleEarnedMoney}
              language={cookies["language"]}
            />
          )}
        />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
