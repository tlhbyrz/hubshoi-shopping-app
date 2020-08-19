import React,{useEffect, useState} from "react";
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
    const [openCookie, setOPenCookie] = useState(false);

    function handleCookie() {
        localStorage.setItem("cookieAccept", true);
        setOPenCookie(!openCookie);
    }

    useEffect(() =>{
        if (!localStorage.getItem("cookieAccept")){
            setOPenCookie(true);
        }
    },[]);

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

                <div className={`cookie ${openCookie ? "open-cookie" : null}`}>
                    <div className="cookie-container">
                        <p>This website uses cookies to improve your experience. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <button onClick={handleCookie}>Accept</button>
                    </div>
                </div>
            </div>
        </Router>
    );
}


