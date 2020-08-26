import React, {useState} from "react";
import {Link} from "react-router-dom";
import  "./Navbar.css"
import Logo from "../../assets/site-logo.png"
import {useHistory} from "react-router-dom"


function Navbar() {
    let history = useHistory();
    const [openNav, setOpenNav] = useState(false);

    function toggleNavbar() {
        setOpenNav(!openNav);
    }

    return(
        <nav className="navbar-section">
            <div className="navbar-container">
                <img src={Logo} onClick={() => history.push("/home")}/>
                <div className={`nav-links ${openNav ? "nav-active" : null}`}>
                    <div className="left-nav">
                        <Link to={"/offers"} className={"nav-link"} >Offers</Link>
                        <Link to={"/category"} className={"nav-link"}>Pharmacies</Link>
                    </div>
                    <div className="right-nav">
                        <Link to={"/productlist"} className={"nav-link"} >Select your location / EN <i className="fas fa-globe"></i></Link>
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