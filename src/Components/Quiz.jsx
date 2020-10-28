import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Quiz.css";
import { Button } from "@material-ui/core";
import { ENGLISH, SPANISH, POLISH } from "./LanguageChoice";

export default function Quiz({ nextPagePath, language }) {
  const question1 = {};
  question1[ENGLISH] = "What is the capital of France?";
  question1[SPANISH] = "¿Cuál es la capital de Francia?";
  question1[POLISH] = "Jaka jest stolica francji?";

  const question2 = {};
  question2[ENGLISH] = "Who is CEO of Tesla?";
  question2[SPANISH] = "¿Quién es el CEO de Tesla?";
  question2[POLISH] = "Kto jest CEO Tesli?";

  const question3 = {};
  question3[ENGLISH] = "The iPhone was created by which company?";
  question3[SPANISH] = "¿Qué empresa creó el iPhone?";
  question3[POLISH] = "Przez którą firmę został stworzony iPhone?";

  const question4 = {};
  question4[ENGLISH] = "How many Harry Potter books are there?";
  question4[SPANISH] = "¿Cuántos libros de Harry Potter hay?";
  question4[POLISH] = "Ile jest książek Harrego Pottera?";

  const question5 = {};
  question5[ENGLISH] = "Will this work?";
  question5[SPANISH] = "¿Funcionará?";
  question5[POLISH] = "Czy to będzie działać?";

  const answers1 = {};
  answers1[ENGLISH] = ["New York", "London", "Paris", "Dublin"];
  answers1[SPANISH] = ["Nueva York", "Londres", "París", "Dublín"];
  answers1[POLISH] = ["Nowy Jork", "Londyn", "Paryż", "Dublin"];

  const questions = [
    {
      questionText: question1[language],
      answerOptions: [
        { answerText: answers1[language][0], isCorrect: false },
        { answerText: answers1[language][1], isCorrect: false },
        { answerText: answers1[language][2], isCorrect: true },
        { answerText: answers1[language][3], isCorrect: false },
      ],
    },
    {
      questionText: question2[language],
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: question3[language],
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: question4[language],
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: question5[language],
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: false },
        { answerText: "Maybe", isCorrect: false },
        { answerText: "All answers are correct", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);

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

  const youScored = {};
  youScored[ENGLISH] = "You scored";
  youScored[POLISH] = "Zdobyłeś";
  youScored[SPANISH] = "Lo tienes";

  const outOf = {};
  outOf[ENGLISH] = "out of";
  outOf[POLISH] = "z";
  outOf[SPANISH] = "de";

  return (
    <div className="quiz">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {youScored[language]} {score} {outOf[language]} {questions.length}
            <Button
              onClick={() => setRedirect(true)}
              variant="contained"
              color="secondary"
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
