import React from "react";

function QuizStatusBarStatistics({ src, headingtext, valuetext }) {
  return (
    <div className="flex bg-gray-200 px-2 py-1 rounded-md items-center">
      <div className="m-2" >
        <img src={src} />
      </div>
      <div className="flex-col flex mx-4">
        <div >{headingtext}</div>
        <div className="font-semibold text-lg">{valuetext}</div>
      </div>
    </div>
  );
}
export default QuizStatusBarStatistics;
