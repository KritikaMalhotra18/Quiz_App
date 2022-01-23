import React, { useState } from "react";
import ObjectiveQuestion from "./ObjectiveQuestion";
import Button from "../components/shared/Button";

function QuestionArea() {
  const [questions, setQuestions] = useState([
    {
      statement: "What is my name",
      options: ["Sheila", "Agrim", "Chameli"],
      type: "objective",
    },
    {
      statement: "What is",
      options: ["Sheila", "Agrim", "Chameli", "Lalallaa"],
      type: "objective",
    },
    {
      statement: "What is my name",
      options: ["Sheila", "Agrim"],
      type: "objective",
    },
    {
      statement: "What is my name",
      options: ["Sheila", "Agrim", "Chameli"],
      type: "objective",
    },
  ]);

  const [solution, setSolution] = useState(
    new Array(questions.length).fill(null)
  );
  const[progressBarWidth, setProgressBarWidth] = useState(1);

  const setAnswer = (index, answer) => {
    let tempSolution = solution;
    tempSolution[index] = answer;
    setSolution(tempSolution);
    calculateWidth();
    console.log(tempSolution);
  };
  // useEffect(()=>{
  //     const x = await fetch("/xyz");
  //     setQuestions([...x,...questions])
  // },[])
 
  const calculateWidth = () => {
    let count = 0;
    for (let i = 0; i < solution.length; i++) {
      if (solution[i]) {
        count++;
      }
    }
    let wid = (count / questions.length) * 100;
    setProgressBarWidth(wid);

  };
  return (
    <div className=" w-full flex-auto bg-blue-100 overflow-auto  ">
      <div className="w-7/12 flex flex-col mx-auto my-10 ">
        <div className="text-right ">

        {Math.floor((progressBarWidth/100)*questions.length)}/{questions.length} answered
        </div>
        <div className="w-full h-2 bg-white shadow-inner rounded-xl mb-4">
          <div
            className="bg-app-green w-1/2 h-full rounded-xl"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
        {questions.map((item, index) => {
          if (item.type === "objective") {
            return (
              <ObjectiveQuestion
                number={index + 1}
                question={item}
                setAnswer={setAnswer}
                key={index + 1}
              />
            );
          } else {
            // return(<SubjectiveQuestion/>)
          }
        })}
        <div className="flex items-center justify-center mt-6">
          <div className="mr-6">
            <a className="text-blue-600 " href="#">
              Skip {"&"} answer later
            </a>
          </div>
          <div className="w-32 h-10 ">
            <Button
              classes="bg-app-blue flex justify-center items-center text-white"
              text="Submit"
              onclickfn={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuestionArea;
