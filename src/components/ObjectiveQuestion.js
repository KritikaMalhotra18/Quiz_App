import React, { useState } from "react";

function ObjectiveQuestion({ question, number }) {
  const [currSelected, setCurrent] = useState("");
  return (
    <div className="bg-white rounded-md my-2 px-8 py-5 flex">
      <div className="mr-2">
          {number}.
      </div>
      <div>
        <p className="mb-2">{question.statement}</p>
        {/* {"option1"} */}
        {question.options.map((option) => {
          return (
            <div className="flex items-center ">
              <input
                className="mr-2"
                type="radio"
                value={option}
                checked={currSelected === option}
                onChange={() => {
                  setCurrent(option);
                }}
              />
              <div className="flex items-center">{option}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ObjectiveQuestion;
