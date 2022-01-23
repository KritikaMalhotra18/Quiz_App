import React, { useState } from "react";
import Button from "../components/shared/Button";
import { v4 as uuidv4 } from 'uuid';

function ObjectiveQuestion({ question, number, setAnswer }) {
  const [currSelected, setCurrent] = useState("");
  const clearOptions = () => {
    setCurrent("");
  };
  return (
    <div className="bg-white rounded-md my-2 px-8 py-5 flex">
      <div className="mr-2">{number}.</div>
      <div>
        <p className="mb-2">{question.statement}</p>
        {/* {"option1"} */}
        {question.options.map((option) => {
          return (
            <div 
              className="flex items-center "
              key={Math.random()}
            >
              <input
                className="mr-2"
                type="radio"
                value={option}
                checked={currSelected === option}
                onChange={() => {
                  setCurrent(option);
                  console.log("hii i am option", option);
                  setAnswer(number - 1, option);
                }}
              />
              <div className="flex items-center">{option}</div>
              
            </div>
          );
        })}
        <div className="w-28 h-8 ">
        <Button
          classes=" flex justify-center items-center bg-app-blue text-white "
          text="Clear Selection"
          onclickfn={() => {
            setCurrent("");
            console.log("hihihi");
            setAnswer(number - 1, null);
          }}
        />
      </div>
      </div>
      
    </div>
  );
}
export default ObjectiveQuestion;
