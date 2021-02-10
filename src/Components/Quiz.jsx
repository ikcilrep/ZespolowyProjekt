import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import "./Quiz.css";
import { Button } from "@material-ui/core";
import dictionary from "../dictionary.json";
import { Context } from "../Store";


const getQuestions = (language) => {
  const questions = [
    {
      questionText: dictionary[language].question1,
      answerOptions: [
        { answerText: dictionary[language].answers1[0], questionNumber: 1 },
        { answerText: dictionary[language].answers1[1], questionNumber: 2 },
        { answerText: dictionary[language].answers1[2], questionNumber: 3 },
      ],
    },
    {
      questionText: dictionary[language].question2,
      answerOptions: [
        { answerText: dictionary[language].answers2[0], questionNumber: 1 },
        { answerText: dictionary[language].answers2[1], questionNumber: 2 },
        { answerText: dictionary[language].answers2[2], questionNumber: 3 },
      ],
    },
    {
      questionText: dictionary[language].question3,
      answerOptions: [
        { answerText: dictionary[language].answers3[0], questionNumber: 1 },
        { answerText: dictionary[language].answers3[1], questionNumber: 2 },
        { answerText: dictionary[language].answers3[2], questionNumber: 3 },
      ],
    },
    {
      questionText: dictionary[language].question4,
      answerOptions: [
        { answerText: dictionary[language].answers4[0], questionNumber: 1 },
        { answerText: dictionary[language].answers4[1], questionNumber: 2 },
        { answerText: dictionary[language].answers4[2], questionNumber: 3 },
      ],
    },
    {
      questionText: dictionary[language].question5,
      answerOptions: [
        { answerText: dictionary[language].answers5[0], questionNumber: 1 },
        { answerText: dictionary[language].answers5[1], questionNumber: 2 },
        { answerText: dictionary[language].answers5[2], questionNumber: 3 },
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
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [state, dispatch] = useContext(Context);
  const questions = getQuestions(language);

  useEffect(() => {
    if (currentAnswer !== null) {
      dispatch({ type: `ADD_ANSWEAR2`, payload: currentAnswer });
    }
  }, [currentAnswer]);


  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }
  const handleAnswerOptionClick = (questionText, questionNumber) => {
    console.log(questionText, ' ==> ',  questionNumber)
    setCurrentAnswer({ questionText, questionNumber });

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  return (
    <div className="quiz">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            {dictionary[language].youScored}
            <Button
              onClick={() => setRedirect(true)}
              variant="contained"
              color="primary"
              id="confirmbutton"
            >
            OK
            </Button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <Button
                  onClick={() =>
                    handleAnswerOptionClick(questions[currentQuestion].questionText, answerOption.answerText)
                  }
                  variant="contained"
                  color="primary"
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
