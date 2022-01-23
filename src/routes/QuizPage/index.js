import React from "react";
import QuizPageNavBar from "../../components/shared/QuizPageNavBar";
import QuizStatusBar from "../../components/QuizStatusBar";
import QuestionArea from "../../components/QuestionArea";
function QuizPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <QuizPageNavBar />
      <QuizStatusBar />
      <QuestionArea />
    </div>
  );
}
export default QuizPage;
