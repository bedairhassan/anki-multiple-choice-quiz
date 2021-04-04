import { React, useState, useEffect } from "react";

import mcqDisplay from './JS/mcqDisplay'

export default function Question({ question,condition,conditionSet}) {

//   const [condition, conditionSet] = useState(false);

  const currentItemIsSolution = (item) => item === question.solution;
  const display = (item) => condition && currentItemIsSolution(item);

  const submit = () => conditionSet(true);


  return (
    <div class="card">
        <h1>{question.question}</h1>
        <h2>
          {question.mcq.map((item, index) => {
            return (
              <p
                style={{
                  background: display(item) ? "green" : "transparent",
                  color: display(item) ? "white" : "black",
                }}
              >
                <br />
                {mcqDisplay[index]}) {item}
              </p>
            );
          })}
        </h2>

        <button onClick={submit}  class="btn btn-success">
          Show Answer
        </button>
    </div>
  );
}
