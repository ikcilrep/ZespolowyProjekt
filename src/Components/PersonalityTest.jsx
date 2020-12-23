import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./PersonalityTest.css";
import { Button } from "@material-ui/core";
import dictionary from "../dictionary.json";
import { Context } from "../Store";


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
    {
      questionText: dictionary[language].personalityTestQuestion3,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion4,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion5,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion6,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion7,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion8,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion9,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion10,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion11,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion12,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion13,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion14,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion15,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion16,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion17,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion18,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion19,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion20,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion21,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion22,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion23,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion24,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion25,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion26,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion27,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion28,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion29,
      answerOptions: [
        { answerText: dictionary[language].personalityTestAnswer1, questionNumber: 1 },
        { answerText: dictionary[language].personalityTestAnswer2, questionNumber: 2 },
        { answerText: dictionary[language].personalityTestAnswer3, questionNumber: 3 },
        { answerText: dictionary[language].personalityTestAnswer4, questionNumber: 4 },
      ],
    },
    {
      questionText: dictionary[language].personalityTestQuestion30,
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
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [showScore, setShowScore] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [score, setScore] = useState(0);


  const [state, dispatch] = useContext(Context);
  const questions = getQuestions(language);

  useEffect(() => {
    if (currentAnswer !== null) {
      dispatch({ type: `ADD_ANSWEAR`, payload: currentAnswer });
    }
  }, [currentAnswer]);
  
  
  if (redirect) {
    return <Redirect to={nextPagePath} />;
  }


  const handleAnswerOptionClick = (questionText, questionNumber) => {

    console.log('Q&A: ', questionText, questionNumber)
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
                <span>{currentQuestion + 1}</span> / {questions.length}
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