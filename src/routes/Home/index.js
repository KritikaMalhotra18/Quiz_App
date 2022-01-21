import React from "react";
import Button from "../../components/shared/Button";
import Navbar from "../../components/shared/Navbar";
import pic1 from "../../assests/pic1.svg";

// shift+alt+down
//alt+up arrow
//clt+p
function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className=" flex flex-col items-center justify-center h-9/10">
        <h1 className="text-2xl "> abc invites you to take the quiz</h1>
        <p className=" text-2xl font-bold">Quiz Name</p>
        <img src={pic1}></img>
        <div className="h-14 w-40">
          <Button
            classes="bg-app-blue text-white items-center justify-center p-2 "
            text="Take this quiz"
            onclickfn={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
