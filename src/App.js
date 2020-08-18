import React from "react";
import "./App.css"
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

                <div className="app-container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>


                <Footer/>
            </div>
        </Router>
    );
}


