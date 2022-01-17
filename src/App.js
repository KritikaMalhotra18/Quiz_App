import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import pic1 from "./assests/pic1.svg";
import Button from "./components/shared/Button";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className=" flex flex-col items-center justify-center h-full">
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

export default App;
