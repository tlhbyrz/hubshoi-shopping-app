import React, {useState} from "react";
import "./SeeOfferCard.css"

function SeeOfferCard() {
    return(
        <div className="offer-card">
            <div className="offer-card-container">
                <p>Find deals and offers in 220 pharmacies</p>
                <button><i className="fa fa-map-marker" aria-hidden="true"></i>Find nearby pharmacies</button>
            </div>
        </div>
    )
}

export default SeeOfferCard;