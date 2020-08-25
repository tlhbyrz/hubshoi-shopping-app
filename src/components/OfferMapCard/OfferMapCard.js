import React from "react";
import "./OfferMapCard.css";

function OfferMapCard() {
    return(
        <div className="offermap-card">
            <div className="offermap-card-info">
                <p className="offermap-card-title">La Grande Pharmacie</p>
                <p className="offermap-card-text">Rue Joffre 1, 4000 Liege</p>
                <p className="offermap-card-text">Phone: +32 4 223 43 83</p>
                <div className="offermap-card-view-other">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p className="offermap-card-card-view-other-text">View in map</p>
                </div>
            </div>

            <div className="offermap-card-btn-container">
                <button className="offermap-card-btn">See offers (13)</button>,
            </div>
        </div>
    )
}

export default OfferMapCard;