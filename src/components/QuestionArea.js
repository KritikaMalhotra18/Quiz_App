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
  // useEffect(()=>{
  //     const x = await fetch("/xyz");
  //     setQuestions([...x,...questions])
  // },[])

  return (
    <div className=" w-full flex-auto bg-blue-100 overflow-auto  ">
      <div className="w-7/12 flex flex-col mx-auto my-10">
        {questions.map((item, index) => {
          if (item.type === "objective") {
            return <ObjectiveQuestion number={index + 1} question={item} />;
          } else {
            // return(<SubjectiveQuestion/>)
          }
        })}
        <div className="flex items-center justify-center mt-6">
          <div className="mr-6">
            <a className="text-blue-600 "href="#">Skip {"&"} answer later</a>
          </div>
          <div className="w-32 h-10 ">
            <Button classes="bg-app-blue flex justify-center items-center text-white" text="Submit" onclickfn={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuestionArea;
