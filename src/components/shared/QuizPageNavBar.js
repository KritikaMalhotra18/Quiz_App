import React from "react";
import logo from "../../assests/logo.svg";
import user from "../../assests/user.svg";
import angular from "../../assests/angularBracket.svg";
function QuizPageNavBar() {
  return (
    <div className="QuizPageNavBar flex justify-between mx-2 h-1/10 items-center pt-2 ">
      <div className="flex justify-between w-1/4 items-center">
        <img src={logo}></img>
        <img src={angular}/>
        <div className="font-semibold">My first quiz</div>
        <div className="text-sm bg-app-gray px-2 py-1">Big Data</div>
      </div>

      <div className="items-center flex ">
        <img src={user} />
      </div>
    </div>
  );
}
export default QuizPageNavBar;
