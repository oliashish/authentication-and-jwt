import Axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/SignIn.css";

const SignUpp = () => {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    let history = useHistory();

    const signUp = async () => {
        const res = await Axios.post("/signup", {
            userName: Name,
            email: Email,
            password: Password,
        });

        if (res.data._id) {
            alert("success.. please press ok to continue");
            history.push("/signin");
        } else {
            alert(res.data);
        }
    };

    return (
        <div className="signin-form-container">
            <h1>Sign Up</h1>
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
            <button type="submit" onClick={signUp}>
                Sign Up
            </button>
            <p>
                already have an account?<Link to="/signin">Sign In</Link>
            </p>
        </div>
    );
};

export default SignUpp;
