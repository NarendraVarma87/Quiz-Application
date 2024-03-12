import React from 'react'

const Questions = ({question, onAnswerClick = () => {}}) => {
  return (
    <div>
       <div className="question">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((option) => {
          return (
            <li key={option.text}>
              <button onClick={() => onAnswerClick(option.isCorrect)}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  )
}

export default Questions
