import React from "react";
import { Router } from "react-router-dom";

import Routes from "./Routes";
import history from "./services/history";

import "./config/ReactototronConfig";

function App() {
    return (
        <Router history={history}>
            <Routes />
        </Router>
    );
}

export default App;
