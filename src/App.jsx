import { Button } from "react-bootstrap"
import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

const App = () => {

  const questions = [
    {
      questionText: "Where is Giant's Causeway located?",
      answerOptions: [
        { answerText: "England", isCorrect: false},
        { answerText: "Northern Ireland", isCorrect: true},
        { answerText: "Scotland", isCorrect: false},
        { answerText: "Wales", isCorrect: false},
      ],
    },
    {
      questionText: "How many individual squares are there in a standard sudoku puzzle?",
      answerOptions: [
        { answerText: "81", isCorrect: true},
        { answerText: "100", isCorrect: false},
        { answerText: "64", isCorrect: false},
        { answerText: "49", isCorrect: false},
      ],
    },
    {
      questionText: "How many miles are there in a marathon?",
      answerOptions: [
        { answerText: "24.8", isCorrect: false},
        { answerText: "28.2", isCorrect: false},
        { answerText: "25.9", isCorrect: false},
        { answerText: "26.2", isCorrect: true},
      ],
    },
    {
      questionText: "How many essays did Alexander Hamilton write for the Federalist Papers?",
      answerOptions: [
        { answerText: "5", isCorrect: false},
        { answerText: "29", isCorrect: false},
        { answerText: "51", isCorrect: true},
        { answerText: "64", isCorrect: false},
      ],
    },
    {
      questionText: "Where is the football acadamy Clairefontaine located?",
      answerOptions: [
        { answerText: "Paris", isCorrect: true},
        { answerText: "Marseille", isCorrect: false},
        { answerText: "Lille", isCorrect: false},
        { answerText: "Rouen", isCorrect: false},
      ],
    },
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [userAnswer, setUserAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [finalScore, setFinalScore] = useState(false)

  const nextQuestionHandler = () => {
    setAnswered(false)
    setUserAnswer(null)
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }
    else{
      setFinalScore(true)
    }
  }

  const previousQuestionHandler = () => {
    setAnswered(false)
    setUserAnswer(null)
    const previousQuestion = currentQuestion - 1
    setCurrentQuestion(previousQuestion)
  }

  const handleOptionAnswer = (index, isCorrect) => {
    setAnswered(true)
    setUserAnswer(index)
    if(isCorrect){
      setScore(score + 1)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen container-fluid">
    {/* <div className="flex justify-center items-center h-screen w-full container"> */}
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
      {/* <div className="bg-white p-5 rounded shadow-lg"> */}
      {/* <div className="col-12 bg-white p-5 rounded shadow-lg"> */}
        <div className="p-2 border text-center font-bold mb-2 text-lg">Quiz App</div>
        {finalScore ? <div>
          You scored {score} out of {questions.length}
          </div>
          :
        <div className="quiz">
          <div className="question">{questions[currentQuestion].questionText}</div>
          {questions[currentQuestion].answerOptions.map((option, index) => {
            return(
              <div key={index}>
              <button
              onClick={() => {handleOptionAnswer(index, option.isCorrect)}}
              className={`block w-full p-2 mt-2 bg-primary rounded ${
                // If the user has answered the question and their answer is correct
                // then the correct answer will glow green. If the user is incorrect
                // Their answer will go red and the correct answer will glow green
                answered ?
                option.isCorrect ? "bg-success"
                : userAnswer === index ? "bg-danger" : ""
                : ""
              }`}>{option.answerText}</button>
              </div>
              )
              })}
              <button className= {`${answered ? "bg-success" : "bg-info-subtle"} block w-full p-2 mt-2 bg-info rounded`}
              disabled = {answered ? "" : "disabled"}
              onClick={nextQuestionHandler}>Next Question</button>
              
              <button className= "block w-full p-2 mt-2 bg-warning-subtle rounded"
              onClick={previousQuestionHandler}>Previous Question</button>

              <p className="text-center text-black-400 text-md">Question {currentQuestion + 1} of {questions.length}</p>
              {score}
        </div>
        }
      </div>
    </div>
  )
}

export default App
