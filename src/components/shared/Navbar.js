import React from "react";
import logo from "../../assests/logo.svg";
import user from "../../assests/user.svg";
import Button from "./Button";
function Navbar() {
  return (
    <div className="h-1/10 flex justify-between items-center mx-2">
      <div className="">
        {/* logo */}
        <img src={logo}></img>
      </div>
      <div className=" flex justify-between items-center w-1/3 ">
        <div className="w-28">
          <Button
            classes="bg-app-blue text-white flex justify-center items-center"
            text={"Create Quiz"}
            onclickfn={() => {}}
          />
        </div>

        <a>Features</a>
        <a>Pricing</a>
        <a>FAQs</a>
        <img src={user}></img>
      </div>
    </div>
  );
}
export default Navbar;
