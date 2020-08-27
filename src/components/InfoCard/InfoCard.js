import React from "react";
import "./InfoCard.css"
import Person from "../../assets/info-right.png";

function InfoCard() {
    return(
        <div className="info-card">
            <div className="info-card-showcase">
                <p>Your favorite products special offers</p>
                <button>Select your location</button>
            </div>

            <img src={Person} />
        </div>
    )
}


export default InfoCard;