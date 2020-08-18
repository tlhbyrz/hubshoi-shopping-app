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
import InfoCard from "./components/InfoCard/InfoCard";


export default function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <InfoCard/>
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


