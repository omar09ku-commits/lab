import React from 'react';

const Quiz = () => {
  const questions = [
    {
      question: 'What is the importance of budgeting in financial literacy?',
      options: [
        'A) It helps in tracking expenses',
        'B) It is unnecessary',
        'C) It only benefits businesses',
        'D) None of the above'
      ],
      answer: 'A'
    },
    {
      question: 'What does the term "interest rate" mean?',
      options: [
        'A) The cost of borrowing money',
        'B) A fee for managing accounts',
        'C) A bonus for saving money',
        'D) None of the above'
      ],
      answer: 'A'
    },
    {
      question: 'What is a credit score?',
      options: [
        'A) A measure of creditworthiness',
        'B) A type of investment',
        'C) A government regulation',
        'D) None of the above'
      ],
      answer: 'A'
    }
  ];

  return (
    <div>
      <h1>Financial Literacy Quiz</h1>
      {questions.map((q, index) => (
        <div key={index}>
          <h2>{q.question}</h2>
          <ul>
            {q.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;