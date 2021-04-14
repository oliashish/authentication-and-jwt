import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/SignIn.css";
import Axios from "axios";

const SignIn = () => {
    let history = useHistory();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();

    const SignIn = async () => {
        const user = await Axios.post(
            "/signin",
            {
                email: Email,
                password: Password,
            }
        );
        if (Object.values(user.headers)[0] < 100) {
            alert(user.data);
        } else {
            console.log(user.data);
            localStorage.setItem("token", user.data);
            
            history.push("/posts");
        }
    };

    return (
        <div className="signin-form-container">
            <h1>Sign In</h1>

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
            <button type="submit" onClick={SignIn}>
                Sign In
            </button>
            <p>
                don't have an account?<Link to="/signup">Create acount</Link>
            </p>
        </div>
    );
};

export default SignIn;
