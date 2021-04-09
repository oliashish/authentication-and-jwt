import React, { useState } from "react";
import "../styles/SignIn.css";

const SignUp = () => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const signUp = () => {
        console.log(Email, Password);
    };

    return (
        <div className="signin-form-container">
            <h1>Sign Up</h1>

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
            <button type="submit" onClick={signUp}>
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;
