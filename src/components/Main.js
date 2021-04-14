import React from "react";
import "../styles/main.css";

import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <h3>
                The post component will only be visible when
                <br /> the user us authenticated and authorised
            </h3>
            <Link to="/signup" className="decor-remove">
                <button>Sign Up</button>
            </Link>
            <Link to="/signin" className="decor-remove">
                <button>Sign In</button>
            </Link>
            <Link to="/" className="decor-remove">
                <button>See Posts</button>
            </Link>
        </div>
    );
};

export default Main;
