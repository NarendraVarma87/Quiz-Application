import './App.css'
import { useState } from 'react';
import Questions from './Components/Questions';
import Answers from './Components/Answers';
import questions from "./Constants/constants.json";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };
  console.log(userAnswers);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <>
      <div>
        <h2>Test Your knowledge on World</h2>
      </div>
      {currentQuestion < questions.length && (
        <Questions
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
        {currentQuestion === questions.length && (
        <Answers
          userAnswers={userAnswers}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </>
  )
}

export default App
