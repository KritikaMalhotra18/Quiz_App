import React,{useState} from "react";
import ObjectiveQuestion from "./ObjectiveQuestion";

function QuestionArea() {
  const [questions, setQuestions] = useState([
    {
      statement: "What is my name",
      options: ["Sheila", "Agrim", "Chameli"],
      type: "objective",
    },
    {
      statement: "What is",
      options: ["Sheila", "Agrim", "Chameli","Lalallaa"],
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
    <div className="flex w-full flex-auto bg-blue-100 items-center justify-center ">
      <div className="w-7/12 flex h-full flex-col">
        {questions.map((item,index) => {
          if (item.type === "objective") {
            return <ObjectiveQuestion number={index+1} question={item} />;
          } else {
            // return(<SubjectiveQuestion/>)
          }
        })}
      </div>
    </div>
  );
}
export default QuestionArea;
