import React from "react";
import "./HeroBanner.css"
import BannerImage from "../../assets/banner.png"

function HeroBanner() {

    return(
        <div className="hero-banner-section">
            <div className={`hero-banner-container`}>
                <div className="hero-banner-text-container">
                    <p className="hero-banner-title">Lorem ipsum dolor sit amet consectetur</p>
                    <p className="hero-banner-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    </p>
                    <button className="hero-banner-btn">Available pharmacies (13)</button>
                </div>
                <img src={BannerImage}/>
            </div>
        </div>
    )
}

export default HeroBanner;