import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteQuestion, onChangeAnswer}) {
  console.log(questions)
  const renderQuestion = questions.map((question)=>
    <ul key={question.id}>
      <QuestionItem  question={question} 
                     onDeleteQuestion={onDeleteQuestion} 
                     onChangeAnswer={onChangeAnswer}/>
    </ul>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      {/* display QuestionItem components here after fetching */}
      {renderQuestion}
    </section>
  );
}

export default QuestionList;
