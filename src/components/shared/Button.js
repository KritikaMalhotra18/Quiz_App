import React from "react";

export default function Button({ classes, text, onclickfn }) {
  return (
    <div className="h-full w-full rounded-md ">
      <button
        onClick={onclickfn}
        className={` ${classes} h-full w-full rounded-md flex`}
      >
        {text}
      </button>
    </div>
  );
}
