import React from "react";
import PAGE_NOT_FOUND from "../../assests/page_not_found.svg";

function PageNotFound() {
  return (
    <div className="pageNotFoundMainDiv flex w-full h-full">
      <div className="w-1/2 items-center justify-center flex">
        <img src={PAGE_NOT_FOUND} alt="pagenotfound" />
      </div>
      <div className="w-1/2 items-center justify-center flex">
        <div className="text-center">
          <h1 className="text-6xl text-app-blue">OOPS!</h1>
          <p className="my-4 text-2xl">
            This page was not found in the application.
          </p>
          <p className="my-4 text-lg">
            {" "}
            Maybe you wanted to go{" "}
            <a href="/" className="text-blue-600">
              here
            </a>{" "}
            ?
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
