import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./PersonalityTest.css";
import { Button } from "@material-ui/core";
import dictionary from "../dictionary.json";
import AppContext from "./AppContext";


const getQuestions = (language) => {
  const questions = [
    {
      questionText: dictionary[language].personalityTestQuestion1,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion2,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
  ];

  return questions;
};

const PersonalityTest = ({ nextPagePath, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState({'tmp': 2});

  const [showScore, setShowScore] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);


  const {personalityTestAnswers, setPersonalityTestAnswers} = useContext(AppContext);
  const questions = getQuestions(language);

  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }

  const handleAnswerOptionClick = (questionText, questionNumber) => {
    let dupa = personalityTestAnswers + ' | ' + questionText + ' - answer: ' + questionNumber;

    setPersonalityTestAnswers(questionNumber);

    console.log('Q&A: ', questionText, questionNumber)
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
                <span>PERSONALITY TEST {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <Button
                  onClick={() =>
                    handleAnswerOptionClick(questions[currentQuestion].questionText, answerOption.questionNumber)
                  }
                  variant="contained"
                  color="primary"
                  aria-label="large outlined primary button group"
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

export default PersonalityTest;