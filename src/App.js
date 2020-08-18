import React from "react";
import {Alert} from "react-bootstrap";

import { motion } from "framer-motion"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <Router>
            <div>
                <Navbar/>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>

                <Footer/>
            </div>
        </Router>
    );
}


