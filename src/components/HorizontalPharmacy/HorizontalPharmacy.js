import React from "react";
import "./HorizontalPharmacy.css"
import ProductImg from "../../assets/pharmacy.png"

function HorizontalPharmacy() {
    return(
        <div className="horizontal-pharmacy-card">
            <div className="horizontal-pharmacy-image-section">
                <img className="horizontal-pharmacy-img" src={ProductImg}/>
            </div>

            <div className="horizontal-pharmacy-content">
                <div className="horizontal-pharmacy-info">
                    <p className="horizontal-pharmacy-title">La Grande Pharmacie</p>
                    <p className="horizontal-pharmacy-text">Rue Joffre 1, 4000 Liege</p>
                    <p className="horizontal-pharmacy-text">Phone: +32 4 223 43 83</p>
                </div>

                <div className="horizontal-pharmacy-button-group">
                    <button className="horizontal-pharmacy-button active-pharmacy">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>View in map
                    </button>
                    <button className="horizontal-pharmacy-button">
                        Explore all offers (13)
                    </button>
                </div>
            </div>

        </div>
    )
}

export default HorizontalPharmacy;