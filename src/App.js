import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Posts from "./components/Posts";
import SignIn from "./components/SignInn";
import SignUp from "./components/SignUpp";

import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/guide" component={Main}></Route>
                <Route exact path="/signin" component={SignIn}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
            </Switch>
        </div>
    );
}

export default App;
