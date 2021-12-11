import React from "react";
import "./App.css";
import User from "./components/User";
import "./components/card-style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetail from "./components/UserDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <h3 className="assignment-title">React Pre Assignment</h3>
            <User />
          </div>
        </Route>
        <Route path="/users/:id">
          <UserDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
