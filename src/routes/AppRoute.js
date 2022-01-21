import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import QuizPageNavBar from "./QuizPage"
import PageNotFound from "./PageNotFound";
function AppRoute() {
  return (
    <div className = "w-screen h-screen">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/quizPage" component={QuizPageNavBar}/>
          <Route path="*" component = {PageNotFound}/>
        

        </Switch>
      </Router>
    </div>
  );
}
export default AppRoute;
