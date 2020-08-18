import React from "react";
import {Link} from "react-router-dom";
import  "./Navbar.css"
import Logo from "../../assets/flooop.png"


function Navbar() {
    return(
        <nav className="navbar">
            <img src={Logo}/>
            <div className="nav-links">
                <div className="left-nav">
                    <Link to={"/home"} className={"nav-link"} >Home</Link>
                    <Link to={"/home"} className={"nav-link"}>About</Link>
                </div>
                <div className="right-nav">

                </div>
            </div>
        </nav>
    )
}


export default Navbar