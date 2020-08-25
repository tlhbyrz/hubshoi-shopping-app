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
import ProductList from "./pages/ProductList/ProductList";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import OfferDetail from "./pages/OfferDetail/OfferDetail";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import PharmacyList from "./pages/PharmacyList/PharmacyList";
import Pharmacy from "./pages/Pharmacy/Pharmacy";


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
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Main />
                    </Route>
                    <Route exact path="/productlist">
                        <ProductList />
                    </Route>
                    <Route exact path="/pharmacy">
                        <Pharmacy />
                    </Route>
                    <Route exact path="/pharmacylist">
                        <PharmacyList />
                    </Route>
                    <Route exact path="/category">
                        <CategoryPage />
                    </Route>
                    <Route exact path="/offers">
                        <OfferDetail />
                    </Route>
                    <Route exact path="/productdetail">
                        <ProductDetailPage />
                    </Route>
                </Switch>

                <div className="scroll-container" >
                    <div className="scroll-to-top" onClick={() => window.scrollTo(0,0)}>
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


