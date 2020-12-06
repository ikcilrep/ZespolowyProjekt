import React, { useContext, createContext, useState } from "react";
import LanguageChoice, { ENGLISH } from "./Components/LanguageChoice";
import Error404 from "./Components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Reading from "./Components/Reading";
import Instruction from "./Components/Instruction";
import Quiz from "./Components/Quiz";
import PersonalityTest from "./Components/PersonalityTest";
import Game from "./Components/Game";
import UserPersonalData from "./Components/UserPersonalData";
import { useCookies } from "react-cookie";
import dictionary from "./dictionary.json";
import Store from "./Store";

const App = () => {
  const [cookies, setCookie] = useCookies(["language"]);


  const chooseLanguage = (language) => {
    setCookie("language", language);
  };

  const handleData = ({ firstName, lastName, age, sex }) => {
    // do something with data
  };

  const handleEarnedMoney = (amount) => {};

  let instruction,
    introductionMessage,
    acknowledgementMessage,
    personalityTestInformation;
  let readingComprehensionInfo, readingComprehension, readingComprehensionText;
  let balloonGameInfo;
  if (cookies["language"]) {
    instruction = dictionary[cookies["language"]].instruction;
    introductionMessage = dictionary[cookies["language"]].introductionMessage;
    acknowledgementMessage =
      dictionary[cookies["language"]].acknowledgementMessage;
    personalityTestInformation =
      dictionary[cookies["language"]].personalityTestInformation;
    readingComprehensionInfo =
      dictionary[cookies["language"]].readingComprehensionInfo;
    readingComprehension = dictionary[cookies["language"]].readingComprehension;
    readingComprehensionText =
      dictionary[cookies["language"]].readingComprehensionText;
    balloonGameInfo = dictionary[cookies["language"]].balloonGameInfo;
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
  }

  return (
    <Store>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Instruction
                points={instruction}
                nextPagePath="/chooseLanguage"
              />
            )}
          />
          <Route
            path="/chooseLanguage"
            component={() => (
              <LanguageChoice
                onLanguageChosen={chooseLanguage}
                nextPagePath="/introductionMessage"
              />
            )}
          />
          <Route
            path="/introductionMessage"
            component={() => (
              <Reading
                text={introductionMessage}
                nextPagePath="/acknowledgementMessage"
              />
            )}
          />
          <Route
            path="/acknowledgementMessage"
            component={() => (
              <Reading text={acknowledgementMessage} nextPagePath="/data" />
            )}
          />
          <Route
            path="/data"
            component={() => (
              <Reading
                text="TUTAJ SA DANE OSOBOWE"
                nextPagePath="/personalityTestInformation"
              />
            )}
            // component={() => (
            //   <UserPersonalData
            //     language={cookies["language"]}
            //     handleData={handleData}
            //     nextPagePath="/personalityTestInformation"
            //   />
            // )}
          />
          <Route
            path="/personalityTestInformation"
            component={() => (
              <Reading
                text={personalityTestInformation}
                nextPagePath="/personalityTest"
              />
            )}
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
            component={() => (
              <Reading
                text={readingComprehensionInfo}
                nextPagePath="/readingComprehension"
              />
            )}
          />
          <Route
            path="/readingComprehension"
            component={() => (
              <Reading
                text={readingComprehension}
                nextPagePath="/readingComprehensionText"
              />
            )}
          />
          <Route
            path="/readingComprehensionText"
            component={() => (
              <Reading text={readingComprehensionText} nextPagePath="/quiz" />
            )}
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
            component={() => (
              <Reading text={balloonGameInfo} nextPagePath="/game" />
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
    </Store>
  );
};

export default App;
