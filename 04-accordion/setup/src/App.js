import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <article className="container">
      <div>
        <h3>Questions And Answers About Login</h3>{" "}
      </div>

      <div>
        {" "}
        {questions.map((question) => {
          return <SingleQuestion question={question} />;
        })}
      </div>
    </article>
  );
}

export default App;
