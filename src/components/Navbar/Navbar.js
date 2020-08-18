import React from "react";
import {Link} from "react-router-dom";
import  "./Navbar.css"
import Logo from "../../assets/site-logo.png"


function Navbar() {
    return(
        <nav className="navbar">
            <img src={Logo}/>
            <div className="nav-links">
                <div className="left-nav">
                    <Link to={"/home"} className={"nav-link"} >Offers</Link>
                    <Link to={"/home"} className={"nav-link"}>Pharmacies</Link>
                </div>
                <div className="right-nav">
                    <Link to={"/home"} className={"nav-link"} >Select your location / EN <i className="fas fa-globe"></i></Link>
                </div>
            </div>
        </nav>
    )
}


export default Navbar