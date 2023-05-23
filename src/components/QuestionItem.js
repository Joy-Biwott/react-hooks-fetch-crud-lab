import React from "react";

function QuestionItem({ question, onDeleteQuestion, onChangeAnswer }) {
  const { id, prompt, answers, correctIndex } = question;
 console.log(question)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then((r)=>r.json())
    .then(()=>{
       onDeleteQuestion(id)
    })
     
  }
  function handleChange(event){
    const newIndex=event.target.value;
    const updateAnswer={correctIndex: newIndex}
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(updateAnswer)
    })
      .then((r)=>r.json())
      .then(()=>{
        onChangeAnswer(id, newIndex)
      })
      
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
