import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
      .then((r)=>r.json())
      .then((data)=>setQuestions(data))
  }, [])
  function submitQuestion(data){
    setQuestions(data)
  }
  function deleteQuestion(id){
    const updateQuestions=questions.filter((question)=>question.id!==id)
    setQuestions(updateQuestions)
  }
  function changeAnswer(id, correctIndex){
    const updateAnswer= questions.map((question)=>{
      if(question.id===id){
        return{...question, correctIndex}
      }else{
        return question
      }
    })
    setQuestions(updateAnswer)
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitQuestion={submitQuestion} /> : <QuestionList questions={questions} onDeleteQuestion={deleteQuestion} onChangeAnswer={changeAnswer} />}
    </main>
  );
}

export default App;
