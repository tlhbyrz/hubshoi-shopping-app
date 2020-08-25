import React, {useState} from "react";
import "./PharmacyTopBanner.css"
import ProductImg from "../../assets/pharmacy.png";
import DirectionIcon from "../../assets/direction-icon.svg"

function PharmacyTopBanner() {
    const [showClocks, setShowClocks] = useState(false);

    return(
        <div className="pharmacy-banner-card">
            <div className="pharmacy-banner-image-section">
                <img className="pharmacy-banner-img" src={ProductImg}/>
            </div>

            <div className="pharmacy-banner-content">
                <div className="pharmacy-banner-info">
                    <p className="pharmacy-banner-title">La Grande Pharmacie</p>
                    <p className="pharmacy-banner-text">Rue Joffre 1, 4000 Liege</p>
                    <p className="pharmacy-banner-text">Phone: +32 4 223 43 83</p>
                    <div className="pharmacy-banner-times">
                        <p className="pharmacy-banner-current">Open now<span>.</span></p>
                        <p className="pharmacy-banner-status">Closes 6:30PM</p>
                        <i className="fa fa-chevron-down" aria-hidden="true" onClick={() => setShowClocks(!showClocks)}></i>

                        <div className={`pharmacy-banner-clocks ${showClocks ? "show-banner-clocks" : null}`}>
                            <p className="pharmacy-banner-clock-title">Opening and closing times</p>
                            <div className="pharmacy-banner-clock-section">
                                <p className="pharmacy-banner-clock-day">Monday</p>
                                <p className="pharmacy-banner-clock-time">09AM-18:30PM</p>
                            </div>
                            <div className="pharmacy-banner-clock-section">
                                <p className="pharmacy-banner-clock-day">Monday</p>
                                <p className="pharmacy-banner-clock-time">09AM-18:30PM</p>
                            </div>
                            <div className="pharmacy-banner-clock-section">
                                <p className="pharmacy-banner-clock-day">Monday</p>
                                <p className="pharmacy-banner-clock-time">09AM-18:30PM</p>
                            </div>
                            <div className="pharmacy-banner-clock-section">
                                <p className="pharmacy-banner-clock-day">Monday</p>
                                <p className="pharmacy-banner-clock-time">Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pharmacy-banner-button-group">
                    <div className="pharmacy-banner-button">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <p className="pharmacy-banner-button-text">View in map</p>
                    </div>

                    <div className="pharmacy-banner-button">
                        <img src={DirectionIcon} className="pharmacy-banner-direction-icon" />
                        <p className="pharmacy-banner-button-text">Get directions</p>
                    </div>

                    <div className="pharmacy-banner-button">
                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                        <p className="pharmacy-banner-button-text">Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PharmacyTopBanner;