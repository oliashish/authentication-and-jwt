import React from "react";
import "../styles/main.css";

const Main = () => {
    return (
        <div className="main">
            <h3>
                This component will only be visible when
                <br /> the user us authenticated and authorised
            </h3>
        </div>
    );
};

export default Main;
