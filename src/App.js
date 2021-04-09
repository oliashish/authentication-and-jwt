import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
            </Switch>
        </div>
    );
}

export default App;
