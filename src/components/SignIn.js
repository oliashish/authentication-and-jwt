import React, { useState } from "react";
import "../styles/SignIn.css";

const SignIn = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const signIn = () => {
        console.log(Name, Email, Password);
    };

    return (
        <div className="signin-form-container">
            <h1>Sign In</h1>
            <input
                type="text"
                placeholder="Enter your name..."
                onChange={(event) => {
                    setName(event.target.value);
                }}
            ></input>
            <input
                type="text"
                placeholder="Enter your E-mail..."
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            ></input>
            <input
                type="password"
                placeholder="Enter your password..."
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            ></input>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    );
};

export default SignIn;
