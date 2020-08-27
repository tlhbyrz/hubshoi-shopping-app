import React, {useState} from "react";
import {Link} from "react-router-dom";
import  "./Navbar.css"
import Logo from "../../assets/site-logo.png"
import {useHistory} from "react-router-dom"


function Navbar({setIsModalOpen}) {
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
                        <Link onClick={toggleNavbar} to={"/offerdetail"} className={"nav-link"} >Offers</Link>
                        <Link onClick={toggleNavbar} to={"/category"} className={"nav-link"}>Pharmacies</Link>
                    </div>
                    <div className="right-nav">
                        <p className={"nav-link"} onClick={() => setIsModalOpen(true)}>Select your location / EN <i className="fas fa-globe"></i></p>
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