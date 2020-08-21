import React,{useEffect, useState} from "react";
import "./App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
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

                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route exact path="/home">
                        <Main />
                    </Route>
                </Switch>

                <div className="scroll-container" onClick={() => window.scrollTo(0,0)}>
                    <div className="scroll-to-top">
                        <i className="fa fa-long-arrow-up fa-2x" aria-hidden="true"></i>
                    </div>
                </div>


                <div className={`cookie ${openCookie ? "open-cookie" : null}`}>
                    <div className="cookie-container">
                        <p>This website uses cookies to improve your experience. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <button onClick={handleCookie}>Accept</button>
                    </div>
                </div>

                <Footer/>
            </div>
        </Router>
    );
}


