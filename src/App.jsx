import React, {useContext, createContext, useState} from "react";
import LanguageChoice, { ENGLISH } from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Reading from "./Components/Reading";
import Finalize from "./Components/Finalize"
import Quiz from "./Components/Quiz";
import PersonalityTest from "./Components/PersonalityTest";
import Game from "./Components/Game";
import UserPersonalData from "./Components/UserPersonalData";
import { useCookies } from "react-cookie";
import dictionary from "./dictionary.json";
import Store from "./Store";
import { Context } from "./Store";

const App = () => {
  const [cookies, setCookie] = useCookies(["language"]);
  const [language, setLanguage] = useState(ENGLISH);
  const [personalityTestAnswers, setPersonalityTestAnswers] = useState({});


  const chooseLanguage = (language) => {
    setCookie("language", language);
  };

  
  const handleData = ({ firstName, lastName, age, sex }) => {
    // do smth with data
  };

  const handleEarnedMoney = (amount) => {};

  let instruction, introductionMessage, acknowledgementMessage, personalityTestInformation;
  let readingComprehensionInfo, readingComprehension, readingComprehensionText;
  let balloonGameInfo, beforeRealGameInfo, summary;
  if (cookies["language"]) {
    instruction = dictionary[cookies["language"]].instruction;
    introductionMessage = dictionary[cookies["language"]].introductionMessage;
    acknowledgementMessage = dictionary[cookies["language"]].acknowledgementMessage;
    personalityTestInformation = dictionary[cookies["language"]].personalityTestInformation;
    readingComprehensionInfo = dictionary[cookies["language"]].readingComprehensionInfo;
    readingComprehension = dictionary[cookies["language"]].readingComprehension;
    readingComprehensionText = dictionary[cookies["language"]].readingComprehensionText;
    balloonGameInfo = dictionary[cookies["language"]].balloonGameInfo;
    beforeRealGameInfo = dictionary[cookies["language"]].beforeRealGameInfo;
    summary = dictionary[cookies["language"]].summary;
  } else {
    setCookie("language", ENGLISH);
    instruction = dictionary[ENGLISH].instruction;
    introductionMessage = dictionary[ENGLISH].introductionMessage;
    acknowledgementMessage = dictionary[ENGLISH].acknowledgementMessage;
    personalityTestInformation = dictionary[ENGLISH].personalityTestInformation;
    readingComprehensionInfo = dictionary[ENGLISH].readingComprehensionInfo;
    readingComprehension = dictionary[ENGLISH].readingComprehension;
    readingComprehensionText = dictionary[ENGLISH].readingComprehensionText;
    balloonGameInfo = dictionary[ENGLISH].balloonGameInfo;
    beforeRealGameInfo = dictionary[ENGLISH].beforeRealGameInfo;
    summary = dictionary[ENGLISH].summary;
  }

  return (
  <Store>
  <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <LanguageChoice
              onLanguageChosen={chooseLanguage}
              nextPagePath="/introductionMessage"
            />
          )}
        /> 
        <Route
          path="/introductionMessage"
          component={() => <Reading text={introductionMessage} nextPagePath="/acknowledgementMessage" />}
        />
        <Route
          path="/acknowledgementMessage"
          component={() => <Reading text={acknowledgementMessage} nextPagePath="/data" />}
        />
        <Route
          path="/data"
          component={() => (
            <UserPersonalData
              language={cookies["language"]}
              handleData={handleData}
              nextPagePath="/personalityTestInformation"
            />
          )}
        />
        <Route
          path="/personalityTestInformation"
          component={() => <Reading text={personalityTestInformation} nextPagePath="/personalityTest" />}
        />
        <Route
          path="/personalityTest"
          component={() => (
            <PersonalityTest
              nextPagePath="/readingComprehensionInfo"
              language={cookies["language"]}
            />
          )}
        />
        <Route
          path="/readingComprehensionInfo"
          component={() => <Reading text={readingComprehensionInfo} nextPagePath="/readingComprehension" />}
        />
        <Route
          path="/readingComprehension"
          component={() => <Reading text={readingComprehension} nextPagePath="/readingComprehensionText" />}
        />
        <Route
          path="/readingComprehensionText"
          component={() => <Reading text={readingComprehensionText} nextPagePath="/quiz" />}
        />
        <Route
          path="/quiz"
          component={() => (
            <Quiz
              nextPagePath="/balloonGameInfo"
              language={cookies["language"]}
            />
          )}
        />
        <Route
          path="/balloonGameInfo"
          component={() => <Reading text={balloonGameInfo} nextPagePath="/tutorialGame" />}
        />
        <Route
          path="/tutorialGame"
          component={() => (
            <Game
              mode="demo"
              handleEarnedMoney={handleEarnedMoney}
              language={cookies["language"]}
              nextPagePath="/beforeRealGame"
            />
          )}
        />
        <Route
          path="/beforeRealGame"
          component={() => <Reading text={beforeRealGameInfo} nextPagePath="/game" />}
        />
        <Route
          path="/game"
          component={() => (
            <Game
              mode="real"
              handleEarnedMoney={handleEarnedMoney}
              language={cookies["language"]}
              nextPagePath="/end"
            />
          )}
        />
        <Route
          path="/end"
          component={() => <Finalize text={summary} />}
        />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
    </Store>
  );
};



export default App;
