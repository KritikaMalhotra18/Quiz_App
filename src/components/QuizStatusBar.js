import React from "react";
import { v4 as uuidv4 } from 'uuid';

import QuizStatusBarStatistics from "./QuizStatusBarStatistic";
import { statistics } from "../constants/appConstant";
//shift+alt+down
function QuizStatusBar() {
  return (
    <div className="flex justify-between items-center px-2 pb-2 border-b-2 border-gray-200 border-solid">
      {statistics.map((item) => {
        return (
          <div className="w-1/5 px-3 py-2" key= {uuidv4()}>
            <QuizStatusBarStatistics
              src={item.src}
              headingtext={item.headingtext}
              valuetext={item.valuetext}
            />
          </div>
        );
      })}
    </div>
  );
}
export default QuizStatusBar;
