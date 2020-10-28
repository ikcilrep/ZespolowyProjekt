import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Quiz.css";
import { Button } from "@material-ui/core";

import { ENGLISH, SPANISH, POLISH } from "./LanguageChoice";

const getQuestions = (language) => {
  const dictionary = {};
  dictionary[ENGLISH] = {};
  dictionary[SPANISH] = {};
  dictionary[POLISH] = {};

  dictionary[ENGLISH].question1 = "What is the capital of France?";
  dictionary[SPANISH].question1 = "¿Cuál es la capital de Francia?";
  dictionary[POLISH].question1 = "Jaka jest stolica francji?";

  dictionary[ENGLISH].question2 = "Who is CEO of Tesla?";
  dictionary[SPANISH].question2 = "¿Quién es el CEO de Tesla?";
  dictionary[POLISH].question2 = "Kto jest CEO Tesli?";

  dictionary[ENGLISH].question3 = "The iPhone was created by which company?";
  dictionary[SPANISH].question3 = "¿Qué empresa creó el iPhone?";
  dictionary[POLISH].question3 = "Przez którą firmę został stworzony iPhone?";

  dictionary[ENGLISH].question4 = "How many Harry Potter books are there?";
  dictionary[SPANISH].question4 = "¿Cuántos libros de Harry Potter hay?";
  dictionary[POLISH].question4 = "Ile jest książek Harrego Pottera?";

  dictionary[ENGLISH].question5 = "Will this work?";
  dictionary[SPANISH].question5 = "¿Funcionará?";
  dictionary[POLISH].question5 = "Czy to będzie działać?";

  dictionary[ENGLISH].answers1 = ["New York", "London", "Paris", "Dublin"];
  dictionary[SPANISH].answers1 = ["Nueva York", "Londres", "París", "Dublín"];
  dictionary[POLISH].answers1 = ["Nowy Jork", "Londyn", "Paryż", "Dublin"];

  dictionary[ENGLISH].answers5 = [
    "Yes",
    "No",
    "Maybe",
    "All answers are correct",
  ];
  dictionary[SPANISH].answers5 = [
    "Si",
    "No",
    "Tal vez",
    "Todas las respuestas son correctas",
  ];
  dictionary[POLISH].answers5 = [
    "Tak",
    "Nie",
    "Może",
    "Wszystkie odpowiedzi są prawidłowe",
  ];

  const questions = [
    {
      questionText: dictionary[language].question1,
      answerOptions: [
        { answerText: dictionary[language].answers1[0], isCorrect: false },
        { answerText: dictionary[language].answers1[1], isCorrect: false },
        { answerText: dictionary[language].answers1[2], isCorrect: true },
        { answerText: dictionary[language].answers1[3], isCorrect: false },
      ],
    },
    {
      questionText: dictionary[language].question2,
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: dictionary[language].question3,
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: dictionary[language].question4,
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: dictionary[language].question5,
      answerOptions: [
        { answerText: dictionary[language].answers5[0], isCorrect: false },
        { answerText: dictionary[language].answers5[1], isCorrect: false },
        { answerText: dictionary[language].answers5[2], isCorrect: false },
        { answerText: dictionary[language].answers5[3], isCorrect: true },
      ],
    },
  ];

  return questions;
};

export default function Quiz({ nextPagePath, language }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);

  const questions = getQuestions(language);

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const dictionary = {};
  dictionary[ENGLISH] = {};
  dictionary[SPANISH] = {};
  dictionary[POLISH] = {};

  dictionary[ENGLISH].youScored = "You scored";
  dictionary[SPANISH].youScored = "Lo tienes";
  dictionary[POLISH].youScored = "Zdobyłeś";

  dictionary[ENGLISH].outOf = "out of";
  dictionary[SPANISH].outOf = "de";
  dictionary[POLISH].outOf = "z";

  return (
    <div className="quiz">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {dictionary[language].youScored} {score}{" "}
            {dictionary[language].outOf} {questions.length}
            <Button
              onClick={() => setRedirect(true)}
              variant="contained"
              color="secondary"
              id="confirmbutton"
            >
              OK
            </Button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <Button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  variant="contained"
                  color="secondary"
                >
                  {answerOption.answerText}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
