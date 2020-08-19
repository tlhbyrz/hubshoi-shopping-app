import React from "react";
import "./Footer.css"


function Footer() {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <p className="footer-title">About</p>
                    <p className="footer-text">Offers</p>
                    <p className="footer-text">Pharmacies</p>
                    <p className="footer-text">About Naos</p>
                    <p className="footer-text">FAQ</p>
                    <p className="footer-text">Contact</p>
                </div>
                <div className="footer-column">
                    <p className="footer-title">Categories</p>
                    <p className="footer-text">Body care</p>
                    <p className="footer-text">Body wash</p>
                    <p className="footer-text">Face care</p>
                    <p className="footer-text">Face wash</p>
                    <p className="footer-text">Sun care</p>
                    <p className="footer-text">Baby care</p>
                    <p className="footer-text"> All categories</p>
                </div>
                <div className="footer-column">
                    <p className="footer-title">Skin concerns</p>
                    <p className="footer-text">Sensitive skin</p>
                    <p className="footer-text">Redness prone skin</p>
                    <p className="footer-text">Dehydrated skin</p>
                    <p className="footer-text">Dry to atopic skin</p>
                    <p className="footer-text">Oily skin & Acne prone skin</p>
                    <p className="footer-text">Uneven skin tone</p>
                    <p className="footer-text">Damaged skin</p>
                </div>
                <div className="footer-column">
                    <p className="footer-title footer-title-opacity">Title</p>
                    <p className="footer-text">Dryness & Dehydration</p>
                    <p className="footer-text">Blemishes & Open pores</p>
                    <p className="footer-text">Pigmentation</p>
                    <p className="footer-text">Radiance & Lack of vitality</p>
                    <p className="footer-text">Fine lines & Wrinkles</p>
                    <p className="footer-text">Sensitivity</p>
                    <p className="footer-text">Dark circles & Puffiness</p>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright-text">&#169; 2020 Naos. All rights reserved</p>
                <p className="copyright-text">Privacy</p>
                <p className="copyright-text">Terms</p>
            </div>
        </div>
    )
}


export default Footer