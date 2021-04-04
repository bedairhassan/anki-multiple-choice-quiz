import { React, useState, useEffect } from "react";

import Question from "../Question/Main";
import data from "./data/data";

export default function Quiz() {
  const [track, trackSet] = useState([]);
  const [question, questionSet] = useState();

  let genRandom = (max) => Math.floor(Math.random() * max);

  const findQuestion = () => {
    let max = data.length;

    if(track.length === max){
        disableButtonSet(true)
        return;
    }

    while (track.length < max) {
      let random = genRandom(max);

      if (track.filter((item) => item === random)[0] !== undefined) {
        // if random found in track array
        continue;
      } else {
        questionSet(data[random]);

        // update
        trackSet([...track, random]);
        console.log(track);

        break;
      }
    }
  };

  useEffect(findQuestion, []);

  const [condition, conditionSet] = useState(false);
  const [disableButton, disableButtonSet] = useState(false);
  const conditionSett = (condition) => conditionSet(condition);

  const trigger = () => {
    findQuestion();
    conditionSet(false);
  };

  return (
    <div class="container">
      {question !== undefined && (
        <Question
          question={question}
          condition={condition}
          conditionSet={conditionSett}
        />
      )}
      <button
        class="btn btn-warning"
        onClick={trigger}
        disabled={disableButton}
      >
        Next
      </button>
    </div>
  );
}
