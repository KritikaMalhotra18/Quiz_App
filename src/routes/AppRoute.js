import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
function AppRoute() {
  return (
    <div className = "w-screen h-screen">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        

        </Switch>
      </Router>
    </div>
  );
}
export default AppRoute;
