import React from "react";
import "./MapPageHeader.css"

function MapPageHeader() {
    return(
        <div className="map-page-header">
            <div className="map-page-header-left">
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                <p>Back to offer detail</p>
            </div>

            <div className="map-page-header-info-section">
                <p className="map-page-header-title">Buy 1 Get 1 Free</p>
                <div className="map-page-header-price-container">
                    <p>€30</p>
                    <p>€40</p>
                    <p>Save €10</p>
                </div>
            </div>
        </div>
    )
}

export default MapPageHeader;