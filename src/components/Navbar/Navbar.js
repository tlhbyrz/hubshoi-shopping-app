import React, {useState} from "react";
import {Link} from "react-router-dom";
import  "./Navbar.css"
import Logo from "../../assets/site-logo.png"


function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    function toggleNavbar() {
        setOpenNav(!openNav);
    }

    return(
        <nav className="navbar">
            <div className="navbar-container">
                <img src={Logo}/>
                <div className={`nav-links ${openNav ? "nav-active" : null}`}>
                    <div className="left-nav">
                        <Link to={"/home"} className={"nav-link"} >Offers</Link>
                        <Link to={"/home"} className={"nav-link"}>Pharmacies</Link>
                    </div>
                    <div className="right-nav">
                        <Link to={"/home"} className={"nav-link"} >Select your location / EN <i className="fas fa-globe"></i></Link>
                    </div>
                </div>
            </div>

            <button className={`toggler ${openNav ? "cross" : null}`} onClick={toggleNavbar}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
        </nav>
    )
}


export default Navbar