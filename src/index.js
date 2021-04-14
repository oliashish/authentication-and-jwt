import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";

Axios.defaults.baseURL = "http://localhost:5000/api/users";
Axios.defaults.headers.common["auth-token"] = localStorage.getItem("token");

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
