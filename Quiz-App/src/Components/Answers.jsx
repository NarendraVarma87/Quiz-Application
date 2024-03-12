import React from 'react'

const Answers = ({userAnswers, questions, resetQuiz = () => {}}) => {
    const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
       <h4>You answered {correctAnswers} out of {questions.length} questions{" "} 
        <span onClick={resetQuiz}>Click here to Retry</span></h4>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}. {question.question}
              <b>
                {userAnswers[index]
                  ? ""
                  : `- ${
                      question.answerOptions.find((ans) => ans.isCorrect).text
                    }`}
              </b>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Answers
