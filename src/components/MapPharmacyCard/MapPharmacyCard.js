import React, {useState} from "react";
import "./MapPharmacyCard.css";
import DirectionIcon from "../../assets/direction-icon.svg";
import PharmacyImg from "../../assets/pharmacy-product.jpg"

function MapPharmacyCard(props) {
    const image = true
    const [showClocks, setShowClocks] = useState(false);

    return(
        <div className="map-page-card-section">

            {image &&
            (
                <img className="map-page-card-img" src={PharmacyImg} />
            )}


            <div className="map-page-card">
                <div className="map-page-card-info">
                    <p className="map-page-card-title">La Grande Pharmacie</p>
                    <p className="map-page-card-text">Rue Joffre 1, 4000 Liege</p>
                    <p className="map-page-card-text">Phone: +32 4 223 43 83</p>
                    <div className="map-page-card-times">
                        <p className="map-page-card-current">Open now<span>.</span></p>
                        <p className="map-page-card-status">Closes 6:30PM</p>
                        <i className="fa fa-chevron-down" aria-hidden="true" onClick={() => setShowClocks(!showClocks)}></i>

                        <div className={`map-page-card-clocks ${showClocks ? "show-banner-clocks" : null}`}>
                            <p className="map-page-card-clock-title">Opening and closing times</p>
                            <div className="map-page-card-clock-section">
                                <p className="map-page-card-clock-day">Monday</p>
                                <p className="map-page-card-clock-time">09AM-18:30PM</p>
                            </div>
                            <div className="map-page-card-clock-section">
                                <p className="map-page-card-clock-day">Monday</p>
                                <p className="map-page-card-clock-time">09AM-18:30PM</p>
                            </div>
                            <div className="map-page-card-clock-section">
                                <p className="map-page-card-clock-day">Monday</p>
                                <p className="map-page-card-clock-time">09AM-18:30PM</p>
                            </div>
                            <div className="map-page-card-clock-section">
                                <p className="map-page-card-clock-day">Monday</p>
                                <p className="map-page-card-clock-time">Closed</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="map-page-card-buttons">
                    <button className="map-page-card-button">Explore all offers (20)</button>
                    <div className="map-page-card-links">
                        <div className="map-page-card-link">
                            <img src={DirectionIcon} className="map-page-card-link-icon" />
                            <p className="map-page-card-link-text">Get directions</p>
                        </div>

                        <div className="map-page-card-link">
                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                            <p className="map-page-card-link-text">Share</p>
                        </div>
                    </div>
                </div>


                <div className="map-page-card-view-other">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p className="map-page-card-view-other-text">View other pharmacies (13)</p>
                </div>

            </div>
        </div>
    )
}

export default MapPharmacyCard;